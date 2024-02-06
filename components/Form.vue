<script setup>
import store from '@/stores/store';

const form = computed(() => store.getters.getCurrentForm());
const question = computed(() => store.getters.getCurrentQuestion());
const idx = computed(() => store.getters.getCurrentQuestion().idx);
</script>

<template>
	<div class="form">
		<h1>{{ form.name }}</h1>
		<div class="question">
			<span class="question-number">{{ idx + 1 }}</span>
			<div class="question-content">
				<h2>{{ question.name }}</h2>
				<p>
					{{ question.description }}
				</p>
			</div>
		</div>
		<div class="input">
			<TextInput
				v-if="question.variants.length == 0"
				v-model="store.state.body"
			/>
			<SelectInput
				v-else
				v-model="store.state.input"
				:variants="question.variants"
				:multiple="question.multiple"
			/>
		</div>
		<div class="buttons">
			<Button
				@click="store.actions.prevQuestion()"
				v-show="idx > 0"
				title="Back"
			/>
			<Button
				@click="store.actions.nextQuestion()"
				v-show="idx < form.questions.length - 1"
				alt
				:disabled="
					!store.getters.getBody() &&
					store.getters.getInput().length == 0
				"
				title="Next"
			/>
			<Button
				@click="store.actions.submit()"
				v-show="idx == form.questions.length - 1"
				alt
				:disabled="
					!store.getters.getBody() &&
					store.getters.getInput().length == 0
				"
				title="Submit"
			/>
		</div>
	</div>
</template>

<style scoped>
.form {
	width: 100vw;
	padding: 5%;
	margin: auto;
}
.form > h1 {
	font-size: 2.5rem;
	text-decoration: underline;
	text-decoration-color: var(--accent);
	text-decoration-thickness: 0.4rem;
}
.question {
	display: flex;
	margin-top: 1rem;
}

.question-number {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	font-size: 1.75rem;
	font-weight: bold;
	background-color: var(--alt);
	padding: 1rem;
	border-radius: 20px;
}
.question-content {
	align-items: center;
	padding: 0 2rem;
	flex-direction: column;
	text-align: left;
}

.question-content > h2 {
	font-size: 1.75rem;
}
.question-content > p {
	font-size: 1.3rem;
	font-weight: 500;
}

.buttons {
	margin-top: 2rem;
	display: flex;
	justify-content: right;
	gap: 1rem;
}
</style>
