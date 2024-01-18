<script>
	const logo = '/logo.png';
	const name = 'BjeloPIC';
	const caption = 'Bjelovarski filmski studio';

	const infoLinks = [
		{ id: 1, page: '/about', name: 'O nama' },
		{ id: 2, page: '/team', name: 'Naši zaposlenici' },
		{ id: 3, page: '/history', name: 'Povijest' },
		{ id: 4, page: '/contact', name: 'Kontakt' },
		{ id: 5, page: '/gallery', name: 'Galerija' }
	];
	const socialsLinks = [
		{ id: 1, page: 'https://www.facebook.com/bjelopic', name: 'Facebook' },
		{ id: 2, page: 'https://www.instagram.com/bjelopic/', name: 'Instagram' },
		{ id: 3, page: 'https://github.com/OrakMoya/bjelopic', name: 'GitHub' },
		{ id: 4, page: 'https://www.youtube.com/@bjelopic', name: 'YouTube' }
	];
	const navigationSections = [
		{ id: 1, section: 'Informacije', links: infoLinks },
		{ id: 2, section: 'Društvene mreže', links: socialsLinks }
	];
</script>

<footer class="bg-black text-white py-5 px-2">
	<div class="flex flex-wrap justify-center sm:justify-around max-w-7xl mx-auto my-4">
		<div class="flex flex-col items-center sm:block">
			<a href="/">
				<img class="w-8" src={logo} alt="" />
			</a>
			<span class="text-2xl font-bold">{name}</span>
			<p>{caption}</p>
		</div>
		<div class="basis-full sm:hidden"></div>
		<div class="flex justify-between my-4">
			{#each navigationSections as linkSection}
				<nav class="w-40 min-w-fit">
					<p class="font-bold text-xl">{linkSection.section}</p>
					{#each linkSection.links as link}
						<a class="block transition-all hover:font-bold" href={link.page}>{link.name}</a>
					{/each}
				</nav>
			{/each}
		</div>
		<span class="w-full text-center font-bold basis-full mt-4"
			>&copy; {new Date().getUTCFullYear()} BjeloPIC | Sva prava pridržana</span
		>
	</div>
</footer >
