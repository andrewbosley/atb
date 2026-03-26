<!--
	@component
	Fullscreen split-reveal navigation menu.

	```
	import BurgerMenu from '$lib/burgerMenu.svelte';

	<BurgerMenu
		links={[
			{ url: '/examples', text: 'Examples' },
		]}
	/>
	```
-->

<script lang="ts">
	import MenuIcon from 'lucide-svelte/icons/menu';
	import XIcon from 'lucide-svelte/icons/x';
	import { resolve } from '$app/paths';

	let isOpen = $state(false);

	let {
		links = [
			{ url: '/examples', text: 'Examples' },
			{ url: '/error', text: 'Error' }
		]
	} = $props();

	const toggle = () => (isOpen = !isOpen);
</script>

<button class="burger-button" aria-label="Toggle menu" onclick={toggle}>
	<div class="burger-icon">
		{#if isOpen}
			<XIcon size="18" />
		{:else}
			<MenuIcon size="18" />
		{/if}
	</div>
</button>

<div class="overlay" class:open={isOpen}></div>

<nav class="menu-links" class:open={isOpen}>
	{#each links as link, i (link.url)}
		{#if i > 0}<div class="divider"></div>{/if}
		<a href={resolve(link.url)}>{link.text}</a>
	{/each}
</nav>

<style>
	.burger-button {
		cursor: pointer;
		position: relative;
		z-index: 101;
		width: 28px;
		height: 28px;
		border: 2px solid;
		border-radius: 25px;
		color: var(--acolor);
		background-color: var(--acolor);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		overflow: hidden;
		animation: heartbeat 18s ease-in-out infinite;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(1);
		}
		1.7% {
			transform: scale(1.3);
		}
		2.8% {
			transform: scale(1);
		}
		4% {
			transform: scale(1.2);
		}
		5% {
			transform: scale(1);
		}
		6.7% {
			transform: translateX(-3px);
		}
		7.2% {
			transform: translateX(3px);
		}
		7.7% {
			transform: translateX(-2px);
		}
		8.2% {
			transform: translateX(2px);
		}
		8.7% {
			transform: translateX(0);
		}
		9%,
		10% {
			transform: scale(1);
		}
	}

	.burger-button:hover {
		filter: brightness(1.2);
	}

	.burger-icon {
		width: 24px;
		height: 24px;
		top: 0px;
		left: 0px;
		border-radius: 50%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--scolor);
	}

	.overlay {
		position: fixed;
		inset: 0;
		z-index: 99;
		background-color: var(--pcolor);
		transform: translateY(-100%);
		transition: transform 0.8s ease 0.2s;
		pointer-events: none;
	}

	.overlay.open {
		transform: translateY(0);
		transition: transform 1s ease;
		pointer-events: auto;
	}

	.menu-links {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
		pointer-events: none;
	}

	.menu-links.open {
		pointer-events: auto;
	}

	.menu-links a {
		color: var(--acolor);
		text-decoration: none;
		font-size: 2rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.25s ease,
			transform 0.25s ease;
	}

	.menu-links.open a {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.4s ease 0.5s,
			transform 0.4s ease 0.5s;
	}

	.menu-links a:hover {
		filter: brightness(1.3);
	}

	.divider {
		width: 50px;
		height: 2px;
		background-color: var(--ocolor);
		opacity: 0;
		transition: opacity 0.25s ease;
	}

	.menu-links.open .divider {
		opacity: 0.9;
		transition: opacity 0.4s ease 0.5s;
	}
</style>
