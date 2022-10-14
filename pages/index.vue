<template>
  <div>
    <section class="section-y-0 hero-home">
      <div class="content-half hero-home-left">
        <p class="p-large">FuturexForwardxPartners</p>
        <Logo-Tertiary></Logo-Tertiary>
      </div>
      <div class="content-half hero-home-right">
        <p>Together we work both as a collective and individuals to solve future challenges of humanity. Through our intimate craft, authentic voice, and intricate eye on aesthetics, we deliver the best necessary results for you</p>
      </div>
      <div class="hero-home-img"><img src="~@/assets/img/bg/hero-home-desktop.jpg" alt="BIA Background" /></div>
    </section>

    <section class="section-large">
      <div class="content-full" v-for="feed in feedTemplate">
        <ul class="list-default-large">
          <li class="list-item" v-for="feedItem in feed.fields.feedContent" :key="feedItem.fields.slug">
            <div class="list-item-full">
              <NuxtLink :to="`${feedItem.sys.contentType.sys.id}`+`/`+`${feedItem.fields.slug}`">
                <img class="image-rounded" :src="`${feedItem.fields.featuredImage.fields.file.url}`" />
              </NuxtLink>
            </div>
            <div class="list-item-half list-item-narrow">
              <h2 class="h2 margin-b-0">
                <NuxtLink :to="`${feedItem.sys.contentType.sys.id}`+`/`+`${feedItem.fields.slug}`">{{feedItem.fields.title}}</NuxtLink>
              </h2>
              <p class="p-large">{{feedItem.fields.description}}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Home'
      }
    },
    computed: {
      feedTemplate() {
        return this.$store.state.feedData.feedTemplate;
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