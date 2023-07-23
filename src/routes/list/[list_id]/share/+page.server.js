import QRCode from 'qrcode';

/** @type {import('./$types').PageLoad} */
export async function load(ev) {
	const url = ev.url.href.replace(/\/share$/, '');

	const qr = await new Promise((resolve, reject) => {
		console.log('generating qr for: ' + url);
		QRCode.toString(url, { type: 'svg' }, (err, result) => {
			err ? reject(err) : resolve(result);
		});
	});

	return { qr };
}
