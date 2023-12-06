<script>

// @ts-nocheck
	import { onMount } from "svelte";

	export let initialVideoID="";
	let iframe_api_not_defined = false;
	let player;
	/**
	 * @type {number}
	 */
	let client_width;

	export let playerID = "";
	onMount(()=>{
		iframe_api_not_defined = document.getElementById('iframe_api') === null;
		function load(){
			player =  new YT.Player(playerID,
			{
				width: '100%', 	
				height: '100%',
				videoId: initialVideoID
			})
		}

		if (window.YT) {
            load();
        } else {
            window.onYouTubeIframeAPIReady = load;
        }
	})
</script>



<div class="w-full" bind:clientWidth={client_width} style="height: {client_width/(16/9)}px">
	<div id={playerID}/>
</div>