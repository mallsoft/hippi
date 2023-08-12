<script>
	import { enhance } from '$app/forms';

	const actionName = '?/createItem';

	export let autofocus = true;
</script>

<form use:enhance method="POST" action={actionName} autocomplete="off">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		{autofocus}
		size="2"
		placeholder="Create new item"
		type="text"
		name="text"
		pattern=".+"
		required
	/>
	<input type="submit" value="+" />
</form>

<style lang="scss">
	form {
		@include formNewEntry;
	}
</style>
