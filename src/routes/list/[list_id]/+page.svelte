<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		/** @type {HTMLElement | null} */
		const to_focus = document.querySelector("[action='?/createItem'] > [type='text']");
		to_focus?.focus();
	});
</script>

<!-- 
  loading the page in layout instead,
  this allows "fake modal" with the relevant page as context
-->
