<script>
	export let data;
</script>

<h1
	class="text-center text-white text-5xl md:text-6xl lg:text-7xl transition-all duration-500 font-bold my-10"
>
	Upravni Odbor
</h1>
{#await data.streamed.employees}
	Page is loading...
{:then employees}
	<section class="flex flex-wrap mx-auto max-w-6xl justify-around mb-10 px-2">
		{#each employees as employee}
			<a
				href="/team/{employee.page}"
				class="w-4/5 max-w-sm md:w-1/4 px-4 pb-4 sm-md:duration-0 transition-all duration-500 drop-shadow-lg"
			>
			<div class="hover:scale-105 transition-all duration-500 rounded-xl bg-slate-800 border-slate-700 hover:border-slate-600 border-2">
				<article
					class="shadow-md transition-all ease-in-out duration-500 
					p-6 md:p-4 sm-md:duration-0  text-white"
				>
					<div class="w-full mb-4">
						<img
							class="w-full rounded-lg drop-shadow-lg"
							src="/images/{employee.profile_picture_path ? employee.profile_picture_path : "employee_picturenotfound.jpg"}"
							alt={employee.page}
						/>
					</div>
					<div class="w-full text-center text-white flex flex-col">
						<h3
							class="text-lg lg:text-xl font-bold transition-all duration-500 sm-md:duration-0 md:duration-500"
						>
							{employee.first_name}
							{#if employee.middle_name}
								{employee.middle_name}
							{/if}
							{employee.last_name}
						</h3>
						{#if employee.title}
							<h4>
								{employee.title}
							</h4>
						{/if}
					</div>
				</article>
			</div>
			</a>
		{/each}
	</section>
{/await}
