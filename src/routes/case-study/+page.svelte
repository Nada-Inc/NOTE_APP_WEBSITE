<script lang="ts">
	import '../../app.css';

	let isMenu: boolean = true;
	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
</script>

<nav class="glass-nav border-gray-200 sticky top-0">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>

		<div>Go Back</div>
	</div>
</nav>
<main>
	<section class="px-4">
		<div
			class="bg-blue-200 p-4 rounded-xl h-auto flex flex-col items-center justify-center md:flex-row"
		></div>
	</section>
</main>
