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
				<a href="https://github.com/Nada-Inc/NOTE-APP-MONO-REPO"><div class="">Code</div></a>
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
						<span class="text-4xl">B</span>ecause hybrid apps may cut costs and streamline
						development processes easier, they are becoming more and more common in software
						development. They present a strong substitute for native development (even though native
						apps have it's own advantages), especially for applications that don't need speed
						optimisation or highly specialised native capabilities. Web and native development
						strengths are combined in hybrid applications development. They function and execute
						similarly to native apps because they have access to native device capabilities and
						APIs.Simultaneously, they gain from web technologies' flexibility and ease of
						development, which enable quick prototyping and cross-platform interoperability.
					</p>

					<p class="mt-4">
						At Nada Labs, we use Rust (Tauri), React, and React Native to create hybrid
						applications. Using React Native and Tauri to build hybrid applications combines the
						finest features of both technologies: Tauri's native desktop application packaging and
						React Native's UI efficiency and performance.
					</p>

					<p class="mt-4">
						You can create a single codebase with React Native that works on both iOS and Android,
						sharing a large amount of your code between the two platforms. However, Tauri enables
						you to package your React Native application as a stand-alone desktop program, giving
						you access toto more seamless user experiences and native system functionalities. To get
						started, you would normally use React Native to design your application and make sure it
						functions properly on mobile platforms. When your program is prepared, you can package
						it as a desktop application by integrating Tauri. Tauri offers settings and features to
						let you to personalise the packaging process to suit your requirements. Some of these
						include customising app icons, managing updates, and handling permissions.
					</p>

					<p class="mt-4">
						You may build strong hybrid applications with the freedom of web technologies and the
						native capabilities of desktop applications by utilising both React Native and Tauri
						which will make this stack a perfect choice and end of the day it's all depends on the
						needs of each project.
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
