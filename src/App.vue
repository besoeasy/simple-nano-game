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
						<p class="text-2xl font-extrabold text-teal-500">33</p>
						<p class="mt-1 text-lg font-medium">Roll Below</p>
					</li>

					<li class="p-8">
						<p class="text-2xl font-extrabold text-teal-500">3 Times</p>
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
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import { gameaddress, fetchData, accountfetchData, hashtoroll } from './func';

	export default {
		data() {
			return {
				gameaddress: gameaddress,
				balance: 1000000000000000000000000000000*1353,
				betsdata: [],
			};
		},
		methods: {
			formatS: function(var1) {
				return parseFloat(var1 / 1000000000000000000000000000000).toFixed(6);
			},
			async fetchdata() {
				const accountdata = await accountfetchData();

				const data = await fetchData();

				const history = data.history;

				this.balance = accountdata.balance;

				this.betsdata = [];

				var i;

				for (i = 0; i < history.length; i++) {
					var roll = await hashtoroll(history[i].hash);

					var obj = {
						height: history[i].height,
						account: history[i].account,
						amount: this.formatS(history[i].amount),
						type: history[i].type,
						hash: history[i].hash,
						roll: roll,
					};

					this.betsdata.push(obj);
				}
			},
		},
		async mounted() {
                      this.fetchdata();
		},
	};
</script>
