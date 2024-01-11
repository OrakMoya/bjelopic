<script>
	// @ts-ignore
	import YouTubeIFrame from '$lib/page_components/YouTubeIFrame.svelte';
	export let data;

	/**
	 * @param {string | number | Date} date
	 */
	function formatDate(date) {
		let string = '';
		let dateObj = new Date(date);
		string += dateObj.getDay() + '.' + dateObj.getMonth() + '.' + dateObj.getFullYear() + '.';
		return string;
	}
</script>

{#await data.streamed.maria_gallery_items}
	LooDung
{:then gallery_items}
	{#each gallery_items as item, i}
		<section class="w-full {i % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'} text-white p-6">
			<div class="w-full max-w-6xl mx-auto flex justify-center flex-wrap-reverse">
				<div class="flex flex-wrap w-full {item.video_ids.length > 1 ? 'w-full' : 'md:w-2/3'}">
					{#each item.video_ids as youtubeVideoId, j}
						<div
							class="drop-shadow-sm hover:scale-105 transition-all duration-700 w-full p-2 {item
								.video_ids.length > 1 &&
							(j != item.video_ids.length - 1 || item.video_ids.length % 2 === 0)
								? 'md:w-1/2'
								: ''} {j === item.video_ids.length - 1 &&
							item.video_ids.length > 1 &&
							item.video_ids.length % 2
								? 'md:w-2/3 mx-auto'
								: ' '}"
						>
							<YouTubeIFrame initialVideoID={youtubeVideoId} playerID="player-{j}-{i}" />
						</div>
					{/each}
				</div>
				<article
					class="w-full p-2 md:pl-6 text-center {item.video_ids.length > 1
						? 'md:w-full basis-100'
						: 'md:text-left md:w-1/3 '}"
				>
					<h2 class="text-2xl lg:text-4xl mb-1 font-bold transition-all">{item.title}</h2>
					<h4 class="text-lg mb-2">{item.category}</h4>
					<div
						class="flex flex-wrap justify-center w-full gap-2 {item.video_ids.length > 1
							? 'md:justify-center'
							: 'md:justify-normal'}"
					>
						{#each item.production_roles as role}
							<span class="bg-orange-500 px-2 rounded drop-shadow-lg">
								{role}
							</span>
						{/each}
					</div>
				</article>
			</div>
		</section>
	{/each}
{/await}
