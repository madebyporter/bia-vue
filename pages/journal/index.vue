<template>
  <div>
    <Hero :title="title">
      <p>We push the boundaries of creative expression, exploring business, design, engineering, tech and sustainability. We write about it here.</p>
    </Hero>
    <section class="section-large">
      <div class="content-full">
        <ul class="list-content">
          <li v-for="journal in journal" :key="journal.fields.slug">
            <div class="list-content-left">
              <div class="list-item-image" v-if="journal.fields.heroImage">
                <NuxtLink :to="/journal/+`${journal.fields.slug}`" class="no-underline">
                  <img class="image-rounded" :src="`${journal.fields.heroImage.fields.file.url}`" />
                </NuxtLink>
              </div>
            </div>
            <div class="list-content-right">
              <div class="list-content-header">
                <h2 class="h2">
                  <NuxtLink :to="/journal/+`${journal.fields.slug}`" class="no-underline">{{ journal.fields.title }}</NuxtLink>
                </h2>
                <p>{{ journal.fields.subTitle }}</p>
              </div>
              <div class="list-content-data">
                <div class="list-content-data-left">

                  <!--Collaborators-->
                  <List title="Collaborators">
                    <li v-for="(person, i) in journal.fields.collaborators" :key="'person-'+i">
                      <Placard>
                        <Avatar v-if="person.fields.avatar" :imgSrc="person.fields.avatar.fields.file.url"></Avatar>
                        <Person :personLink="/collective/+`${person.fields.slug}`" :personName="person.fields.name">
                          <p class="p-small" v-for="(discipline, i) in person.fields.disciplines" :key="i" v-if="i === 0">
                            {{discipline.fields.title}}
                          </p>
                        </Person>
                      </Placard>
                    </li>
                  </List>
                </div>
                <div class="list-content-data-right">
                  
                  <!--Topics-->
                  <List title="Topics">
                    <li v-for="(topic, i) in journal.fields.topic">
                      {{ topic.fields.title }}
                    </li>
                  </List>
                </div>
              </div>
            </div>
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
        title: 'Journal'
      }
    },
    head() {
      return {
        title: this.title,
        titleTemplate: `%s - ${WEBSITE_TAG}`,
        meta: [
          { hid: 'description', name: 'description', content: 'We push the boundaries of creative expression, exploring business, design, engineering, tech and sustainability. We write about it here.'},
          { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
          { hid: 'og-desc', property: 'og:description', content: 'We push the boundaries of creative expression, exploring business, design, engineering, tech and sustainability. We write about it here.' },
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
      journal() {
        return this.$store.state.journalData.journal;
      }
    },
  }
</script>