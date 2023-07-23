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

		backdrop-filter: blur(2px) brightness(0.4);
		display: flex;
		align-items: center;
		justify-content: center;

		& > :global(svg) {
			max-width: min(95vw, 300px);
			max-height: min(95vh, 300px);

			border-radius: 4px;
			box-shadow: 1rem 1rem 1rem -0.3rem rgba(0, 0, 0, 0.3);
		}
		& > :global(svg > path:first-of-type) {
			fill: $color-pen-primary;
		}
		& > :global(svg > path:last-of-type) {
			stroke: $color-paper-primary;
		}
	}
</style>
