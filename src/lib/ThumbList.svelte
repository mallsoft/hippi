<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let items = [];
</script>

<ul class="listylist">
	{#each items as { text, state, id } (id)}
		<li>
			<div>
				<SubmitHidden
					action="deleteItem"
					hiddenData={{ id }}
					submitText="⨯"
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
			justify-content: space-between;
			gap: 0.5rem;

			& > p {
				flex-grow: 1;
				overflow-wrap: anywhere;
			}

			& > div:last-of-type {
				height: max-content;
				display: flex;

				& > div {
					filter: grayscale(0.6) opacity(0.6);

					&.curr {
						filter: unset;
					}
				}
			}

			//
		}
		//
	}
</style>
