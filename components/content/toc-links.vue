<template>
	<ul>
		<li v-for="link in links" :key="link.id">
			<NuxtLink
				:to="{ path: route.path, hash: `#${link.id}` }"
				:class="{
					'ml-4': level,
					'text-green-600 dark:text-green-400': activeId === link.id,
				}"
				>{{ link.text }}</NuxtLink
			>
			<TocLinks :links="link.children" :level="level + 1" :activeId />
		</li>
	</ul>
</template>

<script lang="ts" setup>
const route = useRoute();
const props = withDefaults(
	defineProps<{
		links: Array<any>;
		level?: number;
		activeId?: string | null;
	}>(),
	{
		links: () => [],
		level: 0,
		activeId: null,
	}
);

const indent = computed(() => {
	return `ml-${props.level * 2}`;
});
</script>

<style></style>
