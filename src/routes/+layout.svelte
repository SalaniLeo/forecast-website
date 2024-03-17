<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { getCookie, setCookie, setTheme } from '$lib';
	import Navbar from '$lib/navbar.svelte';
	let currentTheme = 'light';
	onMount(() => {
		if (getCookie('theme') != null) {
			currentTheme = getCookie('theme');
			document.documentElement.dataset.theme == currentTheme;
			setTheme(currentTheme, false);
		}
	});
</script>

<Navbar></Navbar>
<slot />
