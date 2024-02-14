<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
	import Toast from '../../componets/Toast.svelte';
	import { writable } from 'svelte/store';

	let urlAndroid = '';
	let urlWindow = '';
	let toast = writable(null);
	let isLoading = false;

	const updateUrl = async () => {
		try {
			isLoading = true;
			if (urlAndroid.trim() !== '') {
				await supabase
					.from('tbl.urllinks')
					.update({
						url: urlAndroid
					})
					.eq('url_type', 'android')
					.then(() => {
						toast.set({ message: 'Android URL Updated Successfully', type: 'success' });
						setTimeout(() => toast.set(null), 3000);
						urlAndroid = '';
					});
			}

			if (urlWindow.trim() !== '') {
				await supabase
					.from('tbl.urllinks')
					.update({
						url: urlWindow
					})
					.eq('url_type', 'windows')
					.then(() => {
						toast.set({ message: 'Windows URL Updated Successfully', type: 'success' });
						setTimeout(() => toast.set(null), 3000);
						urlWindow = '';
					});
			}
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	};

	let isLoggedIn = false;
	let userName = '';
	let isAdmin = false;
	let admin = import.meta.env.VITE_NOTE_WEB_ADMIN;
	let showEditUrl = false;

	onMount(() => {
		let userDetails = JSON.parse(localStorage.getItem('user') || '{}');

		if (userDetails) {
			isLoggedIn = userDetails.isLoggedIn;
			userName = userDetails.userName;
			if (userDetails.userId === admin) {
				isAdmin = true;
			}
		}
	});

	const handleLogout = () => {
		localStorage.removeItem('user');
	};
</script>

<Toast bind:toastMessage={toast} />
{#if isLoading}
	<div
		class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-2 lg:p-96 md:p-40"
		style="background-color: rgba(0, 0, 0, 0.3);"
	>
		<div
			class="glass-nav p-2 rounded-2xl shadow-md flex flex-row items-center relative justify-center"
		>
			<img src="/radio.svg" alt="loading" class="w-8" />
			Updating URL. Please Wait...
		</div>
	</div>
{/if}
<nav class="glass-nav border-gray-200 sticky top-0 z-40">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>
		<a href="/">Go Back</a>
	</div>
</nav>

{#if isLoggedIn}
	<section class="px-4 md:px-12 lg:px-96">
		<div class="flex flex-col items-center">
			<div class="w-screen flex flex-col items-center mt-8">
				<div class="glass-nav-login absolute h-40 w-screen top-6"></div>
				<div class="w-40 h-40 bg-blue-500 rounded-full"></div>
			</div>
			{#if isLoggedIn}
				<div class="mt-4">Hello, <span class="font-bold text-2xl">{userName}</span></div>
			{/if}
			<div class="text-sm text-gray-400">Last Synced: 18/10/2024</div>
		</div>

		<div class="mt-8 bg-gray-50 p-4 rounded-lg">
			<ul class="flex flex-col gap-2">
				{#if isAdmin}
					<li>
						<button
							on:click={() => {
								showEditUrl = !showEditUrl;
							}}>Url Link Update</button
						>
					</li>
				{/if}
				{#if showEditUrl}
					<div>
						<form action="" class="flex flex-col items-end" on:submit={updateUrl}>
							<input
								type="text"
								name=""
								id="url_android"
								placeholder="Add Android Url Here."
								class="p-2 rounded-lg w-full"
								bind:value={urlAndroid}
							/>
							<input
								type="text"
								name=""
								id="url_windows"
								placeholder="Add Windows Url Here."
								class="p-2 rounded-lg w-full mt-2"
								bind:value={urlWindow}
							/>
							<button class="bg-blue-500 p-2 rounded-xl text-white mt-2" type="submit"
								>Submit</button
							>
						</form>
					</div>
				{/if}
				<li>Account Settings</li>
				<li>Privacy Settings</li>
				<li class="text-red-500">
					<a href="/account" data-sveltekit-reload
						><button on:click={handleLogout}>Logout</button></a
					>
				</li>
			</ul>
		</div>
	</section>
{:else}
	<section class="px-4 md:px-12 lg:px-96">
		<div class="flex flex-col items-center">
			<img src="/404-custom.webp" alt="not logged in" />
			<div>Your're Not Logged In!</div>
			<a href="/auth/login" class="bg-blue-500 p-2 rounded-xl text-white mt-4">Login</a>
		</div>
	</section>
{/if}
