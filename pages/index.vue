<script setup>
useSeoMeta({
    lang: "en",
	title: "My Page",
    description: "This is my page, let me tell you all about it.",
	ogTitle: "My Page",
	ogDescription: "This is my amazing site, let me tell you all about it.",
	ogImage: "https://example.com/image.png",
    twitterTitle: "My Page",
    twitterDescription: "This is my amazing site, let me tell you all about it.",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<article class="prose dark:prose-invert max-w-none">
		<ContentDoc path="/" />
	</article>
</template>
