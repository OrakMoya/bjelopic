<script>
	import SixteenByNineContainer from './SixteenByNineContainer.svelte';
	import { fade } from 'svelte/transition';

	/**
	 * @type {string | undefined}
	 */
	export let thumbnail_path = undefined;
	/**
	 * @type {undefined}
	 */
	export let preview_path = undefined;
	export let alt_text = '';
	export let url = '';

	let is_hovered = false;
</script>

<SixteenByNineContainer>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<a href={url} target="_blank">
		<div
			on:mouseenter={() => (is_hovered = true)}
			on:mouseleave={() => (is_hovered = false)}
			class="w-full h-full relative bg-black"
		>
			{#if is_hovered && preview_path}
				<video autoplay muted loop class="w-full h-full object-fit absolute top-0" transition:fade>
					<source src="/images/gallery/{preview_path}" type="video/mp4" />
				</video>
			{:else if thumbnail_path}
				<img
					src="/images/gallery/{thumbnail_path}"
					alt={alt_text}
					transition:fade
					class="w-full h-full object-cover absolute top-0"
				/>
			{:else}
				<img
					src="/images/generic_thumbnail.png"
					alt={alt_text}
					transition:fade
					class="w-full h-full object-cover absolute top-0"
				/>
			{/if}
		</div>
	</a>
</SixteenByNineContainer>
