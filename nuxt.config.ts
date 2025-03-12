// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxtjs/seo', '@nuxtjs/i18n'],
    unhead: {
        legacy: true
    },
    experimental: {
        inlineRouteRules: true,
    },
    i18n: {
        defaultLocale: 'en',
        strategy: 'prefix',
        locales: [
            {
                code: 'de',
            },
            {
                code: 'en',
            },
        ],
    }
})