import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { sortList_inPlace } from './list_utils';

/** @type {import('./$types').LayoutLoad} */
export async function load(ev) {
	const res = await ev.fetch(`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}`);

	if (res.status == 404) throw error(res.status, 'List not found ¯\\_(ツ)_/¯');
	if (!res.ok) {
		console.error('Wtf', res.status, res.statusText);
		throw error(res.status, '🍕');
	}

	const list = await res.json();

	const { id, title } = list;
	const cookie = ev.cookies.get('KNOWN_LIST');
	let known_lists = cookie ? JSON.parse(cookie) : [];

	known_lists = known_lists.filter((x) => x.id !== id);
	known_lists.unshift({ id, title });

	let expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1);
	ev.cookies.set('KNOWN_LIST', JSON.stringify(known_lists), {
		path: '/',
		expires
	});

	sortList_inPlace(list);

	return {
		list
	};
}
