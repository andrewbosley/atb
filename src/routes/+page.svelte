<script lang="ts">
	import balloon from '$lib/images/balloon.png';
	import ThemeToggle from '$lib/toggleTheme.svelte';
	import BurgerMenu from '$lib/burgerMenu.svelte';
	import SocialMedia from '$lib/socialButton.svelte';

	let screenWidth = $state(0);

	let menuPosition = $derived(
		screenWidth <= 650
			? { top: '30px', right: '0px', left: '-200px', bottom: '-410px' }
			: { top: '55px', right: '0px', left: '300px', bottom: '-300px' }
	);
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="themeToggle">
	<ThemeToggle />
</div>

<main>
	<div class="container">
		<nav class="navbar">
			<span class="name">Andrew Bosley</span>
			<div class="Balloon">
				<!-- <a href="/Balloon" target="_self"> -->
				<img src={balloon} alt="balloon" loading="lazy" />
				<!-- </a> -->
			</div>
			<div class="burgerMenu">
				<BurgerMenu
					links={[
						{ url: '/examples', text: 'Examples' },
						{ url: '/error', text: 'Error' }
					]}
					{menuPosition}
				/>
			</div>
		</nav>

		<div class="content">
			<div class="about">
				<h1>Hello World</h1>
			</div>
			<div class="me">
				<enhanced:img src="$lib/images/ATB.jpg" alt="ATB" class="profile">
				</enhanced:img>
				<SocialMedia />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}

	.themeToggle {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.container {
		position: relative;
		width: 500px;
		height: 400px;
		background-color: var(--pcolor);
		align-items: center;
		justify-content: center;
		border-radius: 15px;
	}

	.navbar {
		width: 520px;
		background: var(--acolor);
		position: absolute;
		top: 20px;
		left: -20px;
		border-radius: 15px 0 0 15px;
	}

	.navbar::after {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		background-color: var(--acolor);
		width: 20px;
		right: -19px;
		border-radius: 0 15px 15px 0;
		animation: navFall 20s forwards;
		animation-delay: 61s;
	}

	.Balloon {
		position: absolute;
		top: 25px;
		right: 0;
		z-index: -1;
		animation: balloonFloat 30s linear forwards;
		animation-delay: 62.5s;
	}

	.navbar .name {
		float: left;
		color: var(--pcolor);
		font-family: var(--sfont);
		padding: 7px 0 0 28px;
		font-size: 2rem;
		letter-spacing: 2px;
		text-transform: uppercase;
		font-weight: bold;
	}

	.navbar .burgerMenu {
		float: right;
		width: 35px;
		height: 35px;
		margin: 9px 10px;
		color: var(--pcolor);
		visibility: hidden;
	}

	.navbar .burgerMenu :global(button:hover) {
		color: var(--ocolor);
	}

	.content {
		width: 100%;
		height: 100%;
		padding: 50px 8px 8px 20px;
		display: flex;
	}

	.about {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.about h1 {
		font-size: 2.4rem;
		color: var(--acolor);
		margin-bottom: 25px;
		font-weight: 900;
	}

	.me {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.profile {
		width: 200px;
		height: 200px;
		padding: 20px;
		border-radius: 20%;
	}

	@media (max-width: 650px) {
		.container {
			width: 250px;
			height: unset;
		}

		.navbar {
			width: 270px;
		}

		.navbar .name {
			padding: 12px 0 10px 28px;
			font-size: 1.5rem;
			letter-spacing: 2px;
		}
		.navbar .burgerMenu {
			float: unset;
			position: absolute;
			top: 52px;
			right: 0px;
			width: 30px;
			height: 30px;
			color: var(--acolor);
		}

		.content {
			padding: 100px 5px 35px 5px;
			flex-direction: column;
		}

		.about {
			width: 100%;
		}

		.about h1 {
			margin: 15px;
		}

		.me {
			width: 100%;
		}

		.profile {
			margin: 10px 0 0;
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
			transform: translateY(-35px) translateX(40px);
			z-index: -1;
		}
		40% {
			transform: translateY(-100px) translateX(80px);
			z-index: 1;
		}
		75% {
			transform: translateY(-200px) translateX(4px);
			z-index: 1;
		}
		90% {
			transform: translateY(-300px) translateX(60px);
			z-index: 1;
		}
		100% {
			transform: translateY(-4000px) translateX(40px);
			z-index: 1;
		}
	}
</style>
