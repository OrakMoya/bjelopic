<script>
	import GalleryVideo from '$lib/page_components/GalleryVideo.svelte';
import SixteenByNineContainer from '$lib/page_components/SixteenByNineContainer.svelte';

	export let data;
</script>

{#await data.streamed.maria_gallery_items}
	LooDung
{:then gallery_items}
	{#each gallery_items as item, i}
		<section class="w-full {i % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'} text-white p-6">
			<div
				class="w-full max-w-6xl mx-auto flex justify-center flex-wrap-reverse {i % 2 === 1
					? 'flex-row-reverse'
					: ''}"
			>
				<div class="flex flex-wrap w-full {item.video_thumbnails.length > 1 ? 'w-full' : 'md:w-2/3'}">
					{#each item.video_thumbnails as video_data, j}
						<div
							class="drop-shadow-sm hover:scale-105 transition-all duration-700 w-full p-2 {item
								.video_thumbnails.length > 1 &&
							(j != item.video_thumbnails.length - 1 || item.video_thumbnails.length % 2 === 0)
								? 'md:w-1/2'
								: ''} {j === item.video_thumbnails.length - 1 &&
							item.video_thumbnails.length > 1 &&
							item.video_thumbnails.length % 2
								? 'md:w-2/3 mx-auto'
								: ' '}"
						>
							<GalleryVideo url={video_data.url} preview_path={video_data.preview_filename} thumbnail_path={video_data.thumbnail_filename} alt_text="{item.title}" />
						</div>
					{/each}
				</div>
				<article
					class="w-full p-2 {i % 2 === 1 ? 'md:pr-6' : 'md:pl-6'} text-center {item.video_thumbnails
						.length > 1
						? 'md:w-full basis-100'
						: i % 2 === 1
							? 'md:text-right md:w-1/3'
							: 'md:text-left md:w-1/3'} flex flex-col gap-2"
				>
					<h2 class="text-2xl lg:text-4xl font-bold transition-all">
						<span class="text-blue-300">{item.subject} - </span>{item.title}
						{#if item.publication_date}
							<span class="text-blue-300">({item.publication_date.getFullYear()})</span>
						{/if}
					</h2>

					<p class="text-lg">{item.category}</p>
					<div
						class="flex flex-wrap justify-center w-full gap-2 {item.video_thumbnails.length > 1
							? 'md:justify-center'
							: i % 2 === 1
								? 'md:justify-normal flex-row-reverse'
								: 'md:justify-normal flex-row'}"
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
