<!--
	@component
	Button - Update styles and choices localStorage, min width, resize on media etc
	Used on error page
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
		border-color: var(--Accent);
		text-transform: uppercase;
		display: block;
		cursor: pointer;
		overflow: hidden;
		position: relative;
		color: var(--TColor);
		background-color: var(--PColor2);
		border-width: 3px;
		font-weight: 600;
		border-radius: 8px;
		padding: 15px 35px;
	}

	.button span {
		position: relative;
		z-index: 1;
	}

	.button:hover {
		box-shadow: 0 0 15px var(--Accent);
		background: var(--Accent);
		color: var(--PColor2);
	}
</style>
