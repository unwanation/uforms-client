<script setup>
defineProps({
	title: String,
	alt: Boolean,
	disabled: Boolean,
});
</script>

<template>
	<button :disabled="disabled" :class="alt ? 'button alt' : 'button'">
		{{ title }}
	</button>
</template>

<style scoped>
.button {
	border: none;
	font-size: 1.5rem;
	font-weight: 600;
	padding: 0.25rem 1.5rem;
	border-radius: 15px;
	background-color: var(--alt);
	cursor: pointer;
	transition: all 0.1s ease;
}

.button:disabled {
	cursor: not-allowed;
	opacity: 0.25;
}

.alt {
	background-color: var(--accent);
	color: var(--bg);
}
</style>
