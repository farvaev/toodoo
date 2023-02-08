<script lang="ts">
	export let placeholder = '';
	export let value = '';
</script>

<input
	class="border-orange-700 rounded-sm px-1 py-2 border outline-none"
	{placeholder}
	bind:value
/>
