const node = 'https://nault.nanos.cc/proxy';
const gameaddress = 'nano_3zrie5gc4j8r536d3hj3pa48aejkskkgrec8f961xc78cmsw6uamx5z3q5xq';

import axios from 'axios';
import sha256 from 'js-sha256';

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
			count: 200,
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

export { sha256tofloat, blockInfo, fetchData, accountfetchData, gameaddress, hashtoroll };
