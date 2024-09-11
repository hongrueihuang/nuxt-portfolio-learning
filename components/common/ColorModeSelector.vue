<template>
		<button
			type="button"
			class="hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
			@click="toggleColorMode"
		>
			{{ modeIcons[nextMode] }}
		</button>
</template>

<script lang="ts" setup>
enum ColorMode {
	Light = "light",
	Dark = "dark",
	System = "system",
}
const modes = [ColorMode.Light, ColorMode.Dark, ColorMode.System];
const colorMode = useColorMode();
const modeIcons = {
	[ColorMode.Light]: "☀️",
	[ColorMode.Dark]: "🌙",
	[ColorMode.System]: "🌐",
};

const nextMode = computed(() => {
	const currentMode = colorMode.preference;
	const currentIndex = modes.indexOf(currentMode as ColorMode);
	return modes[(currentIndex + 1) % modes.length];
});

function toggleColorMode() {
	colorMode.preference = nextMode.value;
}
</script>

<style></style>
