<script>
	const logo = "/logo.png";
	const name = "Bjelo<b>PIC</b>";
	const caption = "Producenti \"ORIGINALNIH BJELOVARSKIH BLOCKBUSTERA\"";
	export let caption_additional_classes = "";
</script>

<header class="bg-black text-white py-2">
	<div class="flex flex-wrap justify-around items-center max-w-screen-2xl mx-auto">
		<div class="flex justify-center items-center text-4xl pr-5 flex-wrap">
			<img alt="bjelopic-logo" src={logo} class="w-24">
			<span>{@html name}</span>
		</div>	
		<span class="w-auto text-center font-bold {caption_additional_classes}">
			{caption}
		</span>
	</div>
</header>