import { env } from '$env/dynamic/private';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load(ev) {
	const data = ev.cookies.get('KNOWN_LIST');
	let known = [];
	if (data) {
		known = JSON.parse(data);
	}

	return { known };
}

/** @type {import('./$types').Actions} */
export const actions = {
	createList: async (ev) => {
		const data = await ev.request.formData();
		const title = data.get('title');
		const type = data.get('type');

		console.log(new Date().toISOString(), 'List create new...', title);

		if (!title) throw error(400, 'List title missing');

		const res = await ev.fetch(`${env.PATHY_MC_PATH}/lists`, {
			method: 'POST',
			body: JSON.stringify({
				title,
				type: type || 'thumbs'
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (!res.ok) {
			console.error('error creating list ', res.status, res.statusText);
			throw error(res.status);
		}

		const list = await res.json();
		console.log('redirect to new list', list.title, list.id);

		throw redirect(303, `/list/${list.id}`);
	}
	/*

	deleteList: async (ev) => {
		const data = await ev.request.formData();

		const listId = data.get('id');

		console.log(new Date().toISOString(), 'List delete... ', listId);

		await ev.fetch(`${env.PATHY_MC_PATH}/lists/${listId}`, {
			method: 'DELETE'
		});

		return { success: true };
	}
	
 */
};
