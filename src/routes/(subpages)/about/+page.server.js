import { test } from '$lib/server/db/tutorial.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await test.find({}).toArray();
	return {
		streamed: {
			test: data.map((data) => JSON.parse(JSON.stringify(data))),
		}
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		await test.insertOne({ description: data.get('description') });
	}
};
