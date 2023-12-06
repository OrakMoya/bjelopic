<script>
	import Footer from '$lib/Footer.svelte';
    import Header from '$lib/Header.svelte';

</script>



<Header />
	<div class="absolute -z-10 overflow-hidden w-full  h-screen top-0">
		<img src="images/background.jpg" alt="background" class="w-full h-full object-center object-cover blur-md scale-110">
	</div>
	<slot />
<Footer />