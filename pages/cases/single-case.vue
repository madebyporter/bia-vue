<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ cases.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy-0" v-if="cases.fields.featuredImage">
      <div class="content-wide">
        <div class="hero-image">
          <img :src="`${cases.fields.featuredImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <!-- Sidebar-->
        <aside class="content-sidebar-aside-header" v-if="cases.fields.type">
          <List>
            <li><div class="tag">{{ cases.fields.type }}</div></li>
          </List>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.delivarables">
          <List title="Deliverables">
            <li v-for="delivarables in cases.fields.delivarables">
              {{ delivarables }}
            </li>
          </List>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.roles">
          <List title="Team">
            <li v-for="(role, i) in cases.fields.roles" :key="'role-'+i">
              <Placard>
                <Avatar v-if="role.fields.member.fields.avatar" :imgSrc="role.fields.member.fields.avatar.fields.file.url"></Avatar>
                <Person :personLink="/collective/+`${role.fields.member.fields.slug}`" :personName="role.fields.member.fields.name">
                  <p class="p-small" v-for="(discipline, i) in role.fields.disciplines" :key="i" v-if="i === 0">
                    {{discipline.fields.title}}
                  </p>
                </Person>
              </Placard>
            </li>
          </List>
        </aside>
      </div>

      <div class="content-post-sidebar">
        <div class="content-inner" v-if="cases.fields.challenge">
          <h2 class="content-header h6 h-border">Challenge</h2>
          <div class="content-text" v-if="cases.fields.challenge" v-html="$md.render(cases.fields.challenge)"></div>
        </div>

        <div class="content-inner" v-if="cases.fields.solution">
          <h2 class="content-header h6 h-border">Solution</h2>
          <div class="content-text" v-if="cases.fields.solution" v-html="$md.render(cases.fields.solution)"></div>
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.bodyImage">
      <div class="content-full">
        <div class="case-image-full">
          <img class="image-rounded" :src="`${cases.fields.bodyImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-x-0" v-if="cases.fields.postImages">
      <div class="content-wide">
        <div class="carousel">
          <ul class="carousel-track">
            <li class="carousel-element" v-for="postImage in cases.fields.postImages">
              <img class="image-rounded" :src="`${postImage.fields.file.url}`" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.imageFloatLeft">
      <div class="content-full">
        <div class="case-image-left">
          <img class="image-rounded" :src="`${cases.fields.imageFloatLeft.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large" v-if="cases.fields.bodyContent">
      <div class="content-normal">
        <div class="content-text" v-html="$md.render(cases.fields.bodyContent)"></div>
      </div>
    </section>


    <section class="section" v-if="cases.fields.finalMockupImage">
      <div class="content-wide">
        <div class="case-image-full">
          <img class="image-rounded" :src="`${cases.fields.finalMockupImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.imageFloatRight">
      <div class="content-full">
        <div class="case-image-right">
          <img class="image-rounded" :src="`${cases.fields.imageFloatRight.fields.file.url}`" />
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
      'activeDesc'
    ],
    computed: {
      cases() {
        let cases = this.$store.state.caseData.cases.filter(
          el => el.fields.slug === this.slug
        );
        return cases[0];
      },
    },
    head() {
      return {
        title: this.activeTitle,
        titleTemplate: `%s - ${WEBSITE_TAG}`,
        meta: [
          { hid: 'description', name: 'description', content: this.activeDesc},
          { hid: 'og-title', property: 'og:title', content: `${this.title} - ${WEBSITE_TAG}` },
          { hid: 'og-desc', property: 'og:description', content: this.activeDesc },
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
    }
  }
</script>
