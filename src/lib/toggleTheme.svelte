<!--
	@component
	Toggle button to change the theme in use.

	```
		<div class="themeToggle">
			<ThemeToggle />
		</div>
	```
-->

<script lang="ts">
	// Icons for light and dark mode
	import Dark_mode from 'lucide-svelte/icons/moon';
	import Light_mode from 'lucide-svelte/icons/sun';

	// Get current theme from local storage or set to dark (default), then apply it.
	let currentTheme = localStorage.getItem('theme') || 'darkMode';
	document.documentElement.setAttribute('dataTheme', currentTheme);

	// Function to toggle between themes
	const toggleTheme = () => {
		currentTheme = currentTheme === 'darkMode' ? 'lightMode' : 'darkMode';
		localStorage.setItem('theme', currentTheme);
		document.documentElement.setAttribute('dataTheme', currentTheme);
	};
</script>

<button class="toggle-button" on:click={toggleTheme}>
	<div class="toggle-icon">
		{#if currentTheme === 'lightMode'}
			<Light_mode fill="var(--acolor)" size="18" />
		{:else}
			<Dark_mode size="18" />
		{/if}
	</div>
</button>

<style>
	.toggle-button {
		position: relative;
		cursor: pointer;
		width: 42px;
		height: 28px;
		border: 2px solid;
		border-radius: 25px;
		color: var(--acolor);
		background-color: var(--acolor);
	}

	.toggle-button:hover {
		filter: brightness(1.2);
	}

	.toggle-icon {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: left 0.2s ease-in-out;
		background-color: var(--scolor);
	}

	:global([dataTheme='lightMode']) .toggle-icon {
		left: 13px;
	}
</style>
