<script>
	import ThumbList from '$lib/ThumbList.svelte';
	import CreateItem from '$lib/forms/CreateItem.svelte';
	export let data;

	const supported = {
		thumbs: ThumbList
	};
</script>

<title>{data.list?.title}</title>

<article>
	<h1>
		<a href="/">{data.list?.title}</a>
	</h1>

	{#if data.list?.type !== '' && supported[data.list?.type]}
		<CreateItem />

		<svelte:component this={supported[data.list?.type]} items={data.list?.items} />
	{:else}
		<span>List error</span>
		<pre>{JSON.stringify(data.list, null, 2)}</pre>
	{/if}
</article>

<style lang="scss">
	pre {
		font-size: 0.8rem;
		background: gray;
		color: white;
		padding: 1rem;
	}
	article {
		h1 {
			font-size: 6rem;
		}
		width: 100%;
		max-width: $block-width;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
