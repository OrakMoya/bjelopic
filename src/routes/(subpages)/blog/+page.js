/** @type {import('./$types').PageLoad} */
export async function load({fetch}){
	const response = await fetch('/api/blog/posts');
	/**
	* @type {BlogPost[]}
		*/
	const posts = await response.json();
	return {posts}
}


