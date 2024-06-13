<!--
	@component
	Change themes using a toggle button

		Usage:
    ```tsx
		let currentTheme = localStorage.getItem('theme') || 'darkMode';
		```
-->

<script lang="ts">
	// Sun/Moon icons for button
	import Hiking from 'svelte-google-materialdesign-icons/Hiking.svelte';

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

<Hiking />
<button on:click={toggleTheme}>
	{currentTheme === 'lightMode' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
</button>
<slot />

<style>
</style>
