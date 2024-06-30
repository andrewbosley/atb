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

	let profileName = 'Socials';
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
			on:mouseenter={nameGithub}
			on:mouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={github} alt="GitHub" class="icon" />
		</a>
		<a
			href="https://x.com/andrewtbosley"
			on:mouseenter={nameTwitter}
			on:mouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={twitter} alt="Twitter" class="icon" />
		</a>
		<a
			href="https://www.linkedin.com/in/andrew-bosley/"
			on:mouseenter={nameLinkedin}
			on:mouseleave={nameDefault}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={linkedin} alt="LinkedIn" class="icon" />
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
		padding: 10px;
		color: var(--acolor);
		text-align: center;
		font-size: 14px;
		font-weight: bold;
		text-transform: uppercase;
	}
</style>
