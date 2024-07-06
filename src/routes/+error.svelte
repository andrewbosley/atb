<script lang="ts">
	import SwirlCircle from '$lib/swirlCircle.svelte';
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/toggleTheme.svelte';
	import Button from '$lib/standardButton.svelte';

	// Change number of BG status codes based on screen width.
	// Get screen width
	function getScreenWidth(): number {
		return window.innerWidth;
	}
	let screenSizeVariable: number = getScreenWidth();

	// Change number of codes based on that width
	function updateVariableBasedOnScreenSize(): void {
		const screenWidth = getScreenWidth();
		if (screenWidth < 500) {
			screenSizeVariable = 20;
		} else if (screenWidth < 1200) {
			screenSizeVariable = 50;
		} else {
			screenSizeVariable = 90;
		}
	}
	updateVariableBasedOnScreenSize();

	// Place codes over screen at random
	let bgerrors = [];
	for (let i = 0; i < screenSizeVariable; i++) {
		const randomTop = `${Math.floor(Math.random() * 100)}vh`;
		const randomLeft = `${Math.floor(Math.random() * 100)}vw`;
		const randomId = Math.floor(Math.random() * 3) + 1;

		bgerrors.push({
			id: randomId,
			top: randomTop,
			left: randomLeft
		});
	}
</script>

<div class="container">
	{#each bgerrors as bgerror}
		<div class="random-div" style="top: {bgerror.top}; left: {bgerror.left};" data-id={bgerror.id}>
			{$page.status}
		</div>
	{/each}

	<div class="themeToggle">
		<ThemeToggle />
	</div>

	<div class="circle">
		<SwirlCircle>
			<h1>{$page.status}</h1>
			<h2>{$page?.error?.message}</h2>
		</SwirlCircle>
	</div>
	<Button href="/">Return Home</Button>
</div>

<style>
	.themeToggle {
		padding: 10px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.circle {
		animation: blur 20s ease-in-out infinite;
		width: 400px;
		height: 400px;
		margin-bottom: 50px;
	}
	h1 {
		text-align: center;
		color: var(--ocolor);
		font-weight: bold;
		font-size: 6rem;
		text-shadow: 0px 10px 0 var(--hcolor);
	}

	h2 {
		text-align: center;
		color: var(--acolor);
		font-size: 1.5rem;
		text-transform: uppercase;
	}

	@media (max-width: 1000px) {
		.circle {
			width: 280px;
			height: 280px;
		}

		h1 {
			font-size: 4rem;
			text-shadow: 0px 5px 0 var(--hcolor);
		}

		h2 {
			font-size: 1rem;
		}
	}

	.random-div:hover {
		transform: scale(5);
		color: var(--acolor);
		font-weight: bold;
	}

	.random-div {
		position: fixed;
		display: block;
		animation: fading 3s infinite;
		font-size: 1rem;
	}

	.random-div[data-id='1'] {
		animation-delay: 1s;
	}

	.random-div[data-id='2'] {
		animation-delay: 2s;
	}

	.random-div[data-id='3'] {
		animation-delay: 3s;
	}

	@keyframes fading {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes blur {
		0%,
		45% {
			filter: blur(0px);
		}

		49% {
			filter: blur(5px);
		}

		50% {
			filter: blur(0px);
		}

		51% {
			filter: blur(5px);
		}

		55%,
		100% {
			filter: blur(0px);
		}
	}
</style>
