<script>
	import { page } from '$app/stores';
	import { flip } from 'svelte/animate';
	import { backOut } from 'svelte/easing';
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let items = [];
</script>

<ul>
	{#each items as { text, state, id } (id)}
		<li animate:flip={{ delay: 150, duration: 250, easing: backOut }}>
			<a href="/list/{$page.params.list_id}/{id}" title="edit list entry">
				{text}
			</a>

			<div>
				{#each ['👍', '👎'] as emoji}
					<div class:curr={state === emoji}>
						{#if state !== emoji}
							<SubmitHidden
								square
								action="setEmoji"
								hiddenData={{ id, emoji }}
								submitText={emoji}
								submitTitle="Set {emoji} on: {text}"
							/>
						{:else}
							<SubmitHidden
								square
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

			background-color: $color-paper-primary;
			border-radius: 4px;

			& > a {
				flex-grow: 1;
				overflow-wrap: anywhere;
			}

			& > div:last-of-type {
				height: max-content;
				display: flex;

				& > div {
					transition: filter $transition-speed-in;
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
