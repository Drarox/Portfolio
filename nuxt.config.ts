// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "fr",
        name: "Français",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    vueI18n: "../i18n.config.ts",
  },
})
