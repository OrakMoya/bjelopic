<script>
	import Meta from '$lib/page_components/Meta.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	let page_title = 'O nama';
</script>

<Meta title={page_title} />
<div class="px-5">
	<slot />
</div>
