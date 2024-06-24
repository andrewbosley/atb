<script lang="ts">
	import me from '$lib/images/test.jpg';
	import ThemeToggle from '$lib/toggleTheme.svelte';
	import BurgerMenu from '$lib/burgerMenu.svelte';
	import SocialMedia from '$lib/socialButton.svelte';

</script>

<div class="themeToggle">
	<ThemeToggle />
</div>

<main>
	<div class="container">
		<nav class="navbar">
			<span class="name">Andrew Bosley</span>
			<div class="ballon">
				<a href="/ballon" target="_self">🎈</a>
			</div>
			<div class="burgerMenu">
				<BurgerMenu
					links={[
						{ url: '/examples', text: 'Examples' },
						{ url: '/ideas', text: 'Ideas' },
						{ url: '/ertetrt', text: 'Error' }
					]}
					menuPosition={{
						top: '55px',
						right: '0px',
						left: '220px',
						bottom: '-300px'
					}}
				/>
			</div>
		</nav>

		<div class="content">
			<div class="about">
				<h1>Hello World!</h1>
				<p>This is me.</p>
			</div>
			<div class="me">
				<img src={me} alt="Me" />
				<SocialMedia />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
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
		border-radius: 25px;
	}

	.navbar {
		width: 520px;
		background: var(--acolor);
		position: absolute;
		top: 20px;
		left: -20px;
		border-radius: 20px 0 0 20px;
	}

	.navbar:after {
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		background-color: var(--acolor);
		width: 20px;
		right: -20px;
		border-radius: 0 20px 20px 0;
		animation: navFall 20s forwards;
		animation-delay: 61s;
	}

	.ballon {
		position: absolute;
		top: 25px;
		right: 0;
		z-index: -1;
		filter: hue-rotate(30deg);
		animation: ballonFloat 30s linear forwards;
		animation-delay: 61.6s;
	}

	.navbar .name {
		float: left;
		color: var(--pcolor);
		padding: 11px 0 0 30px;
		font-size: 1.6rem;
		letter-spacing: 5px;
		text-transform: uppercase;
		font-weight: bold;
	}

	.navbar .burgerMenu {
		float: right;
		width: 35px;
		height: 35px;
		margin: 8px 10px;
		color: var(--pcolor);
	}

	.navbar .burgerMenu:hover {
		color: var(--hcolor);
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
		font-size: 2em;
		color: var(--acolor);
		margin-bottom: 25px;
	}

	.about p {
		font-size: 1em;
		color: var(--acolor);
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

	.me img {
		width: 200px;
		height: 200px;
		padding: 20px;
		border-radius: 25%;
	}











	@media (max-width: 1000px) {
		
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

	@keyframes ballonFloat {
    0% {
        transform: rotateY(0deg) translateY(0) translateX(0) scale(1);
				z-index: -1;
    }
		1% {
        transform: rotateY(180deg) translateY(-5px) translateX(-15px) scale(1);
				z-index: -1;
    }
		20% {
				transform: rotateY(180deg) translateY(-20px) translateX(-40px) scale(1.5);
				z-index: 1;
    }
    40% {
        transform: rotateY(180deg) translateY(-100px) translateX(-80px) scale(2);
				z-index: 1;
    }
    75% {
        transform: rotateY(180deg) translateY(-200px) translateX(-4px) scale(2);
				z-index: 1;
    }
    90% {
        transform: rotateY(180deg) translateY(-300px) translateX(-60px) scale(2);
				z-index: 1;
    }
    100% {
        transform: rotateY(180deg) translateY(-4000px) translateX(-40px) scale(5);
				z-index: 1;
    }
}

</style>
