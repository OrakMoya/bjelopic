<script>
	/**
	 * @type {number}
	 */
	let client_width;
</script>

<div class="w-full bg-black" bind:clientWidth={client_width} style="height: {client_width / (16 / 9)}px">
	<slot>
		No data...
	</slot>
</div>
