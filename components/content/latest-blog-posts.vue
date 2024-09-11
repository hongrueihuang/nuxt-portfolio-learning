<script setup lang="ts">
withDefaults(defineProps<{ limits?: number | null }>(), {
  limits: null,
});
</script>
<template>
	<BlogPosts v-slot="{ posts }" :limits="limits">
		<div v-for="post in posts" :key="post.id">
			<NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
		</div>
	</BlogPosts>
</template>
