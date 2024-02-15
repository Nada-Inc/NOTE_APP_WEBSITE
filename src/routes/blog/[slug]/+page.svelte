<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBlogById } from '../../../lib/setters';

	const id = $page.params.slug;
	let title = '';
	let created_at = '';
	let blog;
	let fetching = false;

	onMount(async () => {
		try {
			fetching = true;
			let blogById = await getBlogById(id);
			console.log(blogById);
			title = blogById.title;
			created_at = blogById.created_at.slice(0, 10);
			blog = blogById.content;
		} catch (error) {
			console.error(error);
		} finally {
			fetching = false;
		}
	});
</script>

<section class="px-4 md:px-12 lg:px-96">
	{#if fetching}
		<div>Fetching Blogs...</div>
	{:else if title === ''}
		<div class="flex items-center justify-center flex-col">
			<img src="/no_file.webp" alt="No File Found" />
			<div>No Blogs Found For That Id !!</div>
		</div>
	{:else}
		<h1 class="text-2xl font-bold mt-8">
			{title}
		</h1>
		<p class="text-gray-300 text-sm">Blog • {created_at}</p>
		<div class="mt-4 mb-8">{@html blog}</div>
	{/if}
</section>
