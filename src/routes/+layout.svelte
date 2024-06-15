<script lang="ts">
	import '@master/normal.css';
	import '@fontsource-variable/montserrat';
</script>

<slot />

<style>
	:root[dataTheme='darkMode'] {
		--Accent: #d5731e;
		--PColor1: #1c1c1c;
		--PColor2: #222222;
		--SColor1: #333333;
		--SColor2: #444444;
		--TColor: #b4b3b3;
	}

	:root[dataTheme='lightMode'] {
		--Accent: #cd580a;
		--PColor1: #ffffff;
		--PColor2: #f9fafb;
		--SColor1: #e5e7eb;
		--SColor2: #b4b3b3;
		--TColor: #444444;
	}
	:global(body) {
		background: radial-gradient(circle, var(--PColor1) 0%, var(--PColor2) 100%);
		font-family: 'Montserrat Variable', sans-serif;
		color: var(--TColor);
		font-size: 18px;
		font-weight: 500;
	}
</style>
