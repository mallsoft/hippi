<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<article>
	<h2>Edit list item</h2>

	<section>
		<SubmitHidden
			action="deleteItem"
			hiddenData={{ id: data.item.id }}
			submitText="Delete"
			submitTitle="Delete item: {data.item.text}"
		/>
		<h3>{data.item.text}</h3>
	</section>
	<section>
		<h3>Update item name</h3>
		<form method="POST" action="?/updateItemText" autocomplete="off">
			<input
				value={data.item.text}
				size="2"
				placeholder="Create new list"
				type="text"
				name="text"
				pattern=".+"
				required
			/>
			<input type="submit" value="Save" />
		</form>
	</section>
</article>

<style lang="scss">
	form {
		@include formNewEntry;
	}

	article {
		@include modal;
	}
</style>
