<script setup lang="ts">
import type { NuxtError } from "#app";
useSeoMeta({
    title: "Error",
});
const props = defineProps({
	error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
    <NuxtLayout>
        <section>
            <h1 class="text-4xl text-gray-500 dark:text-gray-400">
                Oops {{ error.statusCode }}
            </h1>
            <h2 class="text-xl text-gray-500 dark:text-gray-400">
                {{ error.statusMessage }}
            </h2>
        </section>
    </NuxtLayout>
</template>
