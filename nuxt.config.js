export default {
  // Target: static site generation
  target: 'static',

  // Global page headers
  head: {
    title: 'BOS Contractor & Supplier - Professional Construction Services',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Professional contractor and supplier services for all your construction needs. Quality materials, expert workmanship, and reliable service.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
    ]
  },

  // Global CSS
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page
  plugins: [
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  // i18n module configuration
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'En',
        file: 'en.js'
      },
      {
        code: 'id',
        name: 'In',
        file: 'id.js'
      }
    ],
    defaultLocale: 'id',
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'id'
    }
  },

  // Axios module configuration
  axios: {
    baseURL: '/'
  },

  // Build Configuration
  build: {
  },

  // Bootstrap Vue configuration
  bootstrapVue: {
    icons: true
  }
}
