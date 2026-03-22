<!--
	@component
	Accent colour selector and theme toggle.

	```
        <ThemeSelector />
	```
-->

<script lang="ts">
	import Dark_mode from 'lucide-svelte/icons/moon';
	import Light_mode from 'lucide-svelte/icons/sun';
	import Palette from 'lucide-svelte/icons/palette';
	import Rotate_ccw from 'lucide-svelte/icons/rotate-ccw';

	// Theme toggle
	let currentTheme = $state(localStorage.getItem('theme') || 'darkMode');

	$effect(() => {
		document.documentElement.setAttribute('dataTheme', currentTheme);
		localStorage.setItem('theme', currentTheme);
	});

	const toggleTheme = () => {
		currentTheme = currentTheme === 'darkMode' ? 'lightMode' : 'darkMode';
	};

	const resetAccent = () => {
		accentColor = '#d5731e';
		currentTheme = 'darkMode';
	};

	// Accent colour picker
	let accentColor = $state(localStorage.getItem('accentColor') || '#d5731e');

	$effect(() => {
		document.body.style.setProperty('--acolor', accentColor);
		localStorage.setItem('accentColor', accentColor);
	});
</script>

<div class="theme-selector" role="group" aria-label="Theme selector">
	<label class="accent-picker" title="Accent color">
		<div class="picker-icon">
			<Palette size="18" />
		</div>
		<input type="color" bind:value={accentColor} aria-label="Choose accent color" />
	</label>

	<button class="toggle-button" aria-label="Toggle theme" onclick={toggleTheme}>
		<div class="toggle-icon">
			{#if currentTheme === 'lightMode'}
				<Light_mode fill="var(--acolor)" size="18" />
			{:else}
				<Dark_mode size="18" />
			{/if}
		</div>
	</button>

	<button class="reset-button" aria-label="Reset accent color" onclick={resetAccent}>
		<div class="reset-icon">
			<Rotate_ccw size="18" />
		</div>
	</button>
</div>

<style>
	.theme-selector {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.toggle-button {
		position: relative;
		cursor: pointer;
		width: 42px;
		height: 28px;
		border: 2px solid;
		border-radius: 25px;
		color: var(--acolor);
		background-color: var(--acolor);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	.toggle-button:hover {
		filter: brightness(1.2);
	}

	:global([dataTheme='lightMode']) .toggle-icon {
		left: 13px;
	}

	.toggle-icon {
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
		transition: left 0.2s ease-in-out;
	}

	.accent-picker {
		cursor: pointer;
		position: relative;
		cursor: pointer;
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
	}

	.accent-picker:hover {
		filter: brightness(1.2);
	}

	.picker-icon {
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

	.accent-picker input[type='color'] {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
		pointer-events: none;
	}

	.reset-button {
		cursor: pointer;
		position: relative;
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
	}

	.reset-button:hover {
		filter: brightness(1.2);
	}

	.reset-icon {
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
</style>
