<script>
	import { enhance } from '$app/forms';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<section>
	<h2>List item</h2>
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
		@include modalSection;

		h2 {
			font-size: 1.75rem;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		div {
			margin-top: auto;
		}
	}
</style>
