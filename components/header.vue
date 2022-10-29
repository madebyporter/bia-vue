<template>
  <header class="global-header">
    <div class="global-header-logo">
      <NuxtLink to="/" class="global-header-logo-link">
        <Logo :fullLogo="fullLogo"></Logo>
      </NuxtLink>
    </div>
    <nav class="global-header-nav">
      <Navigation></Navigation>
    </nav>
  </header>
</template>

<script>
  export default {
    props: ['fullLogo']
  }
</script>
