<script>
	import '../app.css';
	import { website_title } from '$lib/stores';
	export const ssr = true;
</script>

<svelte:head>
	<title>{$website_title}</title>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<slot />
