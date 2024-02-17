<script>
	/** @type {import('./$types').PageData} */
	export let data;

</script>

{#each data.posts as item}
	<article class="prose prose-lg prose-invert ">
		<a href="blog/post?blogpost={item.filepath}"> {item.title} </a>
	</article>
{/each}
