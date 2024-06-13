<script lang="ts">
	import ThemeToggle from '$lib/toggleTheme.svelte';
</script>

<h1>Welcome to ATB</h1>
<p>Visit <a href="https://andrewtbosley.com/">andrew.t.bosley</a> to find me</p>
<ThemeToggle />

<div class="container">
<div class="card a">a</div>
<div class="card b">b</div>
<div class="card c">c</div>
<div class="card d">d</div>
<div class="card e"></div>
<div class="card f">f</div>
<div class="card g">g</div>
<div class="card h">h</div>
<div class="card i">i</div>

</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		width: 300px;
		height: 300px;
		margin: 10px;
	}

	.a {
		background: #444444;
	}
	.b {
		background: #333333;
	}
	.c {
		background: #222222;
	}
	.d {
		background: #1c1c1c;
	}
	.f {
		background: #ffffff;
	}
	.g {
		background: #F8F8FA;
	}
	.h {
		background: #c6c6c6;
	}
	.i {
		background: #bcbcbc;
	}

</style>



