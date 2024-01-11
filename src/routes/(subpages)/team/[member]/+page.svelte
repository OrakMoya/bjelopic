<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#await data.streamed.page_data}
	Loading
{:then page_data}
	<main class="text-white p-2">
		{@html page_data}
	</main>
{:catch error}
	Error
{/await}
