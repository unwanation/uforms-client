<script setup></script>

<template>
	<span class="loader"></span>
</template>

<style scoped>
.loader {
	border: 24px solid;
	border-color: var(--accent-15) var(--accent-25) var(--accent-35)
		var(--accent-50);
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: animloader 1.5s linear infinite;
}

@keyframes animloader {
	0% {
		border-color: var(--accent-15) var(--accent-25) var(--accent-35)
			var(--accent-75);
	}
	25% {
		border-color: var(--accent-75) var(--accent-15) var(--accent-25)
			var(--accent-35);
	}
	50% {
		border-color: var(--accent-35) var(--accent-75) var(--accent-15)
			var(--accent-25);
	}
	75% {
		border-color: var(--accent-25) var(--accent-35) var(--accent-75)
			var(--accent-15);
	}
	100% {
		border-color: var(--accent-15) var(--accent-25) var(--accent-35)
			var(--accent-75);
	}
}
</style>
