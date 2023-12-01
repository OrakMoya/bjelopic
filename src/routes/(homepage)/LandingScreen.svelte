
<script>
	import introvideo from '$lib/intro-sequence.mp4';
	import { linear, quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	const videoscreensizepercent = 70;
	const title_delay = 1200;
	const title_anim_duration = 5000;
	const timer_seconds = 5;
	let links_shown = false;

	/**
	 * @type {number}
	 */
	let y;
	/**
	 * @type {number}
	 */
	let viewport_height;

	let timer = tweened(timer_seconds);
	setInterval( ()=> {
		if ($timer>0 && y===0) $timer--;
		else if (y!==0) timer = tweened(timer_seconds);
	}, 1000);
	const resetTimer = () => timer = tweened(timer_seconds);


	const toggleSubtitleLinks = (/** @type {number} */ y, /** @type {number} */ timer) => {if(y>0){ links_shown = true} else if(timer===0){links_shown = false}};
	$: toggleSubtitleLinks(y, $timer);
	let show = false;
	onMount( () => show = true )

	const subtitle_links = [
		{id: 1, page: "/gallery", name: "Galerija Radova"},
		{id: 2, page: "/history", name: "Povijest Studija"},
		{id: 3, page: "/about", name: "O Nama"},
	]
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={viewport_height} />

<section class="bg-black w-full flex items-end transition-all" style="height: {Math.floor(videoscreensizepercent+((100-videoscreensizepercent)/2))}vh;">
	<div class="w-full flex flex-wrap items-center justify-center h-[{videoscreensizepercent}vh]" style="height: {videoscreensizepercent}vh;">

		<video autoplay muted loop class="absolute w-full object-cover" style="height: {videoscreensizepercent}vh;">
			<source src={introvideo} type="video/mp4">
		</video>

		<!--Title and subtitle animation-->
		{#if show}
			<section transition:fade={ {delay: title_delay, duration: title_anim_duration, easing: quintOut} }
			 class="bg-black z-[1] bg-opacity-60 w-full h-full grid items-center duration-[1500ms]" style=" grid-template-rows: {(y>0||links_shown) ? "3fr 2fr 1fr 3fr" : "0fr 1fr 0fr 0fr" }; ">
			 	<div class="transition-all"></div>
			 	<div class="mx-auto text-white transition-all" transition:fly={ {delay: title_delay, duration: title_anim_duration, x: 0, y: 40, opacity: 0, easing: (t) => t === 1.0 ? t : 1.0 - Math.pow(2.7, -10.0 * t)} }>
					<div class="text-center text-6xl transition-all duration-700 sm:text-8xl lg:text-9xl drop-shadow-md">Bjelo<b>PIC</b></div>
				</div>
				<div class="transition-all h-[0vh]">
					{#if links_shown}
						<div class="flex flex-col sm:flex-row justify-center items-center h-20" transition:fade={{delay: 400, duration: 500, easing: linear}}>
							{#each subtitle_links as link}
								<a href="{link.page}" class="inline text-white text-center mx-6 mb-2 sm:mb-0 transition-all hover:text-xl uppercase" 
								on:mousemove={resetTimer}>{link.name}</a>
							{/each}
						</div>
					{/if}
				</div>
				<div class="transition-all">
				</div>
			</section>
		{/if}

	</div>
</section>