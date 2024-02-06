<script lang="ts">
	import Carousel from '../componets/Carousal.svelte';
	import '../app.css';

	let isMenu: boolean = true;
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

	// $: console.log(isMenu);
</script>

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
						href="#"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
						>About</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ]"
						>Services</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
						>Pricing</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main class="px-4">
	<!-- Hero Section -->
	<section>
		<div
			class="bg-blue-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center md:flex-row"
		>
			<img src="/hero.webp" alt="hero" class="md:w-1/3" />
			<div
				class="flex flex-col items-center justify-center text-center md:text-left md:items-start"
			>
				<h1 class="font-bold font-rubik text-xl md:text-3xl">
					Confused with finding an All In One Note App?
				</h1>
				<p class="font-rubik">We Got You Covered</p>
				<div class="mt-4 flex flex-col justify-center items-center md:items-start">
					<p class="text-sm">Download Our Cross Platform Note App for All your Needs</p>
					<div class="flex flex-row gap-2 mt-4">
						<a
							href="https://onedrive.live.com/download?resid=77CAE4ED2AE118B8%211319&authkey=!AKX29v99Bgb5h88"
							class="bg-black text-white p-2 text-xs rounded-lg flex flex-row items-center justify-center gap-2"
						>
							<img src="/android_logo.png" alt="android logo" width="40px" />
							<div class="flex flex-col text-left">
								<h3 class="text-gray-400">Download For</h3>
								<h2>Android Apk</h2>
							</div>
						</a>
						<a
							href="https://onedrive.live.com/download?resid=77CAE4ED2AE118B8%211318&authkey=!AC6vgG0PGrDNg_A"
							class="bg-black text-white p-2 text-xs rounded-lg flex flex-row items-center justify-center gap-2"
						>
							<img src="/windows_logo.png" alt="android logo" width="25px" />
							<div class="flex flex-col text-left">
								<h3 class="text-gray-400">Download For</h3>
								<h2>Windows</h2>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Feature Section -->
	<section>
		<div
			class="p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-4 md:flex-row"
		>
			<div class="flex flex-col mt-4 items-center">
				<h1 class="font-bold font-rubik text-xl md:text-3xl">All Your Needs In One App</h1>
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
								<h1 class="font-bold">Notes</h1>
								<p class="text-sm">
									Effortlessly take notes and organize your thoughts with our note app's intuitive
									and user-friendly interface.
								</p>
							</div>
						</div>

						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4 mt-2 md:mt-0">
							<div>
								<h1 class="font-bold">Reminder</h1>
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
								<h1 class="font-bold">Expense</h1>
								<p class="text-sm">
									Keep track of your expenses effortlessly with our note app's expense tracking
									feature.
								</p>
							</div>
						</div>

						<div class="bg-gray-50 grid grid-cols-2 w-full p-2 rounded-xl gap-4 mt-2 md:mt-0">
							<div>
								<h1 class="font-bold">Cloud</h1>
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
	<section>
		<div
			class="bg-green-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-8 lg:px-64"
		>
			<div class="lg:grid lg:grid-cols-2">
				<div class="text-center flex flex-col items-center justify-center lg:items-end">
					<h1 class="font-bold font-rubik text-xl md:text-3xl">It's Cross Platform</h1>
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
				<!-- <h1 class="font-bold font-rubik text-xl md:text-3xl">Case Study</h1> -->
				<p class="text-justify mt-4">
					Building a cross platform application is always challenging. Our team embarked on a
					journey to develop a cutting-edge cross platform app that harnesses the power of React
					Native and Tauri/Rust to deliver a seamless cross-platform experience.
				</p>
				<button class="bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 w-full mt-4"
					>Learn More</button
				>
			</div>
		</div>
	</section>
</main>
<footer class="bg-blue-200 text-black">
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
