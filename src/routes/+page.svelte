<script lang="ts">
	// @ts-nocheck
	import Carousel from '../componets/Carousal.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Toast from '../componets/Toast.svelte';
	import { writable } from 'svelte/store';
	import { supabase } from '$lib/supabase';

	let toast = writable(null);
	let name = '';
	let email = '';
	let apiKey = import.meta.env.VITE_API_KEY;
	let visitCount = 0;
	let showPopup = false;
	let showLoading = false;
	let isMenu: boolean = true;
	let isLoggedIn = false;
	let userName = '';
	let url = null;
	let isAdmin = false;
	let admin = import.meta.env.VITE_NOTE_WEB_ADMIN;

	const fetchUrl = async (type) => {
		try {
			let { data, error } = await supabase.from('tbl.urllinks').select('*');
			if (error) throw error;
			data?.map((item) => {
				if (item.url_type === type) {
					url = item.url;
				}
			});

			return url;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};

	const downloadFile = (type) => {
		fetchUrl(type).then(() => {
			if (url) {
				const link = document.createElement('a');
				link.href = url;
				link.download = 'noteapp';
				link.click();
			}
		});
	};

	onMount(() => {
		const visitCountNumber = parseInt(localStorage.getItem('vCount') || '0');
		const lastVisitTime = parseInt(localStorage.getItem('lastVisitTime') || '0');
		const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

		let userDetails = JSON.parse(localStorage.getItem('user'));

		if (userDetails) {
			isLoggedIn = userDetails.isLoggedIn;
			userName = userDetails.userName;
			if (userDetails.userId === admin) {
				isAdmin = true;
			}
		}

		if (new Date().getTime() - lastVisitTime > expirationTime) {
			visitCount = 1;
			localStorage.setItem('lastVisitTime', new Date().getTime().toString());
		} else {
			visitCount = visitCountNumber + 1;
		}

		localStorage.setItem('vCount', visitCount.toString());
	});

	$: showPopup = visitCount === 4 || visitCount === 8 || visitCount === 12 || visitCount === 20;

	function handleAnchorClick(event: any) {
		event.preventDefault();
		isMenu = !isMenu;
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor: any = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}

	const updateState = () => {
		showPopup = !showPopup;
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (name === '' || email === '') {
			toast.set({ message: 'Email or Name is Missing', type: 'error' });
			setTimeout(() => toast.set(null), 3000);
			return;
		} else {
			showLoading = true;
			try {
				const response = await fetch(`${apiKey}/submit-form`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ name, email })
				});
				if (response.ok) {
					toast.set({ message: 'Thanks For Your Feedback', type: 'success' });
					setTimeout(() => toast.set(null), 3000);
					name = '';
					email = '';
				}
			} catch (error) {
				toast.set({ message: `Oops!! Error Occured. Check Your Email Address`, type: 'error' });
				setTimeout(() => toast.set(null), 3000);
			} finally {
				showLoading = false;
			}
		}
	};
</script>

<Toast bind:toastMessage={toast} />

<nav class="glass-nav border-gray-200 sticky top-0">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap">NoteApp</span>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			aria-controls="navbar-default"
			aria-expanded="false"
			on:click={() => (isMenu = !isMenu)}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default" class:hidden={isMenu}>
			<ul class="font-medium flex flex-col p-4 md:flex-row md:p-0 md:space-x-8">
				<li>
					<a
						on:click={() => handleAnchorClick}
						href="/"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						on:click={() => (isMenu = !isMenu)}
						href="#about"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
						>About</a
					>
				</li>
				<li>
					<a
						on:click={() => (isMenu = !isMenu)}
						href="#combatibility"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ]"
						>Compatibility</a
					>
				</li>
				<li>
					<a
						on:click={() => (isMenu = !isMenu)}
						href="#contact"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
						>Contact</a
					>
				</li>
				<li>
					{#if isLoggedIn}
						<a
							href="/account"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
							>Hey, {userName}</a
						>
					{:else}
						<a
							on:click={() => (isMenu = !isMenu)}
							href="/auth/login"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
							>Login</a
						>
					{/if}
					{#if isAdmin}
						<a
							on:click={() => (isMenu = !isMenu)}
							href="/blog"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
							>Write Blog</a
						>
					{/if}
				</li>
			</ul>
		</div>
	</div>
</nav>

<main class="px-4">
	{#if showPopup}
		<div
			class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-2 lg:p-96 md:p-40"
		>
			<div
				class="bg-yellow-200 p-8 rounded-2xl shadow-md flex flex-col items-center relative justify-center"
			>
				<button
					class="absolute top-4 right-5 bg-red-500 rounded-full text-white h-6 w-6"
					on:click={() => {
						updateState();
					}}>x</button
				>
				<img src="/welcome-back.webp" alt="" class="object-contain mb-4 lg:w-1/2" />
				<p>Hey, Seems Like You're Not New Here!</p>
				<p class="text-sm">Enjoying our service? Let Us Know</p>
				<div class="mt-2 gap-2">
					<button class="bg-blue-300 p-2 rounded-lg">FeedBack</button>
					<button>Contribute</button>
				</div>
			</div>
		</div>
	{/if}

	{#if showLoading}
		<div
			class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-2 lg:p-96 md:p-40"
			style="background-color: rgba(0, 0, 0, 0.3);"
		>
			<div
				class="glass-nav p-2 rounded-2xl shadow-md flex flex-row items-center relative justify-center"
			>
				<img src="/radio.svg" alt="loading" class="w-8" />
				Sending Feedback. Please Wait...
			</div>
		</div>
	{/if}

	<!-- Hero Section -->
	<section>
		<div
			class="bg-blue-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center md:flex-row"
		>
			<img src="/hero.webp" alt="hero" class="md:w-1/3" />
			<div
				class="flex flex-col items-center justify-center text-center md:text-left md:items-start"
			>
				<div class="font-bold font-rubik text-xl md:text-3xl">
					Confused with finding an All In One Note App?
				</div>
				<p class="font-rubik">We Got You Covered</p>
				<div class="mt-4 flex flex-col justify-center items-center md:items-start">
					<p class="text-sm">Download Our Cross Platform Note App for All your Needs</p>
					<div class="flex flex-row gap-2 mt-4">
						<button
							on:click={() => {
								downloadFile('android');
							}}
							class="bg-black text-white p-2 text-xs rounded-lg flex flex-row items-center justify-center gap-2"
						>
							<img src="/android_logo.png" alt="android logo" width="40px" />
							<div class="flex flex-col text-left">
								<h3 class="text-gray-400">Download For</h3>
								<h2>Android Apk</h2>
							</div>
						</button>
						<button
							on:click={() => {
								downloadFile('windows');
							}}
							class="bg-black text-white p-2 text-xs rounded-lg flex flex-row items-center justify-center gap-2"
						>
							<img src="/windows_logo.png" alt="android logo" width="25px" />
							<div class="flex flex-col text-left">
								<h3 class="text-gray-400">Download For</h3>
								<h2>Windows</h2>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Feature Section -->
	<section id="about">
		<div
			class="p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-4 md:flex-row"
		>
			<div class="flex flex-col mt-4 items-center">
				<div class="font-bold font-rubik text-xl md:text-3xl">All Your Needs In One App</div>
				<p>Note App Is More Than Just a Note App</p>

				<div class="flex flex-col gap-4 mt-4 w-full md:grid lg:grid-cols-2">
					<div class="flex items-center h-full">
						<img
							src="features-note.webp"
							alt="featues note"
							class="rounded-2xl h-full object-cover"
						/>
					</div>

					<div class="md:grid md:grid-cols-2 md:gap-4">
						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4">
							<div>
								<div class="bg-blue-500 rounded-lg p-4 h-full items-center flex justify-center">
									<img src="/icons/note.png" alt="" class="image-icons" />
								</div>
							</div>
							<div>
								<div class="font-bold">Notes</div>
								<p class="text-sm">
									Effortlessly take notes and organize your thoughts with our note app's intuitive
									and user-friendly interface.
								</p>
							</div>
						</div>

						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4 mt-2 md:mt-0">
							<div>
								<div class="font-bold">Reminder</div>
								<p class="text-sm">
									Never miss a deadline or forget an important task with our note app's reminder
									feature.
								</p>
							</div>
							<div>
								<div class="bg-orange-500 rounded-lg p-4 h-full items-center flex justify-center">
									<img src="/icons/reminder.png" alt="" class="image-icons" />
								</div>
							</div>
						</div>

						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4 mt-2 md:mt-0">
							<div>
								<div class="bg-green-500 rounded-lg p-4 h-full items-center flex justify-center">
									<img src="/icons/money-bag.png" alt="" class="image-icons" />
								</div>
							</div>
							<div>
								<div class="font-bold">Expense</div>
								<p class="text-sm">
									Keep track of your expenses effortlessly with our note app's expense tracking
									feature.
								</p>
							</div>
						</div>

						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4 mt-2 md:mt-0">
							<div>
								<div class="font-bold">Cloud</div>
								<p class="text-sm">
									Access your notes and data from anywhere, anytime with our note app's cloud sync
									feature.
								</p>
							</div>
							<div>
								<div class="bg-violet-500 rounded-lg p-4 h-full items-center flex justify-center">
									<img src="/icons/message.png" alt="" class="image-icons" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tech Stack -->
	<section id="combatibility">
		<div
			class="bg-green-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-8 lg:px-64"
		>
			<div class="lg:grid lg:grid-cols-2">
				<div class="text-center flex flex-col items-center justify-center lg:items-end">
					<div class="font-bold font-rubik text-xl md:text-3xl">It's Cross Platform</div>
					<p class="text-center md:text-right">
						No Matter What Device You're Using, NoteApp Can Run On Multiple Devices of Your Choice.
					</p>
				</div>
				<div class="flex items-center justify-center">
					<img src="/allinone.png" alt="" class="lg:w-96" />
				</div>
			</div>
		</div>
	</section>

	<section>
		<div
			class="p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-8 md:grid md:grid-cols-2 lg:px-52"
		>
			<Carousel autoplay="2000">
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center">
					<img src="/logos/react-native-logo.webp" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/tauri.svg" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/sqlite.png" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/nextjs-icon.webp" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/planetscale.jpg" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/tailwind.png" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/rust.png" alt="" class="image-class" />
				</div>
				<div class="bg-white p-2 rounded-2xl flex items-center justify-center mr-2">
					<img src="/logos/svelte.webp" alt="" class="image-class" />
				</div>
			</Carousel>
			<div class="flex flex-col items-center md:items-start mt-4">
				<!-- <div class="font-bold font-rubik text-xl md:text-3xl">Case Study</div> -->
				<p class="text-justify mt-4">
					Building a cross platform application is always challenging. Our team embarked on a
					journey to develop a cutting-edge cross platform app that harnesses the power of React
					Native and Tauri/Rust to deliver a seamless cross-platform experience.
				</p>
				<a
					href="/case-study"
					class="bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 w-full mt-4 text-center"
					>Learn More</a
				>
			</div>
		</div>
	</section>

	<section id="contact">
		<div
			class="bg-violet-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center md:flex-row mb-4"
		>
			<div class="w-full lg:grid lg:grid-cols-2 lg:p-8">
				<div class="flex items-center justify-center">
					<img src="/chat.webp" alt="hero" class="md:w-1/2" />
				</div>

				<div
					class="flex flex-col items-center justify-center text-center lg:text-left md:items-center w-full"
				>
					<div class="font-bold font-rubik text-xl md:text-3xl">Send Your Thoughts</div>
					<p class="font-rubik">We Love To Hear From You</p>
					<div class="mt-4 md:items-start w-full">
						<form action="" class="flex flex-col gap-2" on:submit={handleSubmit}>
							<input
								type="text"
								class="rounded-xl p-2 outline-none text-sm w-full"
								placeholder="Enter Your Name"
								bind:value={name}
							/>
							<input
								type="text"
								class="rounded-xl p-2 outline-none text-sm w-full"
								placeholder="Enter Your Email"
								bind:value={email}
							/>
							<textarea
								class="rounded-xl p-2 outline-none text-sm w-full"
								placeholder="Enter Your Thoughts"
								rows="5"
							/>
							<div
								class="cf-turnstile"
								data-sitekey="0x4AAAAAAAReL0DBgTwt86Y-"
								data-theme="light"
							></div>
							<button
								class="bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 w-full"
								type="submit">Send</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
<footer class=" text-black">
	<div class="p-8 grid grid-cols-2 md:grid-cols-none md:flex md:flex-col md:items-center">
		<ul class="md:flex gap-2">
			<li>About</li>
			<li>Company</li>
			<li>Bug Report</li>
		</ul>
		<ul class="flex flex-col items-end md:flex-row md:gap-2">
			<li class="flex gap-2">
				Source Code
				<img src="/github.svg" alt="github logo" />
			</li>
			<li class="flex gap-2">
				Facebook
				<img src="/fb.svg" alt="github logo" />
			</li>
			<li class="flex gap-2">
				Instagram
				<img src="/insta.svg" alt="insta logo" />
			</li>
		</ul>
	</div>
	<div class="text-center p-2 text-sm text-gray-600">All Rights Reserved NADA LABS © 2024</div>
</footer>
