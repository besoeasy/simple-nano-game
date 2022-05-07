const nano = require('nanopay');
const sha256 = require('js-sha256');

nano.init('https://nault.nanos.cc/proxy', { node: 'https://bpow.banano.cc/service/', user: process.env.USER, api_key: process.env.API_KEY });

const secrateKey = process.env.SECRATE_KEY;

function sha256tofloat(hash) {
	var hash = sha256(hash);
	var hash = hash.substring(0, 8);
	var hash = parseInt(hash, 16);
	var hash = hash / 0xffffffff;
	return hash * 100;
}

async function game() {
	// generate address
	var genaddress = await nano.secretKeytoAddress(secrateKey);

	// recieve pending transactions
	await nano.fetchPending(secrateKey);

	// fetch Data
	var accountData = await nano.addressInfo(genaddress);

	var lastbet = accountData.history[0] || null;

	var blockinfo = await nano.blockInfo(lastbet.hash);

	if (lastbet.type == 'receive') {
		var float = sha256tofloat(lastbet.hash + blockinfo.contents.signature + blockinfo.contents.work);

		console.log("Player : " + lastbet.account);
		console.log('Float : ' + float);

		var amount = Math.min(lastbet.amount * 5, accountData.info.balance / 25) / 1000000000000000000000000000000;

		if (float < 20 && amount > 0.00000001) {
			var done2 = await nano.send(secrateKey, lastbet.account, amount);

			console.log(done2);
		}

	} else {
		console.log('fail safe');
	}
}

async function dev_pay() {
	var done3 = await nano.sendPercent(secrateKey, 'nano_3sumsrd8ckhokkb7379p49c1ndzpi7f94bzkxqozrfs8fk38qc1awn9k1kyb', 0.01);
	console.log(done3);
}

(async function runs() {
	try {
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();
		await game();

		if (Math.random() > 0.97) {
			await dev_pay();
		}

	} catch (e) {
		console.log('x');
	}
})();
