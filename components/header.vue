<template>
  <header class="global-header">
    <NuxtLink to="/" class="global-header--logo">
      <Logo></Logo>
    </NuxtLink>
    <nav class="global-header--nav">
      <NuxtLink to="/collective">Collective</NuxtLink>
      <NuxtLink to="/cases">Cases</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="#contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<script>
  export default {
    methods: {
      homePage() {
        if(this.$route.path == "/" || this.$route.path == "/home" ) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
