<!--
	@component
	Button - Update styles and choices localStorage, min width, resize on media etc
	Used on error page

	```
		<Button href="/">Example</Button>
	```
-->

<script lang="ts">
	export let href = '#';
	export let target = '_self';
</script>

<a {href} {target} class="button">
	<span><slot /></span>
</a>

<style>
	.button {
		border-color: var(--acolor);
		text-transform: uppercase;
		display: block;
		cursor: pointer;
		overflow: hidden;
		position: relative;
		background-color: var(--scolor);
		border: 2px solid var(--acolor);
		font-size: 1rem;
		font-weight: 600;
		border-radius: 8px;
		padding: 15px;
	}

	.button span {
		position: relative;
		z-index: 1;
	}

	.button:hover {
		box-shadow: 0 0 10px var(--acolor);
		background: var(--acolor);
		color: var(--scolor);
	}
</style>
