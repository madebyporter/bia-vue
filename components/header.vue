<template>
  <header class="global-header">
    <NuxtLink to="/" class="global-header--logo">
      <Logo :fullLogo="fullLogo"></Logo>
    </NuxtLink>
    <nav class="global-header--nav">
      <Navigation></Navigation>
    </nav>
  </header>
</template>

<script>
  export default {
    props: ['fullLogo']
  }
</script>
