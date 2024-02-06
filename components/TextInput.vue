<script setup>
const model = defineModel();
</script>

<template>
	<div class="input">
		<input v-model="model" type="text" name="textInput" />
	</div>
</template>

<style scoped>
.input {
	margin-top: 2rem;
}

.input > input {
	display: block;
	width: 100%;
	border: none;
	font-size: 1.5rem;
	font-weight: 600;
	padding: 1rem;
	border-radius: 20px;
	background-color: var(--alt);
}

.input > input:focus {
	outline: 0.2rem solid var(--accent);
}
</style>
