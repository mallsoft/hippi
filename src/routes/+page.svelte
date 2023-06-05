<script>
	export let data;
	let known = data.known;
</script>

<title>Chippi</title>

<article>
	<form method="POST" action="?/createList" autocomplete="off">
		<input placeholder="Create new list" type="text" name="title" pattern=".+" required />
		<input type="submit" value="+" />
	</form>

	{#if known.length}
		<ul class="listylist">
			{#each known as { title, id }}
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

	form {
		input {
			padding: 0.5rem;
			background-color: $color-paper-secondary;
			color: $color-pen-secondary;
		}
	}

	li a {
		font-size: 6rem;
	}
</style>
