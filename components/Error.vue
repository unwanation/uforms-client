<script setup>
defineProps(['message']);
</script>

<template>
	<div class="error">
		<h1>Something went wrong</h1>
		<span class="message">{{ message }}</span>
	</div>
</template>

<style scoped>
h1 {
	font-size: 4rem;
}
.message {
	color: var(--accent);
	text-shadow: 1px 1px 2rem var(--accent-50);
	font-size: 1.5rem;
}
</style>
