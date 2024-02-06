<script setup>
import store from './stores/store';

const uuid = useRoute().path.slice(1);

if (uuid.includes('/')) store.state.error = new Error('Invalid URL');

if (!store.state.error) store.actions.setUUID(uuid);
</script>

<template>
	<Title>uForms</Title>
	<div class="wrapper">
		<Error v-if="store.state.error" :message="store.state.error.message" />
		<Form v-else-if="store.getters.getCurrentForm()" />
		<div v-else class="loader">
			<Loader />
		</div>
	</div>
</template>

<style scoped>
.loader {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
