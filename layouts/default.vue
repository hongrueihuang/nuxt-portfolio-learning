<script setup>
useHead({
	titleTemplate: "%s - Ray Huang",
	link: [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
			crossorigin: "",
		},
	],
});
</script>

<template>
	<div class="container mx-auto max-w-4xl">
		<CommonHeader />
		<main class="p-2 mt-5">
			<slot></slot>
		</main>
	</div>
</template>

<style>
body {
    font-family: "Roboto", sans-serif;
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200
}

</style>