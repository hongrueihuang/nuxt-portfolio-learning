<template>
	<nav class="grow">
		<ul class="flex flex-col md:flex-row space-x-4 items-center">
			<li>
				<NuxtLink to="/" class="link" active-class="text-gray-400">home</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/about" class="link" active-class="text-gray-400">about</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/project" class="link" active-class="text-gray-400">project</NuxtLink>
			</li>
            <li>
                <NuxtLink to="/blog" class="link" active-class="text-gray-400">blog</NuxtLink>
            </li>
	</ul>
	</nav>
</template>

<style scoped>
.link {
    @apply hover:text-gray-400 p-1 text-2xl md:text-base;
}
</style>
