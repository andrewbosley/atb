<!--
	@component
	Circle with orange rotating glow.

	```
	<div class="circle">
		<SwirlCircle>
			<stuff/>
		</SwirlCircle>
	</div>
	```
-->

<script lang="ts">
</script>

<div class="circle">
	<span></span>
</div>
<div class="content">
	<slot></slot>
</div>

<style>
	.content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transform-origin: center;
	}

	.circle {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
		animation: animate 3s linear infinite;
	}

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.circle span {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: linear-gradient(transparent, var(--acolor));
		filter: blur(15px);
	}

	.circle::after {
		content: '';
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		bottom: 20px;
		background: var(--scolor);
		border: solid var(--pcolor) 2px;
		border-radius: 50%;
	}
</style>
