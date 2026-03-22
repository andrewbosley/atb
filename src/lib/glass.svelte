<!--
	@component
	Glass component for creating a frosted glass effect.

	```
	import Glass from '$lib/Glass.svelte';

	<Glass radius="0px" tintColor="" tintOpacity="0.2" width="500%" height="150px">
		<p>Glass</p>
	</Glass>

	```
-->

<script lang="ts">
	export let radius: string | number | undefined = undefined;
	export let tintColor: string | undefined = undefined;
	export let tintOpacity: string | number | undefined = undefined;

	function hexToRgb(hex: string) {
		if (hex.length === 3)
			hex = hex
				.split('')
				.map((c) => c + c)
				.join('');
		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);
		return { r, g, b };
	}

	$: computedTint = (() => {
		if (!tintColor) return undefined;
		const s = String(tintColor).trim();
		if (s.startsWith('#')) {
			let hex = s.slice(1);
			if (hex.length === 3)
				hex = hex
					.split('')
					.map((c) => c + c)
					.join('');
			if (hex.length === 6 || hex.length === 8) {
				const { r, g, b } = hexToRgb(hex.slice(0, 6));
				let alphaFromHex = undefined;
				if (hex.length === 8) alphaFromHex = parseInt(hex.slice(6, 8), 16) / 255;
				let opacity = undefined;
				if (tintOpacity !== undefined && String(tintOpacity).trim() !== '') opacity = tintOpacity;
				else if (alphaFromHex !== undefined) opacity = alphaFromHex;
				if (opacity !== undefined) return `rgba(${r}, ${g}, ${b}, ${opacity})`;
				return `#${hex.slice(0, 6)}`;
			}
		}
		return s;
	})();

	$: styleAttr =
		'width: 100%;' +
		'height: 100%;' +
		(radius !== undefined && String(radius).trim() !== ''
			? `--glass-radius: ${typeof radius === 'number' ? radius + 'px' : radius};`
			: '') +
		(computedTint ? `--glass-tint: ${computedTint};` : '') +
		((!computedTint || !String(computedTint).startsWith('rgba(')) &&
		tintOpacity !== undefined &&
		String(tintOpacity).trim() !== ''
			? `--glass-tint-opacity: ${tintOpacity};`
			: '');
</script>

<div {...$$restProps} class="glass" style={styleAttr}>
	<div class="glass-overlay" aria-hidden="true"></div>
	<div class="glass-inner-stroke" aria-hidden="true"></div>
	<div class="glass-content"><slot /></div>
</div>

<style>
	.glass {
		position: relative;
		padding: var(--glass-padding, 1rem);
		border-radius: var(--glass-radius, 12px);
		overflow: hidden;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.02);
	}

	:global(.glass) {
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
	}

	.glass-overlay {
		position: absolute;
		inset: 1px;
		border-radius: calc(var(--glass-radius, 12px) - 1px);
		pointer-events: none;
		opacity: var(--glass-tint-opacity, 0.12);
		background: var(--glass-tint, transparent);
		z-index: 1;
	}

	.glass-inner-stroke {
		position: absolute;
		inset: 0;
		border-radius: var(--glass-radius, 12px);
		pointer-events: none;
		z-index: 2;
		box-shadow: inset 0 0 0 var(--glass-inner-stroke-width, 0px)
			var(--glass-inner-stroke-color, transparent);
	}

	.glass-content {
		position: relative;
		z-index: 3;
	}

	/* Dark theme */
	:global(:root[dataTheme='darkMode']) .glass-inner-stroke {
		--glass-inner-stroke-color: rgba(255, 255, 255, 0.06);
		--glass-inner-stroke-width: 1px;
	}

	:global(:root[dataTheme='darkMode']) .glass {
		border-color: rgba(255, 255, 255, 0.1);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
		background: rgba(255, 255, 255, 0.04);
	}

	:global(:root[dataTheme='darkMode']) .glass .glass-overlay {
		background: var(--glass-tint, rgba(0, 0, 0, var(--glass-tint-opacity, 0.1)));
	}

	/* Light theme */
	:global(:root[dataTheme='lightMode']) .glass-inner-stroke {
		--glass-inner-stroke-color: rgba(255, 255, 255, 0.5);
		--glass-inner-stroke-width: 1px;
	}

	:global(:root[dataTheme='lightMode']) .glass {
		border-color: rgba(0, 0, 0, 0.14);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.14);
		background: rgba(100, 100, 100, 0.12);
	}

	:global(:root[dataTheme='lightMode']) .glass .glass-overlay {
		background: var(--glass-tint, rgba(0, 0, 0, var(--glass-tint-opacity, 0.06)));
	}

	/* Shimmer */
	.glass::after {
		content: '';
		position: absolute;
		top: 0;
		left: -150%;
		width: 50%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transform: skewX(-20deg);
		transition: left 1s ease-in-out;
		z-index: 4;
		pointer-events: none;
	}

	.glass:hover::after {
		left: 150%;
	}
</style>
