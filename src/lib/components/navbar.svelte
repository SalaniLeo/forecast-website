<script>
	import MenuItem from '$lib/components/MenuItem.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { getCookie, setCookie, setTheme, getSysTheme } from '$lib';
</script>

<nav>
	<div class="left">
		<a href="https://github.com/SalaniLeo/Forecast/" id="github">Github</a>
		<div class="spacer">|</div>
		<a href="https://github.com/SalaniLeo/Forecast/issues" id="issues">Issues</a>
		<div class="spacer">|</div>
		<a href="https://github.com/SalaniLeo/Forecast/issues" id="releases">Releases</a>
	</div>
	<div class="center">
		<a href="https://salanileo.dev">Made by SalaniLeo</a>
	</div>
	<div class="right">
		<a href="https://www.buymeacoffee.com/salanileo">Donate</a>
		<div id="theme-select">
			<Menu>
				<i slot="toggle" class="fa-solid fa-paint-roller"></i>
				<MenuItem
					><button on:click={() => setTheme('light', true)} class="themer">Light</button></MenuItem
				>
				<MenuItem
					><button on:click={() => setTheme('dark', true)} class="themer">Dark</button></MenuItem
				>
				<MenuItem
					><button on:click={() => getSysTheme(true)} class="themer">System</button></MenuItem
				>
			</Menu>
		</div>
	</div>
</nav>

<style>
	nav {
		color: var(--text-color);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: var(--secondary-color);
		margin-left: 12rem;
		margin-right: 12rem;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: var(--shadow-color) 0px 0px 10px;
		text-align: center;
		align-items: center;
	}

	nav > .left {
		display: flex;
		justify-content: flex-start;
		gap: 10px;
	}

	nav > .center {
		display: flex;
		justify-content: center;
		gap: 10px;
	}

	nav > .right {
		display: flex;
		justify-content: flex-end;
		gap: 15px;
	}

	#theme-select {
		display: flex;
		justify-content: right;
	}

	.themer {
		border: none;
		padding: 1rem;
		background-color: var(--primary-color);
		width: 100%;
		height: 100%;
		color: var(--font-link-color);
		text-decoration: none;
	}

	.themer:hover {
		background-color: var(--tertiary-color);
	}
	.themer:active {
		background-color: var(--secondary-color);
	}

	.fa-paint-roller {
		scale: 150%;
		color: var(--link-color);
	}

	@media screen and (max-width: 1200px) {
		nav {
			margin-left: 8rem;
			margin-right: 8rem;
		}
	}
	@media screen and (max-width: 1000px) {
		nav {
			margin-left: 4rem;
			margin-right: 4rem;
		}
	}
	@media screen and (max-width: 720px) {
		nav {
			margin-left: 0rem;
			margin-right: 0rem;
			border-radius: 0px;
			grid-template-columns: 0.5fr 2fr 0.5fr;
		}
		#releases,
		#issues,
		.spacer {
			display: none;
		}
	}
</style>
