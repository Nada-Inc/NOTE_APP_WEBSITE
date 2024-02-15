<script lang="ts">
	import { onMount } from 'svelte';
	import { getBlogs } from './setters';

	let blogs: any = [];
	let fetching = false;

	onMount(async () => {
		try {
			fetching = true;
			const fetchedBlogs = await getBlogs();
			blogs = fetchedBlogs;
		} catch (error) {
			console.log(error);
		} finally {
			fetching = false;
		}
	});
</script>

<nav class="glass-nav border-gray-200 sticky top-0 z-10">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>

		<a href="/">Go Back</a>
	</div>
</nav>

<section class="px-4 md:px-12 lg:px-96">
	<div class="flex justify-between">
		<div>Your Blogs</div>
		<a href="/blog/createblog" class="bg-blue-500 p-1 rounded-lg text-white">Add New</a>
	</div>

	{#if blogs.length === 0 && !fetching}
		<div class="text-center flex items-center justify-center h-96">No Blogs Found</div>
	{/if}

	{#if fetching}
		<div class="">Fetching Blogs...</div>
	{:else}
		<div class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
			{#each blogs as item (item.id)}
				<div class="bg-blue-200 p-2 rounded-lg">
					<div class="font-bold">{item.title}</div>
					<div class="text-sm text-gray-400">
						Status:
						{#if item.is_published}
							Published
						{:else if item.is_draft}
							In Draft
						{/if}
						<div>Created Date: {item.created_at.slice(0, 10)}</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
