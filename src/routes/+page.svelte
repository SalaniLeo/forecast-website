<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import { currentTheme } from '$lib';

	const lightCarouselPhotos = [
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app1-light.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app2-light.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app3-light.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app4-light.png?raw=true'
	];

	const darkCarouselPhotos = [
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app1-dark.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app2-dark.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app3-dark.png?raw=true',
		'https://raw.githubusercontent.com/SalaniLeo/Forecast/master/data/images/app4-dark.png?raw=true'
	];

	let index = 0;

	const next = () => {
		if ($currentTheme == 'light') index = (index + 1) % lightCarouselPhotos.length;
		if ($currentTheme == 'dark') index = (index + 1) % darkCarouselPhotos.length;
	};
</script>

<div class="content">
	<div id="top">
		<h1>Forecast</h1>
		<h1>A <i>beautiful</i> weather app</h1>

		{#if $currentTheme == 'light'}
			<div class="carousel" transition:fade>
				{#each [lightCarouselPhotos[index]] as src (index)}
					<img transition:fade {src} alt="" />
				{/each}
			</div>
		{:else}
			<div class="carousel" transition:fade>
				{#each [darkCarouselPhotos[index]] as src (index)}
					<img transition:fade {src} alt="" />
				{/each}
			</div>
		{/if}

		<button on:click={next}>Next!</button>
	</div>
	<div id="secondary">
		<div id="warning">
			<h2>⚠️Warning⚠️</h2>
			<p>
				There is currently a bug in GTK which causes an application to crash when removing a stack
				page from a stack sidebar, and unfortunately I am using a stack sidebar to manage saved
				locations. This means that unless GTK maintainers fix the issue I wont release any new
				'official' version, but you can still clone this repo and use the app.
			</p>
		</div>
		<h1>Features 💬</h1>
		<ul>
			<li>Mobile friendly user interface 📱</li>
			<li>7 Day forecast 'graph' ☀️</li>
			<li>24 Hour hourly forecast ⌛</li>
			<li>Pollution index 🚬</li>
			<li>One week in depth forecast ☔</li>
			<li>Choose between Metric or Imperial systems 🌍</li>
			<li>... And more to come! 😃</li>
		</ul>
		<h1>Install ⬇️</h1>
		<a href="https://flathub.org/apps/dev.salaniLeo.forecast" rel="nofollow"
			><img
				src="https://flathub.org/assets/badges/flathub-badge-en.png"
				style="max-width: 100%;transform: translateX(-50%)"
				width="200"
				alt="download"
			/></a
		>
	</div>
</div>

<style>
	#top {
		height: 80vh;
		min-height: 900px;
	}
	#secondary {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: left;
	}
	#secondary > ul > li {
		font-size: 18px;
	}
	.content {
		text-align: center;
	}
	img {
		max-width: 90vw;
		position: absolute;
		transition-duration: 0s;
	}
	.carousel {
		position: relative;
		top: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		background-color: var(--accent-color-primary);
		position: relative;
		top: 700px;
		border: none;
		padding: 1rem;
		border-radius: 20px;
		width: 100px;
		cursor: pointer;
		box-shadow: var(--shadow-color-light) 0px 0px 10px;
		transition-duration: 0.1s;
	}
	button:hover {
		background-color: var(--accent-color-secondary);
	}
	button:active {
		background-color: var(--accent-color-primary);
	}
	#warning {
		text-align: center;
		width: 60vw;
	}
	@media screen and (max-width: 900px) {
		.carousel {
			top: 25vw;
		}
		button {
			top: 55vw;
		}
		#top {
			height: 80vw;
			min-height: 0px;
		}
		#warning {
			text-align: center;
			width: 75vw;
		}
	}
	@media screen and (max-width: 720px) {
		button {
			top: 60vw;
		}
		#top {
			height: 110vw;
			max-height: 600px;
		}
	}
</style>
