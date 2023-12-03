<script>
	import {onMount} from 'svelte';

	export let data;
	

	/**
	 * @type {HTMLElement}
	 */
	let selected_node;
	$: console.log(selected_node);
	/**
	 * @param {HTMLElement} node
	 */
	function selectNode(node){
		selected_node = node;
		console.log("Called");
	}
</script>

<h1 class="text-2xl">O nama</h1>
Zasad prazno sorkač ono 

<form method="post">
	<label>
		Dodaj nest:
		<input name="description" autocomplete="off"/>
	</label>
</form>

{#if selected_node != undefined}
	{selected_node.innerText}
{:else}	
	No element selected
{/if}

{#await data.streamed.test}
	LooDing
{:then value}
	{#each value as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:mouseenter={(node)=>selectNode(node.currentTarget)}>
			{item.description}
		</div>
	{/each}
{:catch error}
	{error.message}
{/await}