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
	import MenuOpen from 'lucide-svelte/icons/menu';
	import MenuClose from 'lucide-svelte/icons/x';

	export let links = [];
	let isOpen = false;

	export let menuPosition = {
		top: '0px',
		left: '0px',
		bottom: '0px',
		right: '0px'
	};
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div>
	<button on:click={toggleMenu}>
		{#if isOpen == false}
			<MenuOpen size="100%" />
		{:else}
			<MenuClose size="100%" />
		{/if}
	</button>
	<div
		class="menuContainer"
		class:menuOpen={isOpen}
		style="top:{menuPosition.top};right:{menuPosition.right};left:{menuPosition.left};bottom:{menuPosition.bottom};"
	>
		<ul>
			{#each links as link}
				<li><a href={link.url}>{link.text}</a></li>
			{/each}
		</ul>
	</div>
</div>

<style>
	button {
		cursor: pointer;
	}

	.menuContainer {
		visibility: hidden;
		background-color: var(--pcolor);
		border-radius: 8px 0 0 8px;
		color: var(--acolor);
		padding: 30px;
		position: absolute;
		font-size: 1.5em;
		text-align: right;
		z-index: 100;
	}

	.menuContainer a:hover {
		color: var(--hcolor);
	}

	.menuOpen {
		visibility: visible;
	}
</style>
