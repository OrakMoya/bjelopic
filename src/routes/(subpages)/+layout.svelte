<script>
	import Footer from '../Footer.svelte';
import Header from '../Header.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<Header />
<slot />
<Footer />