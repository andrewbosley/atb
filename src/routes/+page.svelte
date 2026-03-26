<script lang="ts">
	import { dev } from '$app/environment';
	import Balloon from 'lucide-svelte/icons/balloon';
	import ThemeSelector from '$lib/themeSelector.svelte';
	import BurgerMenu from '$lib/burgerMenu.svelte';
	import SocialMedia from '$lib/socialButton.svelte';
</script>

<svelte:head>
	<title>Hello World | ATB</title>
	<meta property="og:title" content="ATB" />
	<meta property="og:url" content="https://andrewtbosley.com" />
</svelte:head>

{#if dev}
	<div class="burgerMenu">
		<BurgerMenu />
	</div>
{/if}

<div class="themeSelector">
	<ThemeSelector />
</div>

<main>
	<div class="container">
		<nav class="navbar">
			<span class="name">Andrew Bosley</span>
			<div class="Balloon">
				<!-- <a href="/Balloon" class="BalloonLink" aria-label="Balloon page"> -->
				<Balloon size="40" aria-label="balloon" />
				<!-- </a> -->
			</div>
		</nav>

		<div class="content">
			<div class="me">
				<enhanced:img src="$lib/images/ATB.jpg" alt="ATB" class="profile"> </enhanced:img>
			</div>
			<div class="about">
				<p>
					devops by day, rabbit holes by night.<br />runs on pepsi max, sg1 rewatch #7.<br />once
					finished a side project.
				</p>
			</div>
			<SocialMedia />
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 100vw;
	}

	.burgerMenu {
		position: absolute;
		left: 10px;
		top: 10px;
		width: 28px;
		height: 28px;
		z-index: 1000;
	}

	.themeSelector {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.container {
		display: flex;
		position: relative;
		width: 400px;
		height: auto;
		align-items: center;
		justify-content: center;
		overflow: visible;
		box-shadow:
			0 26px 60px -12px rgba(0, 0, 0, 0.36),
			0 14px 28px -10px rgba(0, 0, 0, 0.18),
			0 6px 14px rgba(0, 0, 0, 0.08);
		background: var(--pcolor);
	}

	.navbar {
		width: 415px;
		height: 50px;
		background: var(--acolor);
		position: absolute;
		top: 20px;
		left: -15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.navbar::after {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		background-color: var(--acolor);
		width: 15px;
		right: -15px;
		animation: navFall 20s forwards;
		animation-delay: 61s;
	}

	.Balloon {
		position: absolute;
		top: 25px;
		right: 5px;
		z-index: -1;
		animation: balloonFloat 30s linear forwards;
		animation-delay: 62.5s;
	}

	.Balloon :global(svg) {
		width: 40px;
		height: 40px;
		stroke: var(--acolor);
		color: var(--acolor);
		fill: var(--acolor);
	}

	.navbar .name {
		color: var(--pcolor);
		font-family: var(--sfont);
		font-size: 2.2rem;
		letter-spacing: 1.5px;
		text-transform: uppercase;
		margin: 0;
	}

	.content {
		width: 100%;
		padding: 84px 0px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.me {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 15px;
	}

	.profile {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.about p {
		width: 100%;
		display: block;
		margin: 0 auto;
		max-width: 340px;
		text-align: center;
		color: var(--ocolor);
		line-height: 2.2;
		font-weight: 500;
		padding: 5px 0;
	}

	@media (max-width: 650px) {
		.container {
			width: 250px;
			height: unset;
			padding: 10px 0;
		}

		.navbar {
			width: 265px;
		}

		.navbar .name {
			font-size: 1.5rem;
			letter-spacing: 2px;
			margin: 0 0 0 13px;
		}

		.content {
			padding: 70px 5px 5px 5px;
			flex-direction: column;
		}

		.about p {
			font-size: 0.75rem;
			width: 100%;
		}

		.profile {
			width: 130px;
			height: 130px;
			border-radius: 50%;
		}
	}

	@keyframes navFall {
		0% {
			transform: translateY(0) translateX(0px) rotate(0deg);
			opacity: 1;
		}
		10% {
			transform: translateY(15px) translateX(0px) rotate(0deg);
			opacity: 1;
		}
		10.5% {
			transform: translateY(50px) translateX(30px) rotate(50deg);
			opacity: 1;
		}
		11% {
			transform: translateY(100px) translateX(55px) rotate(100deg);
			opacity: 1;
		}
		11.5% {
			transform: translateY(150px) translateX(60px) rotate(150deg);
			opacity: 0.7;
		}
		12% {
			transform: translateY(200px) translateX(65px) rotate(200deg);
			opacity: 0.5;
		}
		12.5% {
			transform: translateY(250px) translateX(70px) rotate(250deg);
			opacity: 0;
		}
		100% {
			transform: translateY(0) translateX(0px) rotate(0deg);
			opacity: 0;
		}
	}

	@keyframes balloonFloat {
		0% {
			transform: translateY(0) translateX(0) scale(1);
			z-index: -1;
		}
		1% {
			transform: translateY(-15px) translateX(15px) scale(1);
			z-index: -1;
		}
		20% {
			transform: translateY(-35px) translateX(40px) scale(1);
			z-index: -1;
		}
		40% {
			transform: translateY(-100px) translateX(80px) scale(2);
			z-index: 1;
		}
		75% {
			transform: translateY(-200px) translateX(4px) scale(2);
			z-index: 1;
		}
		90% {
			transform: translateY(-300px) translateX(60px) scale(3);
			z-index: 1;
		}
		100% {
			transform: translateY(-4000px) translateX(40px) scale(4);
			z-index: 1;
		}
	}
</style>
