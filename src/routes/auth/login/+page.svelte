<script>
	// @ts-nocheck
	import '../../../app.css';
	import Toast from '../../../componets/Toast.svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let userNameError = false;
	let userPasswordError = false;
	let userName = '';
	let userPassword = '';
	let loginKey = import.meta.env.VITE_NOTE_API;
	let showLoading = false;
	let toast = writable(null);
	let isLoggedIn = false;

	onMount(() => {
		let userDetails = JSON.parse(localStorage.getItem('user'));
		if (userDetails) {
			isLoggedIn = userDetails.isLoggedIn;
		}
	});

	const handleLogin = async () => {
		if (userName === '') {
			userNameError = true;
			return;
		} else if (userPassword === '') {
			userPasswordError = true;
			return;
		}
		try {
			showLoading = true;
			const response = await fetch(`${loginKey}/loginNoteUser`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ userId: userName, password: userPassword })
			});
			const data = await response.json();
			console.log(data);
			if (data.success) {
				localStorage.setItem(
					'user',
					JSON.stringify({ isLoggedIn: true, userId: data.userId, userName: data.userName })
				);
				userName = '';
				userPassword = '';
				goto('/');
			}
		} catch (error) {
			toast.set({ message: `Login Error!! Check Password Or UserName`, type: 'error' });
			setTimeout(() => toast.set(null), 3000);
			console.error(error);
		} finally {
			showLoading = false;
		}
	};
</script>

<Toast bind:toastMessage={toast} />

{#if showLoading}
	<div
		class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-2 lg:p-96 md:p-40"
		style="background-color: rgba(0, 0, 0, 0.3);"
	>
		<div
			class="glass-nav p-2 rounded-2xl shadow-md flex flex-row items-center relative justify-center"
		>
			<img src="/radio.svg" alt="loading" class="w-8" />
			Loging You In. Please Wait...
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
	<div class="px-4 md:px-12 lg:px-96 flex flex-col items-center mt-8">
		<img src="/all_set.webp" alt="all set" class="w-1/2" />
		<div class="text-sm mt-8">Seems Like You're Already Logged In</div>
		<a href="/" class="bg-blue-500 p-2 rounded-xl text-white mt-4">Go To Home</a>
	</div>
{:else}
	<main>
		<section class="px-4 md:px-12 lg:px-96">
			<div class="flex items-center flex-col mt-8">
				<div class="w-screen flex flex-col items-center">
					<div class="glass-nav-login absolute h-40 w-screen top-6"></div>
					<div class="w-40 h-40 bg-blue-500 rounded-full"></div>
				</div>
				<div class="mt-8 flex flex-col items-center w-full">
					<div class="text-xl">Login To Note App</div>
					<form
						action=""
						class="mt-4 flex flex-col items-center gap-2 w-full"
						on:submit={handleLogin}
					>
						<input
							type="text"
							name=""
							id="username"
							placeholder="Enter Your User Name"
							class="bg-gray-50 p-2 rounded-xl w-72"
							bind:value={userName}
							on:change={() => {
								userNameError = false;
							}}
						/>
						{#if userNameError}
							<div class="text-xs text-red-500 w-72 px-2">*User Name is Missing</div>
						{/if}
						<input
							type="password"
							name=""
							id="password"
							placeholder="Enter Password"
							class="bg-gray-50 p-2 rounded-xl w-72"
							bind:value={userPassword}
							on:change={() => {
								userPasswordError = false;
							}}
						/>
						{#if userPasswordError}
							<div class="text-xs text-red-500 w-72 px-2">User Password is Missing</div>
						{/if}
						<button class="bg-blue-500 w-72 p-2 rounded-xl text-white">Login</button>
					</form>
					<div class="mt-4">Forget Password</div>
					<div class="text-sm">
						Don't Have an Account? <span class="text-blue-500"
							><a href="/auth/signup">Sign Up</a></span
						> here
					</div>
				</div>
			</div>
		</section>
	</main>
{/if}
