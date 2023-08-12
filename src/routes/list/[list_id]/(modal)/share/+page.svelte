<script>
	export let data;
</script>

<div>
	{@html data.qr}
</div>

<style lang="scss">
	div {
		& > :global(svg) {
			height: 100%;
			width: 100%;

			border-radius: 4px;
			box-shadow: 0.5rem 0.5rem 1rem -0.2rem rgba(0, 0, 0, 0.2);
		}
		& > :global(svg > path:first-of-type) {
			fill: $color-pen-secondary;
		}
		& > :global(svg > path:last-of-type) {
			stroke: $color-paper-secondary;
		}
	}
</style>
