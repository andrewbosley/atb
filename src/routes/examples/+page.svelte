<script lang="ts">
	import ThemeToggle from '$lib/toggleTheme.svelte';
	import Button from '$lib/standardButton.svelte';
</script>

<h1>Welcome to ATB</h1>
<p>Visit <a href="https://andrewtbosley.com/">andrew.t.bosley</a> to find me</p>
<div class="themeToggle">
	<ThemeToggle />
</div>
<div class="button"><Button href="/">Example</Button></div>

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

<style>
	.button {
		padding: 10px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.themeToggle {
		padding: 10px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		padding: 20px;
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

	.a {
		background: var(--pcolor);
	}
	.b {
		background: var(--scolor);
	}
	.c {
		background: var(--hcolor);
	}
	.d {
		background: var(--acolor);
	}
	.e {
		background: var(--bcolor);
	}
	.f {
		background: var(--ocolor);
	}
</style>
