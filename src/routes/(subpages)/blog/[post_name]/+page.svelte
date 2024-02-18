<script>
	import { marked } from 'marked';
	import { baseUrl } from 'marked-base-url';
	/** @type {import('./$types').PageData} */
	export let data;
	const baseUrlForImages = '/' + data.post.filepath + '/';
	marked.use(baseUrl(baseUrlForImages));
</script>

<div class="max-w-screen-lg mx-auto prose prose-slate prose-xl prose-invert my-4 px-8 w-full
	prose-h2:text-orange-500 prose-img:rounded-md prose-img:md:w-2/3 prose-img:max-w-full">
	{@html marked.parse(data.post.contents)}
</div>
