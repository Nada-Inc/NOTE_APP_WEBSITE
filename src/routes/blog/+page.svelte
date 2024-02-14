<script lang="ts">
	import { onMount } from 'svelte';
	import { getBlogs } from './setters';

	let blogs: any = [];

	onMount(async () => {
		const fetchedBlogs = await getBlogs();
		console.log(fetchedBlogs);

		blogs = fetchedBlogs;
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

	{#if blogs.length === 0}
		<div class="text-center flex items-center justify-center h-96">No Blogs Found</div>
	{/if}

	<div class="mt-4">
		{#each blogs as item (item.id)}
			<div>{item.title}</div>
		{/each}
	</div>
</section>
