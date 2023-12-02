<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	/**
	 * @type {number}
	 */
	let y;
	
	/**
	 * @type {number}
	 */
	let viewport_height;
</script>

{#if y > 0}
	<div
		transition:fly={{ delay: 0, duration: 700, x: 0, y: -200, opacity: 1, easing: quintOut }}
		class="fixed top-0 w-full z-10"
	>
		<Header
			caption_additional_classes={viewport_height >= 768
				? 'sm:text-base lg:text-xl md:text-base text-sm'
				: 'basis-full md:basis-auto text-sm sm:text-base lg:text-xl'}
		/>
	</div>
{/if}
<slot />
<Footer />

<svelte:window bind:scrollY={y} bind:innerHeight={viewport_height} />
