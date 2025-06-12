export default {
  // Target: static site generation
  target: 'static',

  // Global page headers
  head: {
    title: 'KS Contractor & Supplier - Professional Construction Services',
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
    '@nuxtjs/axios'
  ],

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