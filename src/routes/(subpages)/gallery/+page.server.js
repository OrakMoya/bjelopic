import { gallery } from '$lib/server/db/collections';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = await gallery.find().toArray();
    return{
        streamed:{
            gallery_items: data.map((data) => JSON.parse(JSON.stringify(data))),
        }
    }
};
