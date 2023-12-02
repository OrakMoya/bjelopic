<script>
	import Footer from '../Footer.svelte';
    import Header from '../Header.svelte';
</script>

<Header />
<main class="max-w-screen-2xl mx-auto">
	<slot />
</main>
<Footer />