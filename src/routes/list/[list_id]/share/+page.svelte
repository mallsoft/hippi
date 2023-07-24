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
	<div>
		{@html data.qr}
	</div>
</a>

<style lang="scss">
	a {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-color: rgba(100, 100, 100, 0.2);

		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 8px;

		div {
			& > :global(svg) {
				transform-origin: center;
				animation: in $transition-speed-in forwards $easing-jello;

				height: 100%;
				width: 100%;

				border-radius: 4px;
				box-shadow: 0.5rem 0.5rem 1rem -0.2rem rgba(0, 0, 0, 0.1);
			}
			& > :global(svg > path:first-of-type) {
				fill: $color-pen-secondary;
			}
			& > :global(svg > path:last-of-type) {
				stroke: $color-paper-secondary;
			}
		}
	}

	@keyframes in {
		from {
			transform: translateY(-3rem) scale(0.7);
		}
	}
</style>
