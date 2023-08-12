<script>
	import { enhance } from '$app/forms';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;

</script>

<section>
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
			margin-top: auto;
		}
	}
</style>
