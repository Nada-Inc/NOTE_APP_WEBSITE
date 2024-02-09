<script lang="ts">
	import { writable } from 'svelte/store';
	export let toastMessage: any = writable(null);
</script>

<!-- Toast component -->
{#if $toastMessage}
	<div class="toast w-96 flex justify-center gap-2">
		<div
			class="w-6 h-6 text-white rounded-full text-center {$toastMessage.type === 'error'
				? 'bg-red-500'
				: 'bg-green-400'}"
		>
			{$toastMessage.type === 'error' ? 'x' : '✔'}
		</div>
		<div class={$toastMessage.type === 'error' ? 'text-red-500' : ''}>{$toastMessage.message}</div>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		top: 6em;
		padding: 1em;
		/* background: rgba(255, 255, 255, 0.75); */
		background: white;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		transition: opacity 0.5s ease;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border: 1px solid rgba(255, 255, 255, 0.18);
		border-radius: 0.5em;
		transition: opacity 0.5s ease;
		z-index: 50;
	}
</style>
