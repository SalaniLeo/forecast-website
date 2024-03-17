<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { getCookie, setCookie, setTheme } from '$lib';
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

<Navbar></Navbar>
<slot />
