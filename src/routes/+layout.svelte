<script>
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import { onMount } from 'svelte';
	import { getCookie, setTheme } from '$lib';
	let currentTheme = 'light';

	onMount(() => {
		if (getCookie('theme') != null) {
			currentTheme = getCookie('theme');
			document.documentElement.dataset.theme == currentTheme;
			setTheme(currentTheme, false);
		} else {
			setTheme(currentTheme, true);
		}
	});
</script>

<svelte:head>
	<title>Forecast</title>
</svelte:head>
<Navbar></Navbar>
<slot />
