<script lang="ts">
	export let card_title, card_desc, card_img, card_col;
	import Link from '$lib/ideas/roundButton.svelte';
</script>

<main>
	<div class="card-container">
		<div class="card" style="background-color:{card_col}">
			<img src={card_img} alt="My product" />
			<div class="card-body">
				<div class="card-title">
					<h2>{card_title}</h2>
				</div>
				<p>
					{card_desc}
				</p>
				<Link type="outline" href="HTTPS://example.com" color="white">Outline</Link>
				<Link type="solid" href="HTTPS://example.com" color="white">Solid</Link>
				<br />
				<br />
				<br />
				<Link type="outline" href="HTTPS://example.com" color="black">Outline</Link>
				<Link type="solid" href="HTTPS://example.com" color="black">Solid</Link>
				<br />
				<br />
				<br />
				<Link type="outline" href="HTTPS://example.com" color="orange">Outline</Link>
				<Link type="solid" href="HTTPS://example.com" color="orange">Solid</Link>
				<button>Do Something</button>
			</div>
		</div>
	</div>
</main>

<style>
	.card {
		max-width: 400px;
		border-radius: 5px;
		border-color: #ffffff;
		box-shadow: 0 10px 10px 0 #000000be;
		padding: 0 0 10px 0;
	}

	.card img {
		width: 100%;
		height: auto;
		justify-content: center;
		padding: 50px 50px;
	}

	.card-body {
		padding: 50px 25px;
	}

	.card-body p {
		color: #575757;
		margin-bottom: 200px;
		font-size: 20px;
	}
</style>
