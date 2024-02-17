/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
	const blogpost = url.searchParams.get("blogpost");
	const uricomponent = encodeURIComponent(blogpost);
	const response = await fetch("/api/blog/posts/" + uricomponent);
	/** @type {BlogPost} */
	const post = await response.json();
	return { post };
}
