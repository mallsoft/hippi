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
	<a href="/" title="List index">◀</a>
	<h1>
		<a data-sveltekit-noscroll href="{$page.params.list_id}/listedit">
			{data.list?.title}
		</a>
	</h1>
	<a data-sveltekit-noscroll title="Share QR Code" href="/list/{$page.params.list_id}/share">QR</a>
</header>

<main>
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
	pre {
		font-size: 0.8rem;
		background: gray;
		color: white;
		padding: 1rem;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		a {
			color: $color-paper-secondary;
			padding: 1rem;
			border-radius: 4px;
		}

		h1 {
			a {
				padding: 0;
			}
			font-size: 2rem;
			overflow-wrap: anywhere;

			line-height: 0.9;
			max-width: calc(900px - 3rem);
			width: 100%;
			@media (width > 1100px) {
				font-size: 2.5rem;
			}
		}
	}

	main {
		@include pageMain;
	}
	div {
		margin-bottom: 2rem;
		position: sticky;
		top: 1rem;
		z-index: 2;
	}
</style>
