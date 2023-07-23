<script>
	import '../app.scss';
</script>

<div>
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		font-size: 2rem;

		min-height: 100%;
	}
</style>
