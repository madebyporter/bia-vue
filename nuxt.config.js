const dotenv = require('dotenv');
const path = require('path');

// Load .env.staging
dotenv.config({ path: path.join(__dirname, '.env.staging') });

module.exports = {
  env: {
    // Production
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,

    // Staging
    CONTENTFUL_ENVIRONMENT_STAG: process.env.CONTENTFUL_ENVIRONMENT_STAG,
    CONTENTFUL_SPACE_STAG: process.env.CONTENTFUL_SPACE_STAG,
    CONTENTFUL_ACCESSTOKEN_STAG: process.env.CONTENTFUL_ACCESSTOKEN_STAG,
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og-image', property: 'og:image', content: '/bia-og-image.jpg'},
      { hid: 't-type', name: 'twitter:card', content: '/bia-og-image.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        hid: 'phosphor',
        src: "https://unpkg.com/phosphor-icons",
      },
      {
        hid: 'externalLinks',
        src: 'externalLinks.js',
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/contentful', mode: 'client'},
    '~/plugins/globals',
    "~/plugins/members",
    "~/plugins/cases",
    "~/plugins/ventures",
    "~/plugins/journal",
    "~/plugins/feedTemplate",
    "~/plugins/aboutPage",
    "~/plugins/analytics",
  ],

  middleware: [
    'contentful.staging'
  ],

  generate: {
    async routes() {
      const contentful = require('contentful');
      const client = contentful.createClient({
        space: ebblsgqwail2,
        accessToken: _OktLrgp7NsYER7nEqKAuGZ4laF2Ly8XWEU4tdEFeTU,
        environment: master
      });

      // Fetch Members
      const memberRoute = client.getEntries({
        content_type: 'member'
      }).then((response) => {
        return response.items.map((entry) => entry.fields.slug);
      });

      // Fetch Cases
      const casesRoute = client.getEntries({
        content_type: 'cases',
        include: 9
      }).then((response) => {
        return response.items.map((entry) => entry.fields.slug);
      });

      // Fetch Ventures
      const venturesRoute = client.getEntries({
        content_type: 'ventures',
        include: 6
      }).then((response) => {
        return response.items.map((entry) => entry.fields.slug);
      });

      // Fetch Journal
      const journalRoute = client.getEntries({
        content_type: 'journal',
        include: 9
      }).then((response) => {
        return response.items.map((entry) => entry.fields.slug);
      });

      // Fetch Homepage
      const feedRoute = client.getEntries({
        content_type: 'feedTemplate',
        include: 9
      }).then((response) => {
        return response.items.map((entry) => '/');
      });

      // Fetch About
      const aboutPageRoute = client.getEntries({
        content_type: 'aboutPage',
        include: 9
      }).then((response) => {
        return response.items.map((entry) => '/about');
      });

      return Promise.all([
        memberRoute,
        casesRoute,
        venturesRoute,
        journalRoute,
        feedRoute,
        aboutPageRoute
      ]).then((values) => {
        return values.flat();
      });
    }
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
