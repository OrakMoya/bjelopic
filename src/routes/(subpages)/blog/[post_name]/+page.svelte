<script>
	import { marked } from 'marked';
	import { baseUrl } from 'marked-base-url';
	/** @type {import('./$types').PageData} */
	export let data;
	marked.use(baseUrl('/data/'));
</script>

<div class="prose prose-invert">
	{@html marked.parse(data.post.contents)}
</div>
