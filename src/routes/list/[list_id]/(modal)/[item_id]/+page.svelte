<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<section>
	<div>
		<SubmitHidden
			action="deleteItem"
			hiddenData={{ id: data.item.id }}
			submitText="Delete"
			submitTitle="Delete item: {data.item.text}"
		/>
		<h2>List item - <span>{data.item.text}</span></h2>
	</div>
	<div>
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
	</div>
</section>

<style lang="scss">
	form {
		@include formNewEntry;
	}

	section {
		@include modal;
	}
</style>
