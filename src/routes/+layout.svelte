<script>
// @ts-nocheck

	import '../app.css';
	import { website_title } from '$lib/stores';
</script>

<svelte:head>
	<title>{$website_title}</title>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet" />
</svelte:head>
<main class="min-h-screen bg-black">
	<slot />
</main>
