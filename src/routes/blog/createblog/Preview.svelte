<script lang="ts">
	import { writable } from 'svelte/store';

	export let blogBody: any = writable({});
</script>

<h1 class="text-2xl font-bold mt-8">
	{blogBody.title}
</h1>
<p class="text-gray-300 text-sm">Blog • {blogBody.createdDate}</p>
<div class="mt-4 img-parent">{@html blogBody.previewContent}</div>

<style>
	.img-parent img {
		border-radius: 1rem;
	}
</style>
