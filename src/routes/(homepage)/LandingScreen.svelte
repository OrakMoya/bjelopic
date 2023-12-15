<script>
	const introvideo = '/images/intro-sequence.mp4';
	import { expoIn, expoOut, linear, quadInOut, quintOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';
	import { links_shown } from '$lib/stores';
	const portrait_size = 80;
	const landscape_size = 70;
	const title_delay = 1200;
	const title_anim_duration = 5000;
	const timer_seconds = 2;

	/** @type {number} */
	let y;
	$: videoscreensizepercent = landscape_size;

	let timer = tweened(timer_seconds);
	setInterval(() => {
		if ($timer > 0 && y === 0) $timer--;
		else if (y !== 0) timer = tweened(timer_seconds);
	}, 1000);
	const resetTimer = () => (timer = tweened(timer_seconds));

	let arrow_timer = tweened((title_delay + title_anim_duration / 2) / 1000);
	setInterval(() => {
		if ($arrow_timer > 0) $arrow_timer--;
	}, 1000);

	let arrows_shown = false;
	$: arrows_shown = $arrow_timer <= 0;
	$: links_shown.set(y > 0 ? true : $links_shown);
	let show = $links_shown;
	onMount(() => (show = true));

	const subtitle_links = [
		{ id: 1, page: '/gallery', name: 'Galerija Radova' },
		{ id: 2, page: '/history', name: 'Povijest Studija' },
		{ id: 3, page: '/about', name: 'O Nama' }
	];
</script>

<svelte:window bind:scrollY={y} />

<section
	class="bg-black w-full flex items-end transition-all"
	style="height: {Math.floor(videoscreensizepercent + (100 - videoscreensizepercent) / 2)}vh;"
>
	<div
		class="w-full flex flex-wrap items-center justify-center h-[{videoscreensizepercent}vh]"
		style="height: {videoscreensizepercent}vh;"
	>
		<video
			autoplay
			muted
			loop
			class="absolute w-full object-cover"
			style="-webkit-transition: -webkit-filter 1000ms 1000ms; height: {videoscreensizepercent}vh; {show
				? 'filter: brightness(0.4);'
				: ''}; "
		>
			<source src={introvideo} type="video/mp4" />
		</video>

		<!--Title and subtitle animation-->
		{#if show}
			<section
				transition:fade={{ delay: title_delay, duration: title_anim_duration, easing: quintOut }}
				class=" w-full h-full flex items-center justify-center z-10"
			>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="grid items-center duration-[1500ms] h-min"
					style=" grid-template-rows: {y > 0 || $links_shown
						? '3fr 2fr 1fr 3fr'
						: '0fr 1fr 0fr 0fr'}; "
				>
					<div class="transition-all"></div>
					<div
						class="mx-auto text-white transition-all"
						transition:fly={{
							delay: title_delay,
							duration: title_anim_duration,
							x: 0,
							y: 40,
							opacity: 0,
							easing: (t) => (t === 1.0 ? t : 1.0 - Math.pow(2.7, -10.0 * t))
						}}
					>
						<div
							class="text-center text-7xl transition-all duration-700 sm:text-8xl lg:text-9xl drop-shadow-md justify-center flex"
						>
							<div
								class="absolute -translate-y-1/4"
								style="width: 50vw; height: 50vh;"
								on:mouseenter={() => links_shown.set(true)}
							/>
							Bjelo<b>PIC</b>
						</div>
						<div
							class="text-center absolute left-1/2 -translate-x-1/2 transition-opacity duration-700 w-8 h-8 {!$links_shown &&
							arrows_shown
								? 'opacity-100'
								: 'opacity-0'}"
						>
							<FaAngleDown />
						</div>
					</div>
					<div
						class="transition-all h-[0vh] duration-[1500ms] relative {$links_shown
							? 'opacity-100 top-0'
							: 'opacity-0 top-8'} "
					>
						<div
							class="flex flex-col sm:flex-row justify-center items-center h-20 md:h-10"
							transition:fade={{ delay: 0, duration: 500, easing: linear }}
						>
							{#each subtitle_links as link}
								<a
									href={link.page}
									class="inline text-white text-center mx-6 mb-2 sm:mb-0 transition-all hover:text-xl uppercase"
									>{link.name}</a
								>
							{/each}
						</div>
					</div>
					<div class="transition-all"></div>
				</div>
			</section>
		{/if}
	</div>
</section>
