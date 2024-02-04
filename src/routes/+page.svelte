<script lang="ts">
	import '../app.css';
	let isMenu: boolean = true;

	// $: console.log(isMenu);
</script>

<nav class="glass-nav border-gray-200 dark:bg-gray-900 sticky top-0">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>NoteApp</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
				<!-- class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" -->

				<li>
					<a
						href="#"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>About</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Services</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Pricing</a
					>
				</li>
				<li>
					<a
						href="#"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
						<button
							class="bg-black text-white p-2 text-xs rounded-lg flex flex-row items-center justify-center gap-2"
						>
							<img src="/android_logo.png" alt="android logo" width="40px" />
							<div class="flex flex-col text-left">
								<h3 class="text-gray-400">Download For</h3>
								<h2>Android Apk</h2>
							</div>
						</button>
						<button
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
	<section>
		<div
			class="bg-pink-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-4 md:flex-row"
		>
			<div class="flex flex-col mt-4 items-center">
				<h1 class="font-bold font-rubik text-xl mb-8 md:text-3xl">All Your Needs In One App</h1>

				<div class="flex flex-row gap-2 items-center">
					<div class="bg-orange-500 rounded-full p-4">
						<img src="/icons/note.png" alt="" class="image-icons" />
					</div>
					<div>
						<h1 class="font-bold">Notes</h1>
						<p class="text-sm">Add Notes Like Never Before</p>
					</div>
				</div>

				<div class="flex flex-row gap-2 items-center text-right">
					<div>
						<h1 class="font-bold">Reminder</h1>
						<p class="text-sm">Don't Miss It. Add It in Reminder.</p>
					</div>
					<div class="bg-pink-500 rounded-full p-4">
						<img src="/icons/reminder.png" alt="" class="image-icons" />
					</div>
				</div>

				<div class="flex flex-row gap-2 items-center">
					<div class="bg-green-500 rounded-full p-4">
						<img src="/icons/money-bag.png" alt="" class="image-icons" />
					</div>
					<div>
						<h1 class="font-bold">Expense</h1>
						<p class="text-sm">Track Your Expense Like a Pro</p>
					</div>
				</div>

				<div class="flex flex-row gap-2 items-center text-right">
					<div>
						<h1 class="font-bold">Cloud</h1>
						<p class="text-sm">Never Loose Your Data. Sync with cloud</p>
					</div>
					<div class="bg-blue-500 rounded-full p-4">
						<img src="/icons/message.png" alt="" class="image-icons" />
					</div>
				</div>
			</div>
			<img src="/feature.webp" alt="hero" class="md:w-1/3" />
		</div>
	</section>

	<!-- Tech Stack -->
	<section>
		<div
			class="bg-green-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center mt-4 mb-8"
		>
			Under Maintanence. Stay Tuned!
		</div>
	</section>
</main>
