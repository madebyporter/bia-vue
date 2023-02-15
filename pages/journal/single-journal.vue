<template>
  <div>
    <!-- Title -->
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ journal.fields.title }}</h1>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="section-xy-0" v-if="journal.fields.heroImage">
      <div class="content-wide">
        <div class="hero-image">
          <img :src="`${journal.fields.heroImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">

      <!-- Sidebar -->
      <div class="content-sidebar">

        <!-- Topics -->
        <aside class="content-sidebar-aside" v-if="journal.fields.topic">
          <List title="Topics">
            <li v-for="t in journal.fields.topic">
              {{ t.fields.title }}
            </li>
          </List>
        </aside>

        <!-- Collaborators-->
        <aside class="content-sidebar-aside" v-if="journal.fields.collaborators">
          <List title="Collaborators">
            <li v-for="person in journal.fields.collaborators">
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
        </aside>
      </div>

      <!-- Main Content Area -->
      <div class="content-post-sidebar">
        <!-- Journal Content -->
        <div class="content-inner" v-if="journal.fields.content">
          <div class="content-text" v-html="$md.render(journal.fields.content)"></div>
        </div>

        <!-- Card Resource List -->
        <div class="content-inner" v-if="journal.fields.resourceList">
          <ul class="list-default list-medium">
            <li v-for="r in journal.fields.resourceList">
              <div class="card card-bordered card-resource">
                <div class="card-inner card-top">
                  <div class="avatar-group">
                    <div class="avatar-large">
                      <img :src="r.fields.resourceAvatar.fields.file.url" :alt="r.fields.resourceName" />
                    </div>
                    <h2 class="h2 margin-0">
                      <a :href="r.fields.resourceUrl" target="_blank">{{ r.fields.resourceName }}</a>
                    </h2>
                  </div>
                </div>
                <div class="card-inner card-bottom">
                  <div class="tag-group">
                    <div class="tag">
                      {{ r.fields.resourceType }}
                    </div>
                     <div class="tag-group" v-for="t in r.fields.resourceTag">
                      <div class="tag">
                        {{ t }}
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Journal Closing -->
        <div class="content-inner" v-if="journal.fields.closing">
          <div class="content-text" v-html="$md.render(journal.fields.closing)"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { WEBSITE_TAG } from '~/plugins/globals.js';
  export default {
    props: [
      'slug',
      'activeTitle',
      'activeSubTitle'
    ],
    computed: {
      journal() {
        let journal = this.$store.state.journalData.journal.filter(
          el => el.fields.slug === this.slug
        );
        return journal[0];
      }
    },
    head() {
      return {
        title: this.activeTitle,
        titleTemplate: `%s - ${WEBSITE_TAG}`,
        meta: [
          { hid: 'description', name: 'description', content: this.activeSubTitle},
          { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
          { hid: 'og-desc', property: 'og:description', content: this.activeSubTitle},
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
