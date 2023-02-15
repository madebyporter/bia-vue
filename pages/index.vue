<template>
  <div>
    <section ref="hero" :class="'section-y-0 hero-home hero-home-version'+scrolled">
      <div class="content-half hero-home-left" :style="{opacity: 100-scrolled*10+'%'}">
        <p class="p-large">FuturexForwardxPartners</p>
        <Logo-Tertiary></Logo-Tertiary>
      </div>
      <div class="content-half hero-home-right" :style="{opacity: 100-scrolled*10+'%'}">
        <p>Together we work both as a collective and individuals to solve future challenges of humanity. Through our intimate craft, authentic voice, and intricate eye on aesthetics, we deliver the best necessary results for you.</p>
      </div>
    </section>

    <section class="section-large homepage-content">
      <div class="content-full" v-for="feed in feedTemplate">
        <ul class="list-default list-large">
          <li class="list-item" v-for="feedItem in feed.fields.feedContent" :key="feedItem.fields.slug">
            <div class="list-item-full">
              <NuxtLink :to="`${feedItem.sys.contentType.sys.id}`+`/`+`${feedItem.fields.slug}`">
                <img class="image-rounded" :src="`${feedItem.fields.featuredImage.fields.file.url}`" />
              </NuxtLink>
            </div>
            <div class="list-item-half list-item-narrow">
              <h2 class="h2 margin-b-0">
                <NuxtLink :to="`${feedItem.sys.contentType.sys.id}`+`/`+`${feedItem.fields.slug}`" class="no-underline">{{feedItem.fields.title}}</NuxtLink>
              </h2>
              <p>{{feedItem.fields.description}}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section-xy-0">
      <div class="content-wide">
        <div class="content-subgrid-thirds">
          <div class="card-color-yellow">
            <div class="card-header">
              <h2 class="h2 margin-b-0">Brain</h2>
              <p class="p-large">First-principle thinkers</p>
            </div>
            <NuxtLink class="link-underline link-large" to="/cases">See our team work</NuxtLink>
          </div>
          <div class="card-color-orange">
            <div class="card-header">
              <h2 class="h2 margin-b-0">Body</h2>
              <p class="p-large">Our collective approach</p>
            </div>
            <NuxtLink class="link-underline link-large" to="/about">Learn about our personality</NuxtLink>
          </div>
          <div class="card-color-blue">
            <div class="card-header">
              <h2 class="h2 margin-b-0">Being</h2>
              <p class="p-large">Inner soul mission</p>
            </div>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { WEBSITE_TAG } from '~/plugins/globals.js';

  export default {
    data() {
      return {
        title: 'Home',
        scrolled: 0
      }
    },
    head() {
      return {
        title: this.title,
        titleTemplate: `%s - ${WEBSITE_TAG}`,
        meta: [
          { hid: 'description', name: 'description', content: 'Future x Forward x Partners'},
          { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
          { hid: 'og-desc', property: 'og:description', content: 'Future x Forward x Partners' },
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
    computed: {
      feedTemplate() {
        return this.$store.state.feedData.feedTemplate;
      }
    },
    methods: {
      changeScrollVersion() {
        // 11 versions of the gradient css
        // flip through them on scroll
        let heroHeight = this.$refs.hero.clientHeight
        let scrollPosition = window.scrollY
        let chunk = heroHeight / 11 //number of versions in _hero-home.scss
        let version = Math.floor(scrollPosition / chunk)
        this.scrolled = version
      }
    },
    mounted() {
      window.onscroll = () => this.changeScrollVersion()
    }
  }
</script>
