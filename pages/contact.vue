<template>
    <div>
      <Hero :title="title">
        <p>Together we unite our individual strengths to create impactful results for clients with values that match our own. Get in touch.</p>
      </Hero>
    </div>
  </template>
  
  <script>
    import { WEBSITE_TAG } from '~/plugins/globals.js';
    export default {
      data() {
        return {
          title: 'Contact',
        }
      },
      head() {
        return {
          title: this.title,
          titleTemplate: `%s - ${WEBSITE_TAG}`,
          meta: [
            { hid: 'description', name: 'description', content: 'Together we unite our individual strengths to create impactful results for clients with values that match our own. Get in touch.'},
            { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
            { hid: 'og-desc', property: 'og:description', content: 'Together we unite our individual strengths to create impactful results for clients with values that match our own. Get in touch.' },
            // og-image is in nuxt.config.js
            { hid: 'og-url', property: 'og:url', content: this.$nuxt.$route.path },
          ],
          link: [
            { rel: 'canonical', href: this.$nuxt.$route.path, hid: 'canonical' }
          ],
          bodyAttrs: {
            class: this.title,
          },
        }
      },
    }
  </script>
  