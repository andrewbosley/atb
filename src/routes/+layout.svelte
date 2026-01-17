<script lang="ts">
	import '@master/normal.css';
	import '@fontsource-variable/montserrat';
	import '@fontsource/permanent-marker';
	let { children } = $props();
</script>

{@render children()}

<style>
	:root[dataTheme='darkMode'] {
		--pcolor: #141414;
		--scolor: #242424;
		--hcolor: #4a4a4a;
		--ocolor: #ffffff;
		--bcolor: #000000;
	}
	:root[dataTheme='lightMode'] {
		--pcolor: #f7f7f7;
		--scolor: #ededed;
		--hcolor: #cccccc;
		--ocolor: #000000;
		--bcolor: #ffffff;
	}
	:global(body) {
		--acolor: #d5731e;
		--pfont: 'Montserrat Variable', sans-serif;
		--sfont: 'Permanent Marker', cursive;
		color: var(--ocolor);
		background-color: var(--scolor);
		font-family: var(--pfont);
	}
	:global(html) {
		font-size: 16px;
		font-weight: 400;
	}
</style>
