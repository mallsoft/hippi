<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		const style = document.body.getAttribute('style');
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style = style;
		};
	});
</script>

<a
	data-sveltekit-noscroll
	class="back"
	href="/list/{$page.params.list_id}"
	aria-label="Back to list"
/>

<div class="page">
	<slot />
</div>

<style lang="scss">
	.page {
		position: fixed;
		z-index: 99;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		pointer-events: none;
		& :global(*) {
			pointer-events: initial;
		}

		transform-origin: center;
		animation: in $transition-speed-in forwards $easing-jello;
	}

	@keyframes in {
		from {
			opacity: 0.5;
			transform: scale(0.95);
		}
	}

	.back {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 98;
		width: 100%;
		height: 100%;

		background-color: rgba($color-pen-primary, 0.2);

		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
