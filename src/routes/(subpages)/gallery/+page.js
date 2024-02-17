/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('api/gallery');
	const data = await response.json();
	/**
	* @type GalleryVideo[]
	*/
	const maria_gallery_items = data.maria_gallery_items;
	return { maria_gallery_items };
}
