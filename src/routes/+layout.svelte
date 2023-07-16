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
		padding: 2rem 8px;
		font-size: 2rem;
	}
</style>
