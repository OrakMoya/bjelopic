<script>
	const logo = '/logo.png';
	const name = 'Bjelo<b>PIC</b>';
	const caption = 'Producenti "ORIGINALNIH BJELOVARSKIH BLOCKBUSTERA"';
	export let caption_additional_classes = '';
</script>

<header class="bg-black text-white p-2">
	<div class="flex flex-wrap gap-x-4 justify-around items-center max-w-7xl mx-auto">
		<a href="/">
			<div class="flex justify-center items-center text-4xl flex-wrap">
				<img alt="bjelopic-logo" src={logo} class="w-24" />
				<span>{@html name}</span>
			</div>
		</a>
		<span
			class="w-fit text-center {caption_additional_classes === ''
				? 'text-base sm:text-lg md:text-xl'
				: ' '} font-bold {caption_additional_classes} transition-all duration-700"
		>
			{caption}
		</span>
	</div>
</header>
