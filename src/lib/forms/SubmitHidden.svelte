<script>
	export let method = 'POST';
	export let action;
	export let hiddenData;
	export let submitText;
	export let submitTitle = null;
</script>

<form {method} action="?/{action}">
	{#each Object.entries(hiddenData) as [key, value]}
		<input type="hidden" name={key} {value} />
	{/each}
	<input type="submit" value={submitText} title={submitTitle} />
</form>

<style lang="scss">
	form {
		display: contents;

		input[type='submit'] {
			display: flex;
			align-items: center;
			justify-content: center;
			aspect-ratio: 1;
			line-height: 0;
		}
	}
</style>
