<script lang="ts">
	// @ts-nocheck
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getBlogById } from '../setters';

	const id = $page.params.slug;
	let title = '';
	let created_at = '';
	let blog;

	onMount(async () => {
		try {
			let blogById = await getBlogById(id);
			title = blogById.title;
			created_at = blogById.created_at.slice(0, 10);
			blog = blogById.content;
		} catch (error) {}
	});
</script>

<section class="px-4 md:px-12 lg:px-96">
	<h1 class="text-2xl font-bold mt-8">
		{title}
	</h1>
	<p class="text-gray-300 text-sm">Blog • {created_at}</p>
	<div class="mt-4 mb-8">{@html blog}</div>
</section>
