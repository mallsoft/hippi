<script>
	import { enhance } from '$app/forms';
	export let method = 'POST';
	export let action;
	export let hiddenData;
	export let submitText;
	export let submitTitle = null;
</script>

<form use:enhance {method} action="?/{action}">
	{#each Object.entries(hiddenData) as [key, value]}
		<input type="hidden" name={key} {value} />
	{/each}
	<input type="submit" value={submitText} title={submitTitle} />
</form>

<style lang="scss">
	form {
		display: contents;

		input[type='submit'] {
			font-size: 2rem;
			aspect-ratio: 1;
			line-height: 0;

			transition: transform $transition-speed-out $easing-jello;
			transform-origin: center;
			transform: scale(0.7);

			&:is(:hover, :focus) {
				transition: transform $transition-speed-in $easing-jello;
				transform: unset;
			}
		}
	}
</style>
