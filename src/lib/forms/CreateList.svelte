<script>
	import { enhance } from '$app/forms';
</script>

<form use:enhance method="POST" action="?/createList" autocomplete="off">
	<!-- <select name="type">
		<option selected value="thumbs">👍👎</option>
	</select> -->
	<input size="2" placeholder="Create new list" type="text" name="title" pattern=".+" required />
	<input type="submit" value="+" />
</form>

<style lang="scss">
	form {
		@include formNewEntry;
	}
</style>
