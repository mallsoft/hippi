import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	forgetList: async (ev) => {
		const data = await ev.request.formData();
		const listId = data.get('id');

		console.log(new Date().toISOString(), 'List forget... ', listId);

		const known = ev.cookies.get('KNOWN_LIST');
		let curr = known ? JSON.parse(known) : [];
		if (curr.length) {
			const opts = {};
			let expiry = new Date();
			expiry.setFullYear(expiry.getFullYear() + 1);

			opts['path'] = '/';
			opts['expires'] = expiry;

			curr = curr.filter((listEntry) => listEntry.id != listId);

			ev.cookies.set('KNOWN_LIST', JSON.stringify(curr), opts);
		}

		// return { known: curr };
		throw redirect(303, `/`);
	},
	updateListName: async (ev) => {
		const data = await ev.request.formData();
		const title = data.get('title');

		console.log(new Date().toISOString(), 'List update... ', ev.params.list_id, title);

		await ev.fetch(`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}`, {
			method: 'PUT',
			body: JSON.stringify({ title }),
			headers: {
				'content-type': 'application/json'
			}
		});

		throw redirect(303, `/list/${ev.params.list_id}`);
	}
};
