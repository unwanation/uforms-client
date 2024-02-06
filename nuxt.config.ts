// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	css: ['~/assets/main.css'],
	modules: ['@nuxtjs/color-mode', 'nuxt-icon'],
});
