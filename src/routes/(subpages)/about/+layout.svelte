<script>
    import Meta from '$lib/Meta.svelte';
    /** @type {import('./$types').LayoutData} */
    export let data;
    let page_title = "O nama";
</script>

<Meta title={page_title} />

<slot />