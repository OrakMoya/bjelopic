<script>
	export let data;
	const bjelopic_ekipa_1 = '/images/bjelopic_ekipa_1.jpg';
	const bjelopic_ekipa_2 = '/images/bjelopic_ekipa_2.jpg';
	const bjelopic_ekipa_3 = '/images/bjelopic_ekipa_3.jpg';
</script>

<div class="max-w-6xl mx-auto text-white overflow-auto">
	<h1
		class="text-center text-white text-5xl md:text-6xl lg:text-7xl transition-all duration-500 font-bold my-10"
	>
		O nama
	</h1>

	<article
		class="mb-5 flex flex-wrap lg:flex-nowrap justify-between lg:space-x-7 bg-slate-800 p-6 rounded-xl border-2 border-slate-700"
	>
		<div class="w-full lg:w-2/5">
			<section class="text-3xl mb-5">
				Bjelo<b>PIC</b> pokreću ljudi s neopisivom strasti za ponajprije filmsku umjetnost, ali i njene
				pretke poput fotografije, glazbe i zvuka.
			</section>
			<section class="mb-5">
				Skupina koja sada djeluje pod nazivom BjeloPIC neslužbeno je okupljena u lipnju 2020.
				godine.
			</section>
		</div>
		<div class="basis-full w-full max-w-2xl mx-auto lg:max-w-none lg:w-3/5 lg:basis-auto">
			<img
				alt="bjelopic-ekipa-1"
				src={bjelopic_ekipa_1}
				class="rounded-xl  w-full drop-shadow-lg"
			/>
		</div>
	</article>

	<article>
		<div class="w-full bg-slate-800 p-6 rounded-xl border-2 border-slate-700 mb-5">
			<section class="mb-5 text-3xl w-full">
				Trenutni upravni odbor studija broji 4 člana te preko 10 redovnih suradnika.
			</section>
			<div class="mb-5 flex justify-evenly space-x-5">
				<section class="mb-5 w-1/2 lg:w-1/3">
					Iz ruševina u kojem smo pronašli hrvatski film trudimo se revitalizirati ga.
				</section>
				<section class="w-1/2 lg:w-1/3">
					Trenutno smo beskućnici (baza je tamo gdje je većina opreme), ali imamo velike afinitete
					prema izgradnji vlastitih ureda.
				</section>
			</div>
		</div>
		<div class="w-full max-w-3xl mx-auto mb-5">
			<img
				alt="bjelopic-ekipa-2"
				src={bjelopic_ekipa_2}
				class="rounded-xl  w-full drop-shadow-lg"
			/>
		</div>
		<div class="w-full max-w-3xl mx-auto mb-5">
			<img
				alt="bjelopic-ekipa-3"
				src={bjelopic_ekipa_3}
				class="rounded-xl  w-full drop-shadow-lg"
			/>
		</div>
	</article>
</div>
