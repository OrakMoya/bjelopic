<script>
	export let data;
</script>

<h1
	class="text-center text-white text-5xl md:text-6xl lg:text-7xl transition-all duration-500 font-bold my-4 mb-5"
>
	Zaposlenici
</h1>
{#await data.streamed.employees}
	Page is loading...
{:then employees}
	<section class="flex flex-wrap mx-auto max-w-6xl justify-around">
		{#each employees as employee}
			<a
				href="/team/{employee.page}"
				class=" w-4/5 sm:w-3/5 md:w-1/4 px-4 pb-4 transition-all sm-mdi:duration-0 duration-500"
			>
				<article
					class="  hover:scale-105 shadow-md transition-all ease-in-out duration-500 p-6 md:p-4 lg:p-6 rounded-xl bg-slate-900 text-white"
				>
					<div class="w-full mb-4">
						<img
							class="w-full rounded-lg"
							src="/images/employee_{employee.page}.jpg"
							alt={employee.page}
						/>
					</div>
					<div class="w-full text-center text-white">
						<h3
							class="text-lg lg:text-xl font-bold transition-all duration-500 sm-md:duration-0 md:duration-500"
						>
							{employee.name}
							{employee.surname}
						</h3>
					</div>
				</article>
			</a>
		{/each}
	</section>
{/await}
