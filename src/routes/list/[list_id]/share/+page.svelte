<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		const style = document.body.getAttribute('style');
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style = style;
		};
	});
</script>

<a data-sveltekit-noscroll href="/list/{$page.params.list_id}">
	{@html data.qr}
</a>

<style lang="scss">
	a {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;

		& > :global(svg) {
			transform-origin: center;
			animation: in $transition-speed-out forwards $easing-jello;

			max-width: min(95vw, 300px);
			max-height: min(95vh, 300px);

			border-radius: 4px;
			box-shadow: 2rem 2rem 2rem -0.2rem rgba(0, 0, 0, 0.25);
		}
		& > :global(svg > path:first-of-type) {
			fill: $color-paper-secondary;
		}
		& > :global(svg > path:last-of-type) {
			stroke: $color-pen-secondary;
		}
	}

	@keyframes in {
		from {
			transform: translateY(-3rem) scale(0.7);
		}
	}
</style>
