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
      content_type: "cases",
      include: 9
    })
  ]).then(([cases]) => {
    return [...cases.items.map(entry => entry.fields.slug)];
  })

  // Fetch Ventures
  const venturesRoute = Promise.all([
    client.getEntries({
      content_type: "ventures",
      include: 6
    })
  ]).then(([ventures]) => {
    return [...ventures.items.map(entry => entry.fields.slug)];
  })

  // Fetch Journal
  const journalRoute = Promise.all([
    client.getEntries({
      content_type: "journal",
      include: 9
    })
  ]).then(([ventures]) => {
    return [...journal.items.map(entry => entry.fields.slug)];
  })

  // Fetch Homepage
  const feedRoute = Promise.all([
    client.getEntries({
      content_type: "feedTemplate",
      include: 9
    })
  ]).then(([ventures]) => {
    return [...feedTemplate.items.map(entry => entry.fields.slug)];
  })

  return memberRoute, casesRoute, venturesRoute, journalRoute, feedRoute
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
    ],
    script: [
      {
        src: "https://unpkg.com/phosphor-icons",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/contentful",
    "~/plugins/members",
    "~/plugins/cases",
    "~/plugins/ventures",
    "~/plugins/journal",
    "~/plugins/feedTemplate",
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
    '@nuxtjs/markdownit'
  ],

  // Markdown
  markdownit: {
    runtime: true // Support `$md()`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
