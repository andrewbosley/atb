<script lang="ts">
	import '@master/normal.css';
	import '@fontsource-variable/montserrat';
</script>

<slot />

<style>
	:root[dataTheme='darkMode'] {
		--Accent: #cc6600;
		--PColor1: #1c1c1c;
		--PColor2: #222222;
		--SColor1: #444444;
		--SColor2: #333333;
		--LFont: #F8F8FA;
		--DFont: #c6c6c6;
	}

	:root[dataTheme='lightMode'] {
		--Accent: #d5731e;
		--PColor1: #ffffff;
		--PColor2: #F8F8FA;
		--SColor1: #c6c6c6;
		--SColor2: #bcbcbc;
		--LFont: #333333;
		--DFont: #1c1c1c;
	}

	/*--LOrange: #f8934f;*/

	:global(body) {
		background: radial-gradient(circle, var(--PColor1) 0%, var(--PColor2) 100%);
		font-family: 'Montserrat Variable', sans-serif;
		color: #f8934f;
		font-size: 18px;
	}
</style>