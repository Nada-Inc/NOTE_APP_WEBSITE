<script>
	import '../../../app.css';
</script>

<nav class="glass-nav border-gray-200 sticky top-0 z-40">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/note-app-logo.svg" class="h-8" alt="Flowbite Logo" />
		</a>

		<a href="/">Go Back</a>
	</div>
</nav>

<main>
	<section class="px-4 md:px-12 lg:px-96">
		<div class="flex items-center flex-col mt-8">
			<div class="w-screen flex flex-col items-center">
				<div class="glass-nav-login absolute h-40 w-screen top-6"></div>
				<div class="w-40 h-40 bg-blue-500 rounded-full"></div>
			</div>
			<div class="mt-8 flex flex-col items-center w-full">
				<div class="text-xl">Login To Note App</div>
				<form action="" class="mt-4 flex flex-col items-center gap-2 w-full">
					<input
						type="text"
						name=""
						id=""
						placeholder="Enter Your User Name"
						class="bg-gray-50 p-2 rounded-xl w-72"
					/>
					<input
						type="text"
						name=""
						id=""
						placeholder="Enter Password"
						class="bg-gray-50 p-2 rounded-xl w-72"
					/>
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
