<script lang="ts">
	import { onMount } from 'svelte';

	let isDark = false;

	onMount(() => {
		const isDarkLocal = localStorage.getItem('isDark');
		if (isDarkLocal === null) {
			localStorage.setItem('isDark', 'false');
		} else {
			isDark = JSON.parse(isDarkLocal);
		}
	});
</script>

<main class={isDark ? 'bg-black text-white' : 'bg-main'}>
	<section class="p-4 font-inria lg:px-40 lg:py-14">
		<div
			class={`text-xl flex justify-between sticky top-0 py-4 ${isDark ? 'bg-black' : 'bg-main'}`}
		>
			<a href="/"><div>Note App</div></a>
			<div class="flex gap-4">
				<a href="https://github.com/Nada-Inc/NOTE-APP-MONO-REPO"
					><div class="hidden lg:block">Source Code</div></a
				>
				<a href="/"><div>Go Back</div></a>
			</div>
		</div>

		<div class="grid lg:grid-cols-2 mt-20">
			<div class="w-full h-full flex justify-center items-start flex-col">
				<div class="lg:hidden">
					<img
						src={isDark ? '/images/designer-working-dark.svg' : '/images/designer-working.svg'}
						alt="hero section"
						class="w-full"
					/>
				</div>
				<div class="text-xl">Learn How We Built Note App</div>
				<div class="text-5xl">With Our Favorite Stack <br />For Hybrid Apps</div>
				<div class="text-sm mt-2">
					07-03-2024 • Written By Anandhu Remanan (Co-Founder Nada Labs)
				</div>
				<div class="mt-4">
					<p>
						<span class="text-4xl">H</span>ybrid apps have become increasingly popular due to their
						ability to streamline development processes and reduce costs. They offer a compelling
						alternative to native development, particularly for applications that do not require
						highly specialized native features or performance optimization. Hybrid apps leverage the
						strengths of both native and web development. They can access native device features and
						APIs, providing a level of performance and functionality similar to that of native apps.
						At the same time, they benefit from the flexibility and ease of development associated
						with web technologies, allowing for rapid prototyping and cross-platform compatibility.
					</p>

					<p class="mt-4">
						At Nada Labs We Use React, React Native, and Rust (Tauri) for Building Hybrid Apps.
						Building hybrid applications with React Native and Tauri combines the best of both
						worlds: the efficiency and performance of React Native for the UI and Tauri for the
						native desktop application packaging.
					</p>

					<p class="mt-4">
						With React Native, you can develop a single codebase for both Android and iOS, sharing a
						significant portion of your code across platforms. Tauri, on the other hand, allows you
						to package your React Native app as a standalone desktop application, providing access
						to native system functionalities and a more seamless user experience. To get started,
						you would typically develop your application using React Native, ensuring it works
						correctly on mobile platforms. Once your app is ready, you can integrate Tauri to
						package it as a desktop application. Tauri provides tools and configurations to
						customize the packaging process according to your needs, such as setting up app icons,
						handling permissions, and managing updates.
					</p>

					<p class="mt-4">
						By leveraging both React Native and Tauri, you can create powerful hybrid applications
						that offer the flexibility of web technologies and the native capabilities of desktop
						applications.
					</p>

					<div class="mt-8 flex gap-4">
						<div>
							Learn more about React Native <a href="https://reactnative.dev/" target="_blank"
								><span class="underline decoration-dashed">Here</span></a
							>
						</div>
						<div>
							Learn more about Tauri <a href="https://tauri.app/" target="_blank"
								><span class="underline decoration-dashed">Here</span></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="hidden lg:block">
				<img
					src={isDark ? '/images/designer-working-dark.svg' : '/images/designer-working.svg'}
					alt="hero section"
					class="w-96"
				/>
			</div>
		</div>
	</section>
</main>
