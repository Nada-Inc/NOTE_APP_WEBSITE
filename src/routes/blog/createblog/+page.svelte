<script lang="ts">
	// @ts-nocheck
	import '../../../app.css';
	import { onMount } from 'svelte';

	import Preview from './Preview.svelte';
	import { setBlogData } from '../setters';
	import Toast from '../../../componets/Toast.svelte';
	import { writable } from 'svelte/store';

	let editor: any;
	let quill;
	let previewContent = '';
	let blogBody = {};
	let title = '';
	let showPreview: false;
	let isLoading = false;
	let toast = writable(null);

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }],
		[{ align: [] }]
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write your awesome blog...'
		});
	});

	const preview = () => {
		previewContent = quill.root.innerHTML;
		let createdDate = new Date();
		let day = createdDate.getDate();
		let month = createdDate.getMonth();
		let year = createdDate.getFullYear();

		let date = `${day}/${month}/${year}`;

		blogBody = { title: title, previewContent: previewContent, createdDate: date };
		showPreview = true;
	};

	const publish = async () => {
		try {
			isLoading = true;
			let content = quill.root.innerHTML;
			let blogContent = {
				title: title,
				content: content,
				is_draft: false,
				is_published: true
			};
			const response = await setBlogData(blogContent);
			if (response.success) {
				toast.set({ message: 'Blog Published Successfully', type: 'success' });
				setTimeout(() => toast.set(null), 3000);
			}
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	};
</script>

<Toast bind:toastMessage={toast} />
<nav class="glass-nav border-gray-200 sticky top-0 z-10">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>

		{#if showPreview}
			<button
				data-sveltekit-reload
				on:click={() => {
					showPreview = !showPreview;
				}}>Exit Preview</button
			>
		{:else}
			<a href="/blog">Go Back</a>
		{/if}
	</div>
</nav>

{#if isLoading}
	<div
		class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-2 lg:p-96 md:p-40"
		style="background-color: rgba(0, 0, 0, 0.3);"
	>
		<div
			class="glass-nav p-2 rounded-2xl shadow-md flex flex-row items-center relative justify-center"
		>
			<img src="/radio.svg" alt="loading" class="w-8" />
			Publishing Your Blog. Please Wait...
		</div>
	</div>
{/if}

<section class="px-4 md:px-12 lg:px-96">
	{#if showPreview}
		<Preview bind:blogBody />
	{/if}
	<div style={showPreview ? 'display:none;' : ''}>
		<div class="mb-2 w-full flex gap-1 justify-between">
			<input
				type="text"
				placeholder="Add a Blog Title"
				class="bg-gray-100 p-1 rounded-lg outline-none border-none w-1/2"
				bind:value={title}
			/>
			<div>
				<button class="bg-blue-500 text-white p-1 rounded-lg text-sm" on:click={preview}
					>Preview</button
				>
				<button class="bg-blue-500 text-white p-1 rounded-lg text-sm">Draft</button>
				<button class="bg-blue-500 text-white p-1 rounded-lg text-sm" on:click={publish}
					>Publish</button
				>
			</div>
		</div>

		<div class="editor-wrapper h-96">
			<div bind:this={editor} />
		</div>
	</div>
</section>

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
