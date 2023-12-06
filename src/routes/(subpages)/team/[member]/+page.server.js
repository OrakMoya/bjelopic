import { employees } from '$lib/server/db/collections';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const data = await employees.find({page: params.member}).toArray();
    return {
        streamed:{
            employee_data: data.map((data) => JSON.parse(JSON.stringify(data))).at(0),
        }
    };
};