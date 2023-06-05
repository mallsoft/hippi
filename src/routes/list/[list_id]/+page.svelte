<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';

	export let data;
</script>

<title>{data.list?.title}</title>

<article>
	<h1>
		<a href="/">{data.list?.title}</a>
	</h1>

	<form method="POST" action="?/createItem" autocomplete="off">
		<input placeholder="Create new item" type="text" name="text" pattern=".+" required />
		<input type="submit" value="+" />
	</form>

	<ul class="listylist">
		{#each data.list?.items as { text, state, id }}
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
</article>

<style lang="scss">
	article {
		h1 {
			font-size: 6rem;
		}
		width: 100%;
		max-width: $block-width;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	form {
		input {
			padding: 0.5rem;
			background-color: $color-paper-secondary;
			color: $color-pen-secondary;
		}
	}

	ul {
		margin: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;

			& > * {
				padding: 0.5rem;
			}

			& > p {
				width: 100%;
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
