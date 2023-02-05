<template>
  <header ref="nav" class="global-header" :style="{ transform: `translateY(${navTranslateY}px)` }">
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
    props: ['fullLogo'],
    data() {
      return {
        navTranslateY: 0,
        previousScrollY: 0
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.scrollY > this.previousScrollY) {
          this.navTranslateY = -200;
        } else {
          this.navTranslateY = 0;
        }
        this.previousScrollY = window.scrollY;
      }
    }
  }
</script>
