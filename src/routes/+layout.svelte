<script>
	import '../app.scss';
</script>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 4rem 8px;

		font-size: 2rem;
	}
</style>
