<script lang="ts">
	import '@master/normal.css';
	import '@fontsource-variable/montserrat';
</script>

<slot />

<style>
	:root[dataTheme='darkMode'] {
		--pcolor: #1c1c1c;
		--scolor: #252525;
		--hcolor: #444444;
		--ocolor: #ffffff;
		--bcolor: #000000;
	}

	:root[dataTheme='lightMode'] {
		--pcolor: #dddddd;
		--scolor: #fcfcfc;
		--hcolor: #b4b3b3;
		--ocolor: #000000;
		--bcolor: #ffffff;
	}
	:global(body) {
		font-family: 'Montserrat Variable', sans-serif;
		font-size: 20px;
		font-weight: 400;
		color: var(--ocolor);
		background-color: var(--scolor);
		--acolor: #d5731e;
	}
</style>
