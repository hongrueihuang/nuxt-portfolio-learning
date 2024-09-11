<script setup lang="ts">
const props = withDefaults(defineProps<{ limits?: number | null }>(), {
	limits: null,
});
const { data } = await useAsyncData("blog-list", () => {
	const query = queryContent("/blog")
		.where({ _path: { $ne: "/blog" } })
		.only(["_path", "title", "publishedAt"])
		.sort({ publishedAt: -1 });

	if (props.limits) {
		query.limit(props.limits);
	}
	return query.find();
});

const posts = computed(() => {
	if (!data.value) {
		return [];
	}
	const result = [];
	let lastYear = null;
	for (const post of data.value) {
		const year = new Date(post.publishedAt).getFullYear();
		if (year !== lastYear) {
			result.push({ year, ...post });
			lastYear = year;
		} else {
			result.push({ year: "", ...post });
		}
	}
	return result;
});
</script>

<template>
	<slot :posts="posts">
		<section class="not-prose font-mono text-center">
			<div class="column text-gray-400 text-sm">
				<div class="w-28">date</div>
				<div>title</div>
			</div>
			<ul>
				<li v-for="post in posts" :key="post._path">
					<NuxtLink
						:to="post._path"
						class="column hover:bg-gray-100 dark:hover:bg-gray-800"
					>
						<div class="text-gray-500 w-28">{{ post.year }}</div>
						<div>{{ post.title }}</div>
					</NuxtLink>
				</li>
			</ul>
		</section>
	</slot>
</template>

<style scoped>
.column {
	@apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
