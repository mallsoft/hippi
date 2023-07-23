import { env } from '$env/dynamic/private';

/** @type {import('./$types').Actions} */
export const actions = {
	createItem: async (ev) => {
		const data = await ev.request.formData();
		const text = data.get('text');
		const state = data.get('state');
		console.log(new Date().toISOString(), 'Item create...', text, state);

		await fetch(`${env.PATHY_MC_PATH}/lists/${ev.params.list_id}/items`, {
			method: 'POST',
			body: JSON.stringify({ text, state }),
			headers: {
				'content-type': 'application/json'
			}
		});

		return {};
	},
	deleteItem: async (ev) => {
		const data = await ev.request.formData();

		const itemId = data.get('id');

		console.log(new Date().toISOString(), 'Item delete... ', ev.params.list_id, itemId);

		await fetch(`${env.PATHY_MC_PATH}/lists/${ev.params.list_id}/items/${itemId}`, {
			method: 'DELETE'
		});

		return {};
	},
	setEmoji: async (ev) => {
		const data = await ev.request.formData();

		const itemId = data.get('id');
		const emoji = data.get('emoji');

		console.log(new Date().toISOString(), 'Set item emoji... ', itemId, emoji);

		await fetch(`${env.PATHY_MC_PATH}/lists/${ev.params.list_id}/items/${itemId}`, {
			method: 'PUT',
			body: JSON.stringify({ state: emoji }),
			headers: {
				'content-type': 'application/json'
			}
		});

		return {};
	}
};
