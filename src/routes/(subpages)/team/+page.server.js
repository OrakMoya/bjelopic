import { employees } from '$lib/server/db/collections';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await employees.find().toArray();
	return {
		streamed: {
			employees: data.map((data) => JSON.parse(JSON.stringify(data)))
		}
	};
}
