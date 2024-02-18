<script>
	import capitalize from 'capitalize';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1
	class="text-center  text-5xl md:text-6xl lg:text-7xl transition-all duration-500 font-bold my-10"
>
	Blog
</h1>


<div class="flex flex-col flex-wrap items-start md:justify-start md:flex-row">
	{#each data.posts as item}
		<a href="/blog/post?blogpost={item.filepath}" class="w-full h-full max-w-md md:w-1/3 px-4 mb-4 text-white">
			<div class="flex flex-col rounded-lg overflow-clip bg-orange-600 h-full">
				<div class="mb-2 overflow-clip hover:drop-shadow-lg transition-all duration-200">
					<img
						class="w-full min-h-48 max-h-48 object-cover object-center"
						src={item.metadata.thumbnail
							? item.metadata.thumbnail
							: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
						alt={item.title + ' thumbnail'}
					/>
				</div>
				<section class="px-2">
					<h1 class="text-2xl mb-2">
						{capitalize.words(item.title)}
					</h1>
				</section>
			</div>
		</a>
	{/each}
</div>
