<!--
	@component
	Social media buttons

	```
	import SocialMedia from '$lib/socialButton.svelte';

	<SocialMedia/>

	```
-->

<script lang="ts">
	const githubLoader = () => import('$lib/images/Icons/github.svg?raw');
	const twitterLoader = () => import('$lib/images/Icons/x.svg?raw');
	const linkedinLoader = () => import('$lib/images/Icons/linkedin.svg?raw');

	let profileName = $state('─────');
	function nameDefault() {
		profileName = '─────';
	}
	function nameGithub() {
		profileName = 'GitHub';
	}
	function nameTwitter() {
		profileName = 'Twitter';
	}
	function nameLinkedin() {
		profileName = 'LinkedIn';
	}

	function lazyIcon(node: HTMLElement, loader: () => Promise<{ default: string }>) {
		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					loader()
						.then((mod) => (node.innerHTML = mod.default))
						.catch(() => {});
					observer.disconnect();
				}
			});
			observer.observe(node);
			return { destroy: () => observer.disconnect() };
		}
		loader()
			.then((mod) => (node.innerHTML = mod.default))
			.catch(() => {});
	}
</script>

<div class="container">
	<div class="name">{profileName}</div>
	<div class="profiles">
		<a
			href="https://github.com/andrewbosley"
			onmouseenter={nameGithub}
			onmouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
		>
			<span use:lazyIcon={githubLoader} class="icon" aria-label="GitHub"></span>
		</a>
		<a
			href="https://x.com/andrewtbosley"
			onmouseenter={nameTwitter}
			onmouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Twitter"
		>
			<span use:lazyIcon={twitterLoader} class="icon" aria-label="Twitter"></span>
		</a>
		<a
			href="https://www.linkedin.com/in/andrew-bosley"
			onmouseenter={nameLinkedin}
			onmouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
		>
			<span use:lazyIcon={linkedinLoader} class="icon" aria-label="LinkedIn"></span>
		</a>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.profiles {
		display: flex;
		align-items: center;
	}

	.icon {
		width: 26px;
		height: 26px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		box-sizing: content-box;
		color: var(--acolor);
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
		fill: currentColor;
	}

	.profiles a:hover .icon {
		border-radius: 50%;
		background-color: var(--scolor);
	}

	.name {
		height: 28px;
		line-height: 28px;
		padding: 0;
		color: var(--acolor);
		text-align: center;
		font-size: 0.8rem;
		font-weight: bold;
		text-transform: uppercase;
		visibility: hidden;
		transition: opacity 1s ease;
	}

	.name:not(:empty) {
		visibility: visible;
	}
</style>
