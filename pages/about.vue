<template>
  <div>
    <div v-for="aboutPage in aboutPage" :key="aboutPage.sys.id">
      <Hero :title="aboutPage.fields.heroTitle">
        <div v-html="$md.render(aboutPage.fields.heroParagraph)"></div>
      </Hero>

      <section class="section">
        <div class="content content-full sub-grid-thirds">
          <div class="card card-person">
            <img class="card-image image-rounded" :src="aboutPage.fields.founderAPhoto.fields.file.url" :alt="aboutPage.fields.founderAName" />
            <h2 class="h2">{{aboutPage.fields.founderAName}}</h2>
            <p class="">{{aboutPage.fields.founderAType}}</p>
            <p class="p-gray margin-y-0">{{aboutPage.fields.founderASubtype}}</p>
          </div>
          <div class="card card-person">
            <img class="card-image image-rounded" :src="aboutPage.fields.founderBPhoto.fields.file.url" :alt="aboutPage.fields.founderBName" />
            <h2 class="h2">{{aboutPage.fields.founderBName}}</h2>
            <p class="">{{aboutPage.fields.founderBType}}</p>
            <p class="p-gray margin-y-0">{{aboutPage.fields.founderBSubtype}}</p>
          </div>
          <div class="card card-person">
            <img class="card-image image-rounded" :src="aboutPage.fields.founderCPhoto.fields.file.url" :alt="aboutPage.fields.founderCName" />
            <h2 class="h2">{{aboutPage.fields.founderCName}}</h2>
            <p class="">{{aboutPage.fields.founderCType}}</p>
            <p class="p-gray margin-y-0">{{aboutPage.fields.founderCSubtype}}</p>
          </div>
        </div>
      </section>

      <AccordionItems :dataSource="aboutPage.fields.mission" />

    </div>   
  </div>
</template>

<script>
  import AccordionItems from '@/components/accordion-items.vue'
  import { WEBSITE_TAG } from '~/plugins/globals.js';
  export default {
    data() {
      return {
        title: 'About',
      }
    },
    components: {
      AccordionItems
    },
    computed: {
      aboutPage() {
        return this.$store.state.aboutPageData.aboutPage;
      },
    },
    head() {
      return {
        title: this.title,
        titleTemplate: `%s - ${WEBSITE_TAG}`,
        meta: [
          { hid: 'description', name: 'description', content: 'We are designers who have joined as a collective to solve future challenges for humanity'},
          { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
          { hid: 'og-desc', property: 'og:description', content: 'We are designers who have joined as a collective to solve future challenges for humanity.' },
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
