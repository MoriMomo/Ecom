export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect", href: "https://fonts.googleapis.com",
        rel: "preconnect", href: "https://fonts.gstatic.com",
        href: "https://fonts.googleapis.com/css2?family=Didact+Gothic&family=EB+Garamond&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap",
        rel: "stylesheet"
      }
    ],
    script: [
      { src: "https://kit.fontawesome.com/f3ac548cd6.js", crossorigin: "anonymous" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bootstrap/dist/css/bootstrap.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/bootstrap.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  axios: {
    baseURL: "https://vintage-31e2a-default-rtdb.asia-southeast1.firebasedatabase.app"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
