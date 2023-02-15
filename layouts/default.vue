<template>
  <main class="global-main">
    <Header :fullLogo="fullLogo" />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
import { WEBSITE_TAG } from '~/plugins/globals.js';

export default {
  data () {
    return {
      fullLogo: false
    }
  },
  head() {
    return {
      title: this.title || 'Bia',
      titleTemplate: '%s - ${WEBSITE_TAG}',
      meta: [
        { hid: 'description', name: 'description', content: 'Future x Forward x Partners'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
      ]
    }
  },
  watch: {
    '$route': function (value) {
      if(this.$route.path == "/" || this.$route.path == "/home" ) {
        this.fullLogo = false
      } else {
        this.fullLogo = true
      }
    }
  }
}
</script>
