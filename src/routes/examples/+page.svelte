<script lang="ts">
	import ThemeSelector from '$lib/themeSelector.svelte';
	import Button from '$lib/standardButton.svelte';
	import Search from '$lib/ideas/search.svelte';
	import Glass from '$lib/glass.svelte';
</script>

<div class="themeSelector">
	<ThemeSelector />
</div>

<div class="container">
	<div class="card a">pcolor</div>
	<div class="card b">scolor</div>
	<div class="card c">hcolor</div>
	<div class="card d">acolor</div>
	<div class="card">
		<div class="card2 e">bcolor</div>
		<div class="card2 f">ocolor</div>
	</div>
</div>

<div class="container">
	<div class="glass">
		<Glass radius="" tintColor="" tintOpacity="">
			<p>Default glass</p>
		</Glass>
	</div>
	<div class="glass">
		<Glass radius="0px" tintColor="" tintOpacity="">
			<p>Radius glass (0px)</p>
		</Glass>
	</div>
	<div class="glass">
		<Glass radius="" tintColor="var(--acolor)" tintOpacity="">
			<p>Tint color glass (acolor)</p>
		</Glass>
	</div>
	<div class="glass">
		<Glass radius="" tintColor="" tintOpacity="0.8">
			<p>Tint opacity glass (0.8)</p>
		</Glass>
	</div>
</div>

<div class="other">
	<Search />
	<div class="button"><Button href="/">Button</Button></div>
</div>

<style>
	.button {
		padding: 40px;
	}

	.themeSelector {
		padding: 10px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}
	.other {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		padding: 30px 10px 0px 10px;
	}

	.card {
		height: 250px;
		margin: 20px;
		flex-basis: calc(20% - 40px);
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
	}

	.card2 {
		height: 250px;
		flex-basis: calc(50%);
	}

	.card.a {
		background: var(--pcolor);
	}
	.card.b {
		background: var(--scolor);
	}
	.card.c {
		background: var(--hcolor);
	}
	.card.d {
		background: var(--acolor);
	}
	.card .card2.e {
		background: var(--bcolor);
	}
	.card .card2.f {
		background: var(--ocolor);
		color: var(--bcolor);
	}

	.glass {
		height: 250px;
		margin: 20px;
		flex-basis: calc(25% - 40px);
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
	}

	.other {
		padding: 30px 10px 0px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
