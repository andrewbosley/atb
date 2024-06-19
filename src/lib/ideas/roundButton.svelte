<script lang="ts">
	export let href = '#';
	export let target = '_self';
	export let type: 'outline' | 'solid' = 'solid';
	export let color: 'white' | 'black' | 'orange' = 'orange';
</script>

<a {href} {target}>
	<button class="{type} {color}">
		<slot />
	</button>
</a>

<style>
	button {
		position: relative;
		overflow: hidden;
		transition: all 0.7s ease;
		font-weight: 500;
		min-width: 135px;
		padding: 12px;
		border-radius: 8px;
		border-width: 2px;
		border-style: solid;
		cursor: pointer;
	}

	button.outline {
		background: transparent;
	}

	//Orange

	button.solid.orange {
		background: var(--Orange);
		border-color: var(--Orange);
		color: var(--White);
	}

	button.solid.orange:hover {
		background: transparent;
		color: var(--Orange);
		box-shadow: 0 0 20px var(--Orange);
	}

	button.outline.orange {
		border-color: var(--Orange);
		color: var(--Orange);
	}

	button.outline.orange:hover {
		background: var(--Orange);
		color: var(--White);
		border-color: var(--Orange);
		box-shadow: 0 0 20px var(--Orange);
	}

	//Black

	button.solid.black {
		background: var(--Black);
		border-color: var(--Black);
		color: var(--Orange);
	}

	button.solid.black:hover {
		background: transparent;
		color: var(--Black);
		box-shadow: 0 0 20px var(--Black);
	}

	button.outline.black {
		border-color: var(--Black);
		color: var(--Black);
	}

	button.outline.black:hover {
		background: var(--Black);
		color: var(--Orange);
		border-color: var(--Black);
		box-shadow: 0 0 20px var(--Black);
	}

	//White

	button.solid.white {
		background: var(--White);
		border-color: var(--White);
		color: var(--Orange);
	}

	button.solid.white:hover {
		background: transparent;
		color: var(--White);
		box-shadow: 0 0 20px var(--White);
	}

	button.outline.white {
		border-color: var(--White);
		color: var(--White);
	}

	button.outline.white:hover {
		background: var(--White);
		color: var(--Orange);
		border-color: var(--White);
		box-shadow: 0 0 20px var(--White);
	}
</style>
