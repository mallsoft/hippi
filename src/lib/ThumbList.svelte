<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let items = [];
</script>

<ul class="listylist">
	{#each items as { text, state, id }}
		<li>
			<div>
				<SubmitHidden
					action="deleteItem"
					hiddenData={{ id }}
					submitText="✖"
					submitTitle="Delete item: {text}"
				/>
			</div>
			<p>{text}</p>
			<div>
				{#each ['👍', '👎'] as emoji}
					<div class:curr={state === emoji}>
						{#if state !== emoji}
							<SubmitHidden
								action="setEmoji"
								hiddenData={{ id, emoji }}
								submitText={emoji}
								submitTitle="Set {emoji} on: {text}"
							/>
						{:else}
							<SubmitHidden
								action="setEmoji"
								hiddenData={{ id, emoji: '' }}
								submitText={emoji}
								submitTitle="Unset {emoji} on: {text}"
							/>
						{/if}
					</div>
				{/each}
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		margin: 1rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			& > p {
				padding: 0.5rem;
				width: 100%;
				line-break: anywhere;
			}

			& > div {
				&:last-of-type {
					display: flex;
					gap: 0.5rem;
					& > div {
						opacity: 0.5;
						filter: grayscale(1);
						transform: scale(0.9);

						&.curr,
						&:hover {
							opacity: 1;
							filter: unset;
							transform: unset;
						}
					}
				}
			}
		}
	}
</style>
