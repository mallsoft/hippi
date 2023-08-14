import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

function forget(ev, listId) {
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
}

/** @type {import('./$types').Actions} */
export const actions = {
	forgetList: async (ev) => {
		console.log(new Date().toISOString(), 'List forget... ', listId);

		forget(ev, ev.params.list_id);

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
	},
	kthxBye: async (ev) => {
		console.log(new Date().toISOString(), 'List delete... ', ev.params.list_id);

		forget(ev, ev.params.list_id);

		await ev.fetch(`${env.PATHY_MC_PATH}/api/lists/${ev.params.list_id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		});

		throw redirect(303, `/`);
	}
};
