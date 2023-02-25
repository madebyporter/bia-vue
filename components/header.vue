<template>
  <header ref="nav" class="global-header" :style="{ transform: `translateY(${windowWidth >= 1024 ? navTranslateY : 0}px)` }">
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
        previousScrollY: 0,
        windowWidth: 0
      };
    },
    mounted() {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleResize() {
        this.windowWidth = window.innerWidth;
      },
      handleScroll() {
        const heightWithExtra = window.innerHeight + 100;
        if (document.documentElement.scrollHeight > heightWithExtra) {
          if (window.scrollY > this.previousScrollY && this.windowWidth >= 1024) {
            this.navTranslateY = -200;
          } else {
            this.navTranslateY = 0;
          }
        } else {
          this.navTranslateY = 0;
        }
        this.previousScrollY = window.scrollY;
      }
    }
  }
</script>
