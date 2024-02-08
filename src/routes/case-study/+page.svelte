<script lang="ts">
	import '../../app.css';
</script>

<nav class="glass-nav border-gray-200 sticky top-0">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>

		<a href="/">Go Back</a>
	</div>
</nav>
<main>
	<section class="px-4 md:px-12 lg:px-96">
		<div>
			<h1 class="text-2xl font-bold mt-8">
				Leveraging React Native and Tauri/Rust for Cross-Platform Note-taking Applications
			</h1>
			<p class="text-gray-300 text-sm">case study • 08/02/2024</p>
			<div>
				<img src="/blog-1.webp" alt="blog" class="rounded-2xl mt-4" />
			</div>
			<p class="mt-4">
				In today's digital age, the demand for efficient and user-friendly note-taking applications
				is on the rise. To meet this demand, our team embarked on a journey to develop a
				cutting-edge note-taking app that harnesses the power of React Native and Tauri/Rust to
				deliver a seamless cross-platform experience.
			</p>
			<p class="mt-8 font-bold">Challenges</p>
			<ul class="mt-2">
				<li>
					<span class="font-bold">Cross-Platform Compatibility:</span> One of the key challenges we faced
					was ensuring that our app could run seamlessly on both iOS and Android devices without compromising
					performance or user experience.
				</li>
				<li>
					<span class="font-bold">Native Functionality:</span> We needed to integrate native functionalities
					such as camera access, file storage, and push notifications into our app to provide a comprehensive
					note-taking experience.
				</li>
				<li>
					<span class="font-bold">Security:</span> As our app deals with sensitive user data, ensuring
					robust security measures was paramount to protect user privacy and data integrity..
				</li>
			</ul>

			<div class="grid grid-cols-2 mt-4">
				<div class="flex items-center justify-center">
					<img src="/logos/react-native-logo.webp" alt="native logo" />
				</div>
				<div class="flex items-center justify-center">
					<img src="/logos/tauri.svg" alt="tauri logo" class="w-1/2" />
				</div>
			</div>

			<p class="mt-8 font-bold">Solution</p>
			<ul class="mt-2">
				<li>
					<span class="font-bold">Cross-Platform Compatibility:</span> By using React Native, we were
					able to develop a single codebase that could be easily deployed to both iOS and Android platforms,
					saving time and resources.
				</li>
				<li>
					<span class="font-bold">Native Functionality:</span> React Native allowed us to seamlessly
					integrate native functionalities into our app, ensuring a native-like experience for users.
				</li>
				<li>
					<span class="font-bold">Security:</span> Tauri/Rust provided us with the performance and security
					benefits of a native application, while still allowing us to write code in a high-level language
					like Rust.
				</li>
			</ul>
		</div>
		<hr class="mt-8" />
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
