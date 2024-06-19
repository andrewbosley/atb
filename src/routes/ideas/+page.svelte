<script lang="ts">
	import Search from '$lib/ideas/search.svelte';
	import ThemeToggle from '$lib/toggleTheme.svelte';
</script>

<div class="container">
	<h1>Welcome to SvelteKit</h1>
	<Search/>
	<ThemeToggle/>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>