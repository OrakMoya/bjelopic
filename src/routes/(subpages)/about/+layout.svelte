<script>
	import Meta from '$lib/page_components/Meta.svelte';
	import UnderConstruction from '$lib/page_components/UnderConstruction.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	let page_title = 'O nama';
</script>

<Meta title={page_title} />
<UnderConstruction />

<slot />
