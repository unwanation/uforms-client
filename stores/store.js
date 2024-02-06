export const server = 'http://localhost:8000/api/v1';

const store = {
	state: reactive({
		uuid: null,
		currentForm: null,
		currentQuestion: {
			id: null,
			idx: -1,
			name: null,
			description: null,
			variants: null,
			multiple: false,
		},
		body: '',
		input: [],
		currentAnswers: [],
		error: null,
	}),
	getters: {
		getCurrentForm() {
			return store.state.currentForm;
		},
		getCurrentAnswer() {
			return store.state.currentAnswer;
		},
		getCurrentQuestion() {
			return store.state.currentQuestion;
		},
		getInput() {
			return store.state.input;
		},
		getBody() {
			return store.state.body;
		},
		getAnswer() {
			return store.state.currentAnswers[
				store.getters.getCurrentQuestion().idx
			];
		},
	},
	actions: {
		async fetch(url) {
			const { data, error } = await useFetch(`${server}/${url}`);

			if (error) store.state.error = error;

			return data;
		},

		async fetchForm(id) {
			store.state.currentForm = await store.actions.fetch(`forms/${id}`);
		},

		setUUID(uuid) {
			store.state.uuid = uuid;
			store.actions.selectForm(uuid);
		},

		selectForm(id) {
			store.state.currentQuestion.idx = -1;
			store.state.currentQuestion.variants = null;
			store.actions.fetchForm(id).then(() => {
				store.actions.setQuestion(++store.state.currentQuestion.idx);
			});
		},
		setQuestion(idx) {
			const { id, name, description, allows_multiple_answer } =
				store.getters.getCurrentForm().questions[idx];

			store.state.currentQuestion.id = id;
			store.state.currentQuestion.name = name;
			store.state.currentQuestion.description = description;
			store.state.currentQuestion.multiple = allows_multiple_answer;
			store.state.currentQuestion.variants =
				store.getters.getCurrentForm().variants[idx];
		},
		nextQuestion() {
			if (
				store.getters.getCurrentQuestion().idx ==
				store.getters.getCurrentForm().questions.length - 1
			)
				return;
			this.addAnswer();
			this.setQuestion(++store.state.currentQuestion.idx);
		},
		prevQuestion() {
			if (store.getters.getCurrentQuestion().idx == 0) return;

			this.setQuestion(--store.state.currentQuestion.idx);
		},

		addAnswer() {
			store.state.currentAnswers.push({
				question_id: store.getters.getCurrentQuestion().id,
				body: store.getters.getBody(),
				answer_variants: Array.isArray(store.getters.getInput())
					? store.getters.getInput()
					: [store.getters.getInput()],
			});
			store.state.body = '';
			store.state.input = [];
		},

		submit() {
			this.addAnswer();
			useFetch(`${server}/new-entry`, {
				method: 'POST',
				body: {
					form_id: store.state.uuid,
					answers: store.state.currentAnswers,
				},
			});
		},
	},
};

export default store;
