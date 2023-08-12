import { env } from '$env/dynamic/private';
import { redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load(ev) {
	const res = await ev.fetch(
		`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}/items/${ev.params.item_id}`
	);

	if (res.status == 404) throw error(res.status, 'Item not found ¯\\_(ツ)_/¯');
	if (!res.ok) {
		console.error('Hmm', res.status, res.statusText);
		throw error(res.status, '🍕');
	}

	const item = await res.json();
	console.log(item);
	return { item };
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateItemText: async (ev) => {
		const data = await ev.request.formData();
		const text = data.get('text');

		console.log(new Date().toISOString(), 'Item update... ', ev.params.list_id, text);

		await ev.fetch(
			`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}/items/${ev.params.item_id}`,
			{
				method: 'PUT',
				body: JSON.stringify({ text }),
				headers: {
					'content-type': 'application/json'
				}
			}
		);

		throw redirect(303, `/list/${ev.params.list_id}`);
	},
	deleteItem: async (ev) => {
		console.log(new Date().toISOString(), 'Item delete... ', ev.params.item_id);

		await ev.fetch(
			`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}/items/${ev.params.item_id}`,
			{
				method: 'DELETE'
			}
		);

		throw redirect(303, `/list/${ev.params.list_id}`);
	}
};
