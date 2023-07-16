<script>
	import CreateList from '$lib/forms/CreateList.svelte';

	export let data;
</script>

<svelte:head>
	<title>Chippi</title>
</svelte:head>

<main>
	<img src="/favicon.svg" alt="" />
	<CreateList />
	{#if data.known?.length}
		<ul class="listylist">
			{#each data.known as { title, id }}
				<li><a href="/list/{id}">{title}</a></li>
			{/each}
		</ul>
	{/if}
</main>

<style lang="scss">
	main {
		@include baseMain;
	}

	li a {
		font-size: 4rem;
	}

	img {
		height: 2rem;
	}
</style>
