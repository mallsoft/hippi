import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load(ev) {
	const res = await ev.fetch(`${env.PATHY_MC_PATH}/lists/${ev.params.list_id}`);

	if (res.status == 404) throw error(res.status, 'List not found ¯\\_(ツ)_/¯');
	if (!res.ok) {
		console.error('Wtf', res.status, res.statusText);
		throw error(res.status, '🍕');
	}

	const list = await res.json();

	const { id, title } = list;
	const known = ev.cookies.get('KNOWN_LIST');
	const curr = known ? JSON.parse(known) : [];
	if (!curr.length || !curr.some((x) => x.id === id)) {
		// todo handle namechang
		curr.unshift({ id, title });

		const opts = {};
		let expiry = new Date();
		expiry.setFullYear(expiry.getFullYear() + 1);

		opts['path'] = '/';
		opts['expires'] = expiry;

		ev.cookies.set('KNOWN_LIST', JSON.stringify(curr), opts);
	}

	list.items.sort((a, b) => {
		const sumA = a.id + a.sortIndex;
		const sumB = b.id + b.sortIndex;
		return sumB - sumA;
	});

	return { list };
}
