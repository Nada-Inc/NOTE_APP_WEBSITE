<script lang="ts">
	// @ts-nocheck
	import '../../../app.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Preview from './Preview.svelte';
	import { setBlogData } from '../../../lib/setters';
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
	let titleError = false;
	let isAdmin = false;
	let admin = import.meta.env.VITE_NOTE_WEB_ADMIN;

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }],
		[{ align: [] }]
	];

	onMount(async () => {
		console.warn(
			'DOMNodeInserted warning will be fixed with quill.js version 2.0.0 in March 1st 2024. https://github.com/quilljs/quill/issues/3806'
		);

		const { default: Quill } = await import('quill');

		let userDetails = JSON.parse(localStorage.getItem('user') || '{}');

		if (userDetails.userId === admin) {
			isAdmin = true;
		}

		function imageHandler() {
			let fileInput = this.container.querySelector('input.ql-image[type=file]');
			if (fileInput == null) {
				fileInput = document.createElement('input');
				fileInput.setAttribute('type', 'file');
				fileInput.setAttribute(
					'accept',
					'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
					'image/webp'
				);
				fileInput.classList.add('ql-image');
				fileInput.addEventListener('change', () => {
					const files = fileInput.files;
					const file = files[0];
					if (file == null || file.size > 1024 * 1024) {
						toast.set({ message: 'Image Size is limited to 1 mb', type: 'error' });
						setTimeout(() => toast.set(null), 3000);
					} else {
						const reader = new FileReader();
						reader.onload = (e) => {
							const range = this.quill.getSelection(true);
							this.quill.insertEmbed(range.index, 'image', e.target.result);
						};
						reader.readAsDataURL(file);
					}
					fileInput.value = '';
				});
				this.container.appendChild(fileInput);
			}
			fileInput.click();
		}

		quill = new Quill(editor, {
			modules: {
				toolbar: {
					container: toolbarOptions,
					handlers: {
						image: imageHandler
					}
				}
			},
			theme: 'snow',
			placeholder: 'Write your awesome blog...'
		});
	});

	const preview = () => {
		if (title === '') {
			titleError = true;
			return;
		}
		previewContent = quill.root.innerHTML;
		if (previewContent === '<p><br></p>') {
			toast.set({ message: 'Write Something To Show in Preview', type: 'error' });
			setTimeout(() => toast.set(null), 1000);
			return;
		}
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
				goto('/blog');
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

<section class="px-4 md:px-12 lg:px-96" style={isAdmin ? '' : 'display:none'}>
	{#if showPreview}
		<Preview bind:blogBody />
	{/if}
	<div style={showPreview ? 'display:none;' : ''}>
		<div class="w-full flex gap-1 justify-between">
			<input
				type="text"
				placeholder="Add a Blog Title"
				class="bg-gray-100 p-1 rounded-lg outline-none border-none w-1/2"
				bind:value={title}
				on:input={() => {
					titleError = false;
				}}
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

		{#if titleError}
			<span class="text-sm text-red-500">*Blog Title Is Missing</span>
		{/if}

		<div class="editor-wrapper h-[75vh] mt-2">
			<div bind:this={editor} />
		</div>
	</div>
</section>

<section class="px-4 md:px-12 lg:px-96" style={isAdmin ? 'display:none' : ''}>
	<div class="flex flex-col items-center">
		<img src="/404-custom.webp" alt="404 error" class="md:w-1/2" />
		<div class="text-center text-gray-400">
			Ayyo!!.. It seems what you're looking for is not in our server
		</div>
		<a class="mt-4 bg-blue-500 p-2 rounded-xl text-white" href="/">Go Back To Home</a>
	</div>
</section>

<style>
	@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
</style>
