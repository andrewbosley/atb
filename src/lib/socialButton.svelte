<!--
	@component
	Social media buttons

	```
	import SocialMedia from '$lib/socialButton.svelte';

	<SocialMedia/>

	```
-->

<script lang="ts">
	import github from '$lib/images/Icons/github.svg';
	import twitter from '$lib/images/Icons/x.svg';
	import linkedin from '$lib/images/Icons/linkedin.svg';

	let profileName = $state('Socials');
	function nameDefault() {
		profileName = 'Socials';
	}
	function nameGithub() {
		profileName = 'GitHub';
	}
	function nameTwitter() {
		profileName = 'Twitter';
	}
	function nameLinkedin() {
		profileName = 'Linkedin';
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
		>
			<img src={github} alt="GitHub" class="icon" loading="lazy" />
		</a>
		<a
			href="https://x.com/andrewtbosley"
			onmouseenter={nameTwitter}
			onmouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={twitter} alt="Twitter" class="icon" loading="lazy" />
		</a>
		<a
			href="https://www.linkedin.com/in/andrew-bosley"
			onmouseenter={nameLinkedin}
			onmouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={linkedin} alt="LinkedIn" class="icon" loading="lazy" />
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
		padding: 15px;
		box-sizing: content-box;
	}

	.icon:hover {
		padding: 15px;
		border-radius: 25%;
		border: 1px;
		background-color: var(--scolor);
	}

	.name {
		display: block;
		padding: 5px;
		color: var(--acolor);
		text-align: center;
		font-size: 0.8rem;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>
