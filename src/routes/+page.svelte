<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { getDownloadLink } from '../lib/getDownloadUrl';
	import { getOSInfo } from '../lib/getOsInfo';

	let os: string | undefined = 'Unknown';
	let isDownload: boolean | undefined = undefined;

	onMount(() => {
		if (typeof navigator !== 'undefined') {
			os = getOSInfo();
		}
	});

	const getDownloadLinkCheck = () => {
		isDownload = getDownloadLink(os);
	};

	$: if (isDownload) {
		setTimeout(() => {
			isDownload = undefined;
		}, 2000);
	} else {
		setTimeout(() => {
			isDownload = undefined;
		}, 2000);
	}
</script>

<main>
	<section class="p-4 font-inria h-screen lg:px-40 lg:py-14">
		<div class="text-xl flex justify-between py-4">
			<div>Note App</div>
			<div class="flex gap-4">
				<button>
					<img src="/images/brightness.png" alt="" class="w-5" />
				</button>
				<a href="https://github.com/Nada-Inc/NOTE-APP-MONO-REPO"
					><div class="hidden lg:block">Source Code</div></a
				>
				<a href="/about"><div>About</div></a>
			</div>
		</div>

		<div class="grid lg:grid-cols-2">
			<div class="w-full h-full flex justify-center items-start flex-col">
				<div class="lg:hidden">
					<img src="/images/about-our-team.svg" alt="hero section" class="w-full" />
				</div>
				<div class="text-xl">Notes Unleashed</div>
				<div class="text-5xl">Your All-in-One <br />Note-Taking Companion</div>
				<button
					class="bg-black text-white rounded-full p-2 mt-4"
					on:click={() => {
						getDownloadLinkCheck();
					}}>Download Now</button
				>
				{#if isDownload !== undefined}
					{#if isDownload}
						<div class="mt-4">
							Detected OS <span class="underline decoration-dashed">{os}</span>, Downloading Now...
						</div>
					{:else}
						<div class="mt-4">
							Not Available For <span class="underline decoration-dashed">{os}</span>
						</div>
					{/if}
				{/if}
			</div>
			<div class="hidden lg:block">
				<img src="/images/about-our-team.svg" alt="hero section" class="w-full" />
			</div>
		</div>
	</section>
</main>
