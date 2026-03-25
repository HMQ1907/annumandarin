// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'AnNu Mandarin - Trung Tâm Tiếng Anh Online Cho Trẻ Em',
      htmlAttrs: { lang: 'vi' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Trung tâm tiếng Anh online hàng đầu dành cho trẻ em. Giáo viên bản xứ, phương pháp hiện đại, lộ trình chuẩn quốc tế.'
        },
        { property: 'og:title', content: 'AnNu Mandarin - Trung Tâm Tiếng Anh Online Cho Trẻ Em' },
        { property: 'og:description', content: 'Trung tâm tiếng Anh online hàng đầu dành cho trẻ em.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      googleSheetUrl: process.env.GOOGLE_SHEET_URL || ''
    }
  }
})