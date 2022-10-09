<template>
  <section class="section-y-0 hero-home" :style="{ backgroundImage: `url(${image})`}">
    <div class="content-50 hero-home-left">
      <p class="p-large">FuturexForwardxPartners</p>
      <Logo-Tertiary></Logo-Tertiary>
    </div>
    <div class="content-50 hero-home-right">
      <p>Together we work both as a collective and individuals to solve future challenges of humanity. Through our intimate craft, authentic voice, and intricate eye on aesthetics, we deliver the best necessary results for you</p>
    </div>
  </section>
</template>

<script>
  import heroHomeImg from "~/assets/img/backgrounds/hero-home-desktop.jpg";

  export default {
    data() {
      return {
        title: 'Home',
        image: heroHomeImg,
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
        bodyAttrs: {
          class: this.title,
        },
      }
    },
  }
</script>