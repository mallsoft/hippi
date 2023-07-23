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

		gap: 1rem;

		font-size: 2rem;
		padding: 2rem 8px;

		box-sizing: border-box;
		min-height: 100%;
	}
</style>
