<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<article>
	<div>
		<SubmitHidden
			action="forgetList"
			hiddenData={{ id: data.list.id }}
			submitText="Forget"
			submitTitle="Forget list: {data.list.title}"
		/>
		<h2>Edit List - <span>{data.list.title}</span></h2>
	</div>
	<div>
		<form method="POST" action="?/updateListName" autocomplete="off">
			<input
				value={data.list.title}
				size="2"
				placeholder="Create new list"
				type="text"
				name="title"
				pattern=".+"
				required
			/>
			<input type="submit" value="Save" />
		</form>
	</div>
</article>

<style lang="scss">
	form {
		@include formNewEntry;
	}

	article {
		@include modal;
	}
</style>
