<script>
	import Footer from '$lib/page_components/Footer.svelte';
	import Header from '$lib/page_components/Header.svelte';
</script>

<Header />
<main class="bg-neutral-900 overflow-auto text-white"s>
	<slot />
</main>
<Footer />
