<template>
  <div>
    <Hero :title="title">
      <p>A group of creators with backgrounds in engineering, design, and systems that make a difference. Human-focused, human-forward.</p>
    </Hero>
    <section class="section">
      <div class="content content-full">
        <ul class="list-people">
          <li v-if="member.fields.showInCollective === true" v-for="member in members" :key="member.fields.slug">
            <NuxtLink :to="/collective/+`${member.fields.slug}`" class="no-underline">
              <h2 class="h2">{{ member.fields.name }}</h2>
              <p class="p-gray">{{ member.fields.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { WEBSITE_TAG } from '~/plugins/globals.js';
  export default {
    data() {
      return {
        title: 'Collective'
      }
    },
    head() {
        return {
          title: this.title,
          titleTemplate: `%s - ${WEBSITE_TAG}`,
          meta: [
            { hid: 'description', name: 'description', content: 'A group of creators with backgrounds in engineering, design, and systems that make a difference. Human-focused, human-forward.'},
            { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
            { hid: 'og-desc', property: 'og:description', content: 'A group of creators with backgrounds in engineering, design, and systems that make a difference. Human-focused, human-forward.' },
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
      members() {
        return this.$store.state.memberData.members;
      },
    },
  }
</script>