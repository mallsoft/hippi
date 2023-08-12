<script>
	import { enhance } from '$app/forms';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<section>
	<h1>{data.item.text}</h1>
	<form use:enhance method="POST" action="?/updateItemText" autocomplete="off">
		<input
			value={data.item.text}
			size="2"
			placeholder="Create new list"
			type="text"
			name="text"
			pattern=".+"
			required
		/>
		<input type="submit" value="update" />
	</form>

	<div>
		<SubmitHidden
			action="deleteItem"
			hiddenData={{ id: data.item.id }}
			submitText="Delete entry"
			submitTitle="Delete item: {data.item.text}"
		/>
	</div>
</section>

<style lang="scss">
	form {
		@include formNewEntry;
	}

	section {
		h1 {
			font-size: 1.75rem;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		background-color: $color-pen-secondary;
		color: $color-paper-secondary;

		border-radius: 4px;
		box-shadow: 0.5rem 0.5rem 1rem -0.2rem rgba(0, 0, 0, 0.2);

		padding: 1rem;
		max-width: 600px;
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 200px;

		div {
			margin-top: 2rem;
		}
	}
</style>
