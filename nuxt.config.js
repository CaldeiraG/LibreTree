import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "caldeirag.xyz",
    title: "caldeirag.xyz",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "HandheldFriendly", content: "True" },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "CaldeiraG" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://caldeirag.xyz",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "CaldeiraG",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "My personal website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://cdn.caldeirag.xyz/profile.png",
      },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "800" },
      { name: "twitter:site", content: "@CaldeiraG" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://caldeirag.xyz",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "CaldeiraG",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "My personal website",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://cdn.caldeirag.xyz/profile.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://caldeirag.xyz",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  serverMiddleware: [
    '~/middleware/redirects.js',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader"
      })
      config.node = {
        fs: 'empty'
      }
    }
  }
}
