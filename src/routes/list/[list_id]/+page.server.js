import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
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
		curr.push({ id, title });

		const opts = {};
		opts['path'] = '/';
		opts['expires'] = new Date(new Date().getFullYear() + 1).toUTCString();

		ev.cookies.set('KNOWN_LIST', JSON.stringify(curr), opts);
	}

	list.items.sort((a, b) => {
		const sumA = a.id + a.sortIndex;
		const sumB = b.id + b.sortIndex;
		return sumA - sumB;
	});

	return { list };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createItem: async ({ request, params }) => {
		const data = await request.formData();
		const text = data.get('text');
		const state = data.get('state');
		console.log(new Date().toISOString(), 'Item create...', text, state);

		await fetch(`${env.PATHY_MC_PATH}/lists/${params.list_id}/items`, {
			method: 'POST',
			body: JSON.stringify({ text, state }),
			headers: {
				'content-type': 'application/json'
			}
		});

		return { success: true };
	},
	deleteItem: async ({ request, params }) => {
		const data = await request.formData();

		const itemId = data.get('id');

		console.log(new Date().toISOString(), 'Item delete... ', itemId);

		await fetch(`${env.PATHY_MC_PATH}/lists/${params.list_id}/items/${itemId}`, {
			method: 'DELETE'
		});

		return { success: true };
	},
	setEmoji: async ({ request, params }) => {
		const data = await request.formData();

		const itemId = data.get('id');
		const emoji = data.get('emoji');

		console.log(new Date().toISOString(), 'Set item emoji... ', itemId, emoji);

		await fetch(`${env.PATHY_MC_PATH}/lists/${params.list_id}/items/${itemId}`, {
			method: 'PUT',
			body: JSON.stringify({ state: emoji }),
			headers: {
				'content-type': 'application/json'
			}
		});

		return { success: true };
	}
};
