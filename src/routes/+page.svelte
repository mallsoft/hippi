<script>
	import CreateList from '$lib/forms/CreateList.svelte';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<svelte:head>
	<title>Hippi</title>
</svelte:head>

<main>
	<CreateList />
	{#if data.known?.length}
		<ul class="listylist">
			{#each data.known as { title, id } (id)}
				<li>
					<a href="/list/{id}">
						{title}
					</a>
					<div>
						<SubmitHidden
							action="forgetList"
							hiddenData={{ id }}
							submitText="⨯"
							submitTitle="Forget list: {title}"
						/>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style lang="scss">
	main {
		@include pageMain;
	}

	li a {
		display: block;
		font-size: 4rem;
		font-weight: 500;

		width: 100%;
	}

	li {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
</style>
