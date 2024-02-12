<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import { goto } from '$app/navigation';

	let isLoggedIn = false;
	let userName = '';

	onMount(() => {
		let userDetails = JSON.parse(localStorage.getItem('user') || '{}');
		if (userDetails) {
			isLoggedIn = userDetails.isLoggedIn;
			userName = userDetails.userName;
		}
	});

	const handleLogout = () => {
		localStorage.removeItem('user');
	};
</script>

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
				<li>Account Settings</li>
				<li>Privacy Settings</li>
				<li class="text-red-500">
					<a href="/" data-sveltekit-reload><button on:click={handleLogout}>Logout</button></a>
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
