<script>
	import Footer from '$lib/page_components/Footer.svelte';
	import Header from '$lib/page_components/Header.svelte';
</script>

<Header />
<main class="overflow-auto bg-neutral-900 text-white">
	<slot />
</main>
<Footer />
