<script>
	import SubmitHidden from '$lib/forms/SubmitHidden.svelte';
	export let data;
</script>

<article>
	<h2>Edit list</h2>
	<section>
		<SubmitHidden
			action="forgetList"
			hiddenData={{}}
			submitText="Forget"
			submitTitle="Forget list: {data.list.title}"
		/>
		<h3>{data.list.title}</h3>
	</section>
	<section>
		<h3>Update list name</h3>
		<form method="POST" action="?/updateListName" autocomplete="off">
			<input
				value={data.list.title}
				size="2"
				placeholder="Create new list"
				type="text"
				name="title"
				pattern=".+"
				required
			/>
			<input type="submit" value="Save" />
		</form>
	</section>
	<section>
		<h3>
			Delete list <b>"{data.list.title}"</b> is non reversible.
		</h3>
		<form method="POST" action="?/kthxBye" autocomplete="off">
			<input
				placeholder="Name of list to delete"
				type="text"
				name="title"
				pattern={data.list.title}
				required
			/>
			<input type="submit" value="Delete" />
		</form>
	</section>
</article>

<style lang="scss">
	form {
		@include formNewEntry;
	}

	article {
		@include modal;

		section {
			@include modalCell;
			&:nth-of-type(1) {
				margin-right: auto;
				max-width: 100%;
				align-items: center;
				flex-direction: row;
				h3 {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					color: $color-pen-primary;
				}
			}
			&:nth-of-type(3) {
				margin-top: 2rem;
				h3 > b {
					color: $color-pen-primary;
				}

				input[type='submit'] {
					display: none;
					background-color: $color-danger;
				}
				input[type='text']:valid ~ input[type='submit'] {
					display: initial;
				}
			}

			//
		}
	}
</style>
