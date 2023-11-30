<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<main class="max-w-screen-2xl mx-auto">
    <slot />
</main>
<Footer />