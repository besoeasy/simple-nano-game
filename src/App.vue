<template>
	<div class="px-3">
		<section class="py-5 bg-white">
			<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row">
				<div class="relative flex flex-col md:flex-row">
					<a href="https://nano.besoeasy.com" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
						<span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">NANO.BESOEASY.COM</span>
					</a>
				</div>

				<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
					<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
						<a :href="'https://nanocrawler.cc/explorer/account/' + gameaddress" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Explorer</a>
						<a href="https://github.com/besoeasy/simple-nano-game" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Github</a>
					</nav>
				</div>
			</div>
		</section>

		<section class="text-gray-600">
			<div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
				<h1 class="title-font text-2xl m-2 font-medium">DEPOSIT NANO TO PLAY</h1>
				<img class="m-2 object-cover object-center rounded" src="deposit.png" />
				<div class="text-center lg:w-2/3 w-full">
					<p class="m-2 leading-relaxed text-xl">
						{{ gameaddress }}
					</p>
					<div class="flex justify-center sm:block md:hidden">
						<a :href="'nano:' + gameaddress" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Open Natrium</a>
					</div>
				</div>
			</div>
		</section>

		<section class="py-3 text-center">
			<div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
				<ul class="grid grid-cols-2 gap-4 border-2 border-teal-600 rounded-xl lg:grid-cols-4">
					<li class="p-8">
						<p class="text-2xl font-extrabold text-teal-500">
							<strong>{{ formatS(balance) }} NANO</strong>
						</p>
						<p class="mt-1 text-lg font-medium">Game Balance</p>
					</li>

					<li class="p-8">
						<p class="text-2xl font-extrabold text-teal-500">
							<strong>{{ formatS(balance / 20) }} NANO</strong>
						</p>
						<p class="mt-1 text-lg font-medium">Max Win</p>
					</li>

					<li class="p-8">
						<p class="text-2xl font-extrabold text-teal-500">20</p>
						<p class="mt-1 text-lg font-medium">Roll Below</p>
					</li>

					<li class="p-8">
						<p class="text-2xl font-extrabold text-teal-500">5 Times</p>
						<p class="mt-1 text-lg font-medium">Win</p>
					</li>
				</ul>
			</div>
		</section>

		<div class="py-10 overflow-x-auto">
			<div class="container mx-auto">
				<table class="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200">
					<thead>
						<tr class="divide-x divide-gray-100">
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">#</th>
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Player</th>
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Amount</th>

							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Roll</th>
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Type</th>
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Block</th>
							<th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Time</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-200">
						<tr class="divide-x divide-gray-100" v-for="item in betsdata" v-bind:key="item.id">
							<td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{{ item.height }}</td>
							<td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ item.account }}</td>
							<td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ item.amount }}</td>

							<td class="px-4 py-2 text-gray-700 whitespace-nowrap">
								<div v-if="item.type == 'receive'">{{ item.roll }}</div>
								<div v-if="item.type !== 'receive'">--</div>
							</td>
							<td class="px-4 py-2 text-gray-700 whitespace-nowrap"><a v-if="item.type == 'send'" class="px-4 py-1 text-red-400 rounded">SEND</a> <a v-if="item.type == 'receive'" class="px-4 py-1 text-green-400 rounded ">RECEIVE</a></td>
							<td class="px-4 py-2 text-gray-700 whitespace-nowrap"><a target="_blank" class="px-4 py-1 text-white bg-blue-400 rounded" v-bind:href="'https://nanocrawler.cc/explorer/block/' + item.hash">View</a></td>
							<td class="px-4 py-2 text-gray-700 whitespace-nowrap">{{ item.time }}</td>
						</tr>
					</tbody>
				</table>

				<div class="p-4 text-green-700 border rounded border-green-900/10 bg-green-50" role="alert">
					<strong class="text-sm font-medium">Connected to Node : {{ node }} </strong>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const nodes = ['https://nault.nanos.cc/proxy', 'https://vault.nanocrawler.cc/api/node-api'];

	const gameaddress = 'nano_3zrie5gc4j8r536d3hj3pa48aejkskkgrec8f961xc78cmsw6uamx5z3q5xq';

	let node = nodes[Math.floor(Math.random() * nodes.length)];

	import axios from 'axios';
	import sha256 from 'js-sha256';
	import * as timeago from 'timeago.js';

	function sha256tofloat(hash) {
		hash = sha256(hash);
		hash = hash.substring(0, 8);
		hash = parseInt(hash, 16);
		hash = hash / 0xffffffff;
		return hash * 100;
	}

	async function blockInfo(block) {
		const response = await axios.post(node, { json_block: 'true', action: 'blocks_info', hashes: [block] }).then(function(response) {
			return response.data.blocks[block];
		});

		return response;
	}

	async function fetchData() {
		const response = await axios
			.post(node, {
				action: 'account_history',
				account: gameaddress,
				count: 100,
			})
			.then(function(response) {
				return response.data;
			});

		return response;
	}

	async function accountfetchData() {
		const response = await axios
			.post(node, {
				action: 'account_info',
				account: gameaddress,
			})
			.then(function(response) {
				return response.data;
			});

		return response;
	}

	async function hashtoroll(hash) {
		const blockinfo = await blockInfo(hash);

		return sha256tofloat(hash + blockinfo.contents.signature + blockinfo.contents.work).toFixed(2);
	}

	export default {
		data() {
			return {
				gameaddress: gameaddress,
				node: '',
				balance: 1000000000000000000000000000000 * 1353,
				betsdata: [],
			};
		},
		methods: {
			formatS: function(var1) {
				return parseFloat(var1 / 1000000000000000000000000000000).toFixed(4);
			},
			async fetchdata() {
				node = nodes[Math.floor(Math.random() * nodes.length)];

				console.log('Node : ' + node);

				const accountdata = await accountfetchData();

				const data = await fetchData();

				console.log(accountdata);

				const history = data.history;

				if (history.length > 1) {
					this.node = node;

					this.balance = accountdata.balance;

					this.betsdata = [];

					var i;

					for (i = 0; i < history.length; i++) {
						var roll = await hashtoroll(history[i].hash);

						var time_r = timeago.format(parseInt(history[i].local_timestamp) * 1000);

						var obj = {
							height: history[i].height,
							account: history[i].account,
							amount: this.formatS(history[i].amount),
							type: history[i].type,
							hash: history[i].hash,
							roll: roll,
							time: time_r,
						};

						this.betsdata.push(obj);
					}
				}
			},
		},
		async mounted() {
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
			await this.fetchdata();
		},
	};
</script>
