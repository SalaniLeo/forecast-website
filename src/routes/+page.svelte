<script>
	import { fade } from 'svelte/transition';

	const carouselPhotos = [
		'https://github.com/SalaniLeo/Forecast/blob/26671eda225ade857a26f02ea4bc71cbccec341f/data/images/app1.png?raw=true',
		'https://github.com/SalaniLeo/Forecast/blob/26671eda225ade857a26f02ea4bc71cbccec341f/data/images/app2.png?raw=true',
		'https://github.com/SalaniLeo/Forecast/blob/26671eda225ade857a26f02ea4bc71cbccec341f/data/images/app3.png?raw=true',
		'https://github.com/SalaniLeo/Forecast/blob/26671eda225ade857a26f02ea4bc71cbccec341f/data/images/app4.png?raw=true'
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>

<div class="content">
	<div id="top">
		<h1>Forecast</h1>
		<h1>A <i>beautiful</i> weather app</h1>
		<div id="carousel">
			{#each [carouselPhotos[index]] as src (index)}
				<img transition:fade {src} alt="" />
			{/each}
		</div>
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
	}
	#carousel {
		position: relative;
		top: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		background-color: rgb(75, 75, 75);
		position: relative;
		top: 700px;
		border: none;
		padding: 1rem;
		border-radius: 20px;
		width: 100px;
		cursor: pointer;
	}
	button:hover {
		background-color: rgb(93, 93, 93);
	}
	button:active {
		background-color: rgb(42, 42, 42);
	}
	#warning {
		text-align: center;
		width: 60vw;
	}
	@media screen and (max-width: 900px) {
		#carousel {
			top: 25vw;
		}
		button {
			top: 50vw;
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
		img {
			max-height: 30vh;
		}
		#top {
			height: 110vw;
		}
	}
</style>
