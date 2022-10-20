<template>
  <main class="global-main">
    <Header :fullLogo="fullLogo" />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>
export default {
  data () {
    return {
      fullLogo: false
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
