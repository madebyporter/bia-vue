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
        src: '/externalLinks.js',
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

  generate: {
    fallback: true,
    async routes() {
      const contentful = require('contentful');
      const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT
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

      // Fetch all content types dynamically
      const dynamicRoutes = client.getContentTypes()
        .then((response) => {
          return response.items.filter(item => item.fields.generatePages)
            .map(item => item.sys.id)
            .map(async (contentType) => {
              const entries = await client.getEntries({ content_type: contentType });
              return entries.items.map((entry) => `/${contentType}/${entry.fields.slug}`);
            });
        })
        .then((promises) => {
          return Promise.all(promises);
        })
        .then((values) => {
          return values.flat();
        });

      return Promise.all([
        memberRoute,
        casesRoute,
        venturesRoute,
        journalRoute,
        feedRoute,
        aboutPageRoute,
        dynamicRoutes
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
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit'
  ],

  // Markdown
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,  // Inject '$md' in context
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
