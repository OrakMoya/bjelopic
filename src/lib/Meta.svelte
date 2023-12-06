<script>
	import {website_title} from './stores.js';
	export let title = "";
	export let append_website = true;
</script>

<svelte:head>
	<title>{title + (append_website ? ' - ' + $website_title : '')}</title>
</svelte:head>