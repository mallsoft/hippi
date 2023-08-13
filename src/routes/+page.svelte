<script>
	import CreateList from '$lib/forms/CreateList.svelte';
	export let data;
</script>

<svelte:head>
	<title>Hippi</title>
</svelte:head>

<main>
	<div>
		<CreateList />
	</div>
	{#if data.known?.length}
		<ul>
			{#each data.known as { title, id } (id)}
				<li>
					<a href="/list/{id}">
						{title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style lang="scss">
	main {
		@include pageMain;

		div {
			margin-top: 6rem;
			margin-bottom: 2rem;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		line-height: 0.9;
	}
	li {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		& a {
			display: block;
			font-size: 3rem;
			font-weight: 500;

			width: 100%;

			overflow-wrap: anywhere;
		}
	}
</style>
