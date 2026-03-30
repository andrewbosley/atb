<script lang="ts">
	import ThemeSelector from '$lib/themeSelector.svelte';
	import Button from '$lib/ideas/standardButton.svelte';
	import Search from '$lib/ideas/search.svelte';
	import BurgerMenu from '$lib/burgerMenu.svelte';
	import RoundButton from '$lib/ideas/roundButton.svelte';
</script>

<svelte:head>
	<title>Examples | ATB</title>
	<meta property="og:title" content="Examples | ATB" />
</svelte:head>

<div class="burgerMenu">
	<BurgerMenu />
</div>
<div class="themeSelector">
	<ThemeSelector />
</div>

<main>
	<div class="container">
		<div class="card a">pcolor</div>
		<div class="card b">scolor</div>
		<div class="card c">hcolor</div>
		<div class="card d">acolor</div>
		<div class="card">
			<div class="card2 e">bcolor</div>
			<div class="card2 f">ocolor</div>
		</div>
	</div>

	<div class="container">
		<div class="glass glass-1">
			<p>Tint color glass (acolor)</p>
		</div>
		<div class="glass glass-2">
			<p>Tint opacity glass (0.8)</p>
		</div>
	</div>

	<div class="other">
		<Search />
		<div class="button"><Button href="/">Button</Button></div>
		<div class="round-examples">
			<RoundButton href="/" type="solid" color="orange">Solid Orange</RoundButton>
			<RoundButton href="/" type="outline" color="orange">Outline Orange</RoundButton>
			<RoundButton href="/" type="solid" color="black">Solid Black</RoundButton>
			<RoundButton href="/" type="outline" color="white">Outline White</RoundButton>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100vh;
		width: 100vw;
	}

	.button {
		padding: 40px;
	}

	.burgerMenu {
		padding: 10px;
		position: absolute;
		top: 0;
		left: 0;
	}

	.themeSelector {
		padding: 10px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.other {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		padding: 30px 10px 0px 10px;
	}

	.card {
		height: 250px;
		margin: 20px;
		flex-basis: calc(20% - 40px);
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
	}

	.card2 {
		height: 250px;
		flex-basis: calc(50%);
	}

	.card.a {
		background: var(--pcolor);
	}
	.card.b {
		background: var(--scolor);
	}
	.card.c {
		background: var(--hcolor);
	}
	.card.d {
		background: var(--acolor);
	}
	.card .card2.e {
		background: var(--bcolor);
	}
	.card .card2.f {
		background: var(--ocolor);
		color: var(--bcolor);
	}

	.glass {
		height: 150px;
		margin: 20px;
		flex-basis: calc(50% - 40px);
		border-radius: 12px;
		position: relative;
		overflow: hidden;
		-webkit-backdrop-filter: blur(12px) saturate(180%);
		backdrop-filter: blur(12px) saturate(180%);
		border: 1px solid var(--glass-border);
		background: var(--glass-bg);
		box-shadow: var(--glass-shadow);
	}

	.glass::before {
		content: '';
		position: absolute;
		inset: 1px;
		border-radius: 11px;
		opacity: var(--glass-tint-opacity, 0.76);
		background: var(--glass-tint, transparent);
	}

	/* Theme Overrides */
	:global(:root[dataTheme='darkMode']) {
		--glass-tint: rgba(0, 0, 0, 0.06);
		--glass-border: rgba(255, 255, 255, 0.12);
		--glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.2));
		--glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
	}

	:global(:root[dataTheme='lightMode']) {
		--glass-tint: rgba(255, 255, 255, 0.02);
		--glass-border: rgba(255, 255, 255, 0.4);
		--glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
		--glass-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.06), inset 0 0 2px 1px rgba(255, 255, 255, 0.3);
	}

	.other {
		padding: 30px 10px 0px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
