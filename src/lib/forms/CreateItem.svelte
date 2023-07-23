<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	const actionName = '?/createItem';
	let autofocus = false;

	onMount(() => {
		autofocus = location.search === actionName;
	});
</script>

<form use:enhance method="POST" action={actionName} autocomplete="off">
	<!-- svelte-ignore a11y: a11y-autofocus -->
	<input
		size="2"
		autofocus
		placeholder="Create new item"
		type="text"
		name="text"
		pattern=".+"
		required
	/>
	<input type="submit" value="+" />
</form>

<style lang="scss">
	@include formNewEntry;
</style>
