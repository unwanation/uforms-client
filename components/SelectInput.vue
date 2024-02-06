<script setup>
const model = defineModel();
defineProps({
	variants: Array,
	multiple: Boolean,
});
</script>

<template>
	<div class="input">
		<div v-for="variant in variants" :key="variant.id">
			<input
				v-model="model"
				:value="variant.id"
				:type="multiple ? 'checkbox' : 'radio'"
				:id="variant.id"
			/>
			<label :for="variant.id"><span></span> {{ variant.name }}</label>
		</div>
	</div>
</template>

<style scoped>
.input {
	margin-top: 1rem;
}
.input input {
	appearance: none;
	display: inline-block;
	border: 5px solid var(--accent);
	border-radius: 20px;
	cursor: pointer;
	width: 2rem;
	height: 1rem;
	transition: all 0.3s ease-in-out;
}
.input input[type='checkbox'] {
	border-color: var(--alt);
}
.input input[type='radio']:checked {
	background-color: var(--accent);
	box-shadow: 0 0 1rem var(--accent-25);
	transition: all 0.3s ease-in-out;
}
.input input[type='checkbox']:checked {
	box-shadow: 0 0 1rem var(--accent-25);
	transition: all 0.3s ease-in-out;
}
.input label {
	margin-left: 0.5rem;
	font-size: 1.5rem;
	font-weight: 600;
}

input[type='checkbox']:not(:checked) + label > span {
	width: 0px;
	height: 0px;
	transition: all 0.3s ease-in-out;
}

input[type='checkbox']:checked + label > span {
	content: '';
	position: relative;
	display: inline-block;
	right: 1.8rem;
	bottom: 0.8rem;
	border-right: 5px solid transparent;
	border-bottom: 5px solid transparent;
	transform: rotate(45deg);
	transform-origin: 0% 100%;
	animation: checkbox-check 0.5s ease forwards;
}

@keyframes checkbox-check {
	0% {
		width: 0;
		height: 0;
		border-color: var(--accent);
		transform: translate3d(0, 0, 0) rotate(45deg);
	}
	40% {
		width: 0.8rem;
		height: 0;
	}
	100% {
		width: 0.8rem;
		height: 1.4rem;
		border-color: var(--accent);
	}
}
</style>
