<script lang="ts">
	let inputValue = $state('');
</script>

<input type="text" class="text" bind:value={inputValue} placeholder="Search..." />

{#if inputValue}
	<p>Searching for: {inputValue}</p>
{/if}

<style>
	.text {
		background-color: var(--hcolor);
		border-radius: 25px;
		width: 450px;
		padding: 10px;
		border: none;
	}
</style>
