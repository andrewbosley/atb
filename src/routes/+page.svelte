<script lang="ts">
	import ThemeToggle from '$lib/toggleTheme.svelte';
</script>

<h1>Welcome to ATB</h1>
<p>Visit <a href="https://andrewtbosley.com/">andrew.t.bosley</a> to find me</p>
<div class="themeToggle">
	<ThemeToggle />
</div>

<div class="container">
	<div class="card a">Dark - PColor1</div>
	<div class="card b">Dark - PColor2</div>
	<div class="card c">Dark - SColor1</div>
	<div class="card d">Dark - SColor2</div>
	<div class="card f">Light - PColor1</div>
	<div class="card g">Light - PColor2</div>
	<div class="card h">Light - SColor1</div>
	<div class="card i">Light - SColor2</div>
	<div class="card j">Theme - PColor1</div>
	<div class="card k">Theme - PColor2</div>
	<div class="card l">Theme - SColor1</div>
	<div class="card m">Theme - SColor2</div>
</div>

<style>
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
	}
	.card {
		width: 300px;
		height: 300px;
		margin: 20px;
		flex-basis: calc(25% - 40px);
	}

	.a {
		background: #1c1c1c;
	}
	.b {
		background: #222222;
	}
	.c {
		background: #333333;
	}
	.d {
		background: #444444;
	}
	.f {
		background: #f9fafb;
	}
	.g {
		background: #f1f0f1;
	}
	.h {
		background: #e5e7eb;
	}
	.i {
		background: #b4b3b3;
	}
	.j {
		background: var(--PColor1);
	}
	.k {
		background: var(--PColor2);
	}
	.l {
		background: var(--SColor1);
	}
	.m {
		background: var(--SColor2);
	}
</style>
