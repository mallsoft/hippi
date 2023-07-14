<script>
	import CreateList from '$lib/forms/CreateList.svelte';

	export let data;
</script>

<title>Chippi</title>

<article>
	<CreateList />
	{#if data.known?.length}
		<ul class="listylist">
			{#each data.known as { title, id }}
				<li><a href="/list/{id}">{title}</a></li>
			{/each}
		</ul>
	{/if}
</article>

<style lang="scss">
	article {
		width: 100%;
		max-width: $block-width;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	li a {
		font-size: 6rem;
	}
</style>
