<script setup></script>

<template>
	<header
		class="flex justify-between items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 font-mono"
	>
		<div class="hidden md:block">
			<NuxtLink to="/" class="text-xl font-semibold">Ray Huang</NuxtLink>
		</div>
		<div class="flex justify-between items-start md:items-center w-full md:w-auto p-4">
			<CommonMenu />
			<ClientOnly>
				<CommonColorModeSelector />
			</ClientOnly>
			</div>
	</header>
</template>
