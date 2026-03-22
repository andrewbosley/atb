<script lang="ts">
	import '@master/normal.css';
	import '@fontsource-variable/montserrat';
	import '@fontsource/permanent-marker';
	let { children } = $props();
</script>

{@render children()}

<style>
	:root[dataTheme='darkMode'] {
		--pcolor: #171717;
		--scolor: #242424;
		--hcolor: #4a4a4a;
		--ocolor: #ffffff;
		--bcolor: #000000;
	}
	:root[dataTheme='lightMode'] {
		--pcolor: #f7f7f7;
		--scolor: #eaeaea;
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
		background-image: linear-gradient(to top, var(--acolor) -150%, var(--scolor) 75%);
		background-attachment: fixed;
	}
	:global(html) {
		font-size: 16px;
		font-weight: 400;
	}
</style>
