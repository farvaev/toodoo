<script>
	import { base } from '$app/paths';
	import '../app.css';
</script>

<h1 class="text-red-500 text-lg font-semibold font-serif">toodoo app</h1>

<div>
	<a href="{base}/" class="underline hover:no-underline">home</a>
	<a href="{base}/about" class="underline hover:no-underline">about</a>
</div>

<slot />

<p class="text-sm text-gray-500">
	Powered by <a href="https://kit.svelte.dev">SvelteKit</a>
</p>
