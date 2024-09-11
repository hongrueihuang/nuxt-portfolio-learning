<template>
	<section v-if="pending">loading...</section>
	<section v-else-if="error">Something wrong here...</section>
	<ul class="grid grid-cols-1 gap-4" v-else>
		<li
			v-for="item in data"
			class="border border-gray-200 rounded-sm p-4 font-mono hover:bg-gray-100 dark:hover:bg-gray-800"
		>
			<a :href="item.url" target="_blank">
				<div class="flex items-center justify-between text-sm mb-4">
					<span class="font-semibold">{{ item.name }}</span>
					<span class="flex items-center">{{ item.stargazers_count }} ⭐</span>
				</div>
        <p class="text-sm">
          {{ item.description || 'No description about this repository' }}
        </p>
			</a>
		</li>
	</ul>
</template>

<script lang="ts" setup>
type Item = {
	name: string;
	[key: string]: any;
};
const { error, pending, data } = await useFetch<Item[]>(
	"https://api.github.com/users/hongrueihuang/repos"
);

// const repos = computed(() => data.value?.filter((item) => item.description));
</script>

<style></style>
