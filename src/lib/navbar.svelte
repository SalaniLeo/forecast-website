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
		<a href="https://github.com/SalaniLeo/Forecast/releases">Donate</a>
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
		gap: 10px;
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
