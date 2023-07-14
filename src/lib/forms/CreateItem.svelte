<script>
	import { onMount } from 'svelte';

	const actionName = '?/createItem';
	let autofocus = false;

	onMount(() => {
		autofocus = location.search === actionName;
	});
</script>

<form method="POST" action={actionName} autocomplete="off">
	<!-- svelte-ignore a11y: a11y-autofocus -->
	<input autofocus placeholder="Create new item" type="text" name="text" pattern=".+" required />
	<input type="submit" value="+" />
</form>
