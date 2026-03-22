<!--
	@component
	Burger menu for navigation menu.

	```
	import BurgerMenu from '$lib/burgerMenu.svelte';

	<BurgerMenu
	links={[
		{ url: '/examples', text: 'Examples' },
	]}
	menuPosition={{
		top: '10px',
		right: '10px',
		left: '10px',
		bottom: '10px'
	}}
	/>

	```
-->

<script lang="ts">
	import MenuOpen from 'lucide-svelte/icons/square-menu';
	import MenuClose from 'lucide-svelte/icons/square-x';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';

	let isOpen = $state(false);

	let {
		links = [],
		menuPosition = {
			top: '0px',
			left: '0px',
			bottom: '0px',
			right: '0px'
		}
	} = $props();
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div>
	<button onclick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation menu">
		{#if !isOpen}
			<MenuOpen size="100%" />
		{:else}
			<MenuClose size="100%" />
		{/if}
	</button>

	{#if isOpen}
		<div
			transition:slide={{ duration: 200 }}
			class="menuContainer"
			style:top={menuPosition.top}
			style:right={menuPosition.right}
			style:left={menuPosition.left}
			style:bottom={menuPosition.bottom}
		>
			<ul>
				{#each links as link (link.text)}
					<li><a href={resolve(link.url)} onclick={toggleMenu}>{link.text}</a></li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	button {
		cursor: pointer;
	}

	.menuContainer {
		background-color: var(--pcolor);
		border-radius: 8px 0 0 8px;
		color: var(--acolor);
		padding: 30px;
		position: absolute;
		font-size: 1.6em;
		text-align: right;
		z-index: 100;
		font-weight: 700;
	}

	.menuContainer a:hover {
		color: var(--ocolor);
	}
</style>
