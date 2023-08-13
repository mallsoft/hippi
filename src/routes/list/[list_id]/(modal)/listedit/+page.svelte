<script>
	import { enhance } from '$app/forms';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<section>
	<h2>List</h2>

	<form use:enhance method="POST" action="?/updateListName" autocomplete="off">
		<input
			value={data.list.title}
			size="2"
			placeholder="Create new list"
			type="text"
			name="title"
			pattern=".+"
			required
		/>
		<input type="submit" value="save" />
	</form>

	<div>
		<SubmitHidden
			action="forgetList"
			hiddenData={{ id: data.list.id }}
			submitText="Forget list"
			submitTitle="Forget list: {data.list.title}"
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
