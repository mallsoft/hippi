<script>
	import { page } from '$app/stores';
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

<header>
	<a href="/" aria-label="Lists">⮨</a>
	<a data-sveltekit-noscroll href="/list/{$page.params.list_id}/share">QR</a>
</header>

<main>
	<h1>
		<a data-sveltekit-noscroll href="{$page.params.list_id}/listedit">
			{data.list?.title}
		</a>
	</h1>

	{#if data.list?.type !== '' && supported[data.list?.type]}
		<div>
			<CreateItem autofocus={$page.route.id === '/list/[list_id]'} />
		</div>
		<svelte:component this={supported[data.list?.type]} items={data.list?.items} />
	{:else}
		<span>List error</span>
		<pre>{JSON.stringify(data.list, null, 2)}</pre>
	{/if}
</main>

<slot />

<style lang="scss">
	h1 {
		overflow-wrap: anywhere;
	}
	pre {
		font-size: 0.8rem;
		background: gray;
		color: white;
		padding: 1rem;
	}
	main {
		@include pageMain;
		margin-top: 8px;
	}

	header {
		display: flex;
		justify-content: space-between;
		width: 100%;

		a {
			color: $color-paper-secondary;
			padding: 0.5rem;
			margin: 0.5rem;
			border-radius: 4px;
		}
	}

	div {
		position: sticky;
		top: 1rem;
		z-index: 2;
	}
</style>
