<script>
	const logo = "/logo.png"
	const name = "BjeloPIC"
	const caption = "Bjelovarski filmski studio"

	const infoLinks = [
		{id:1, page:"/about", name:"O nama"},
		{id:2, page:"/team", name:"Naši zaposlenici"},
		{id:3, page:"/history", name:"Povijest"},
		{id:4, page:"/contact", name:"Kontakt"},
	]
	const socialsLinks = [
		{id:1, page:"https://www.facebook.com/bjelopic", name:"Facebook"},
		{id:2, page:"https://www.instagram.com/bjelopic/", name:"Instagram"},
	]
	const navigationSections = [
		{id:1, section:"Informacije", links:infoLinks},
		{id:2, section:"Društvene mreže", links:socialsLinks},
	]
</script>

<footer class="bg-black text-white py-10">
	<div class="flex flex-wrap justify-between max-w-screen-2xl mx-auto">
		<div>
			<img class="w-8" src="{logo}" alt="">
			<span class="text-2xl font-bold">{@html name}</span>
			<p>{caption}</p>
		</div>
		<div class="flex justify-between">
			{#each navigationSections as linkSection}
				<nav class="w-40 min-w-fit">
					<p class="font-bold text-xl">{linkSection.section}</p>
					{#each linkSection.links as link}
						<a class="block transition-all hover:font-bold" href="{link.page}">{link.name}</a>
					{/each}
				</nav>
			{/each}
		</div>
		<span class="w-full text-center font-bold basis-full">Copyright BjeloPIC 2023 | Sva prava pridržana</span>
	</div>
</footer>