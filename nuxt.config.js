import dotenv from "dotenv"; 
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
 space: process.env.CONTENTFUL_SPACE,
 accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});

const dynamicRoutes = async () => {
  // Fetch Members
  const memberRoute = Promise.all([
    client.getEntries({
      content_type: "member"
    })
  ]).then(([member]) => {
    return [...member.items.map(entry => entry.fields.slug)];
  })

  // Fetch Cases
  const casesRoute = Promise.all([
    client.getEntries({
      content_type: "cases"
    })
  ]).then(([cases]) => {
    return [...cases.items.map(entry => entry.fields.slug)];
  })

  const routes = memberRoute.concat(caseRoute)
  return routes
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bia',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/contentful", 
    "~/plugins/members",
    "~/plugins/cases",
  ],

  // Contentful
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
  },

  generate: {
    fallback: true,
    routes: dynamicRoutes
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
