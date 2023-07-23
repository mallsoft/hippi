<script>
	import ThumbList from '$lib/ThumbList.svelte';
	import CreateItem from '$lib/forms/CreateItem.svelte';
	export let data;

	const supported = {
		thumbs: ThumbList
	};
</script>

<svelte:head>
	<title>{data.list?.title}</title>
</svelte:head>

<main>
	<h1>
		<a href="/">
			{data.list?.title}
		</a>
	</h1>

	{#if data.list?.type !== '' && supported[data.list?.type]}
		<CreateItem />

		<svelte:component this={supported[data.list?.type]} items={data.list?.items} />
	{:else}
		<span>List error</span>
		<pre>{JSON.stringify(data.list, null, 2)}</pre>
	{/if}
</main>

<style lang="scss">
	h1 {
		font-size: 4rem;
	}
	pre {
		font-size: 0.8rem;
		background: gray;
		color: white;
		padding: 1rem;
	}
	main {
		@include pageMain;
	}
</style>
