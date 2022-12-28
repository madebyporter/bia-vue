<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ journal.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy-0" v-if="journal.fields.heroImage">
      <div class="content-wide">
        <div class="hero-image">
          <img :src="`${journal.fields.heroImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <aside class="content-sidebar-aside" v-if="journal.fields.topic">
          <h2 class="list-header h6 h-border">Topics</h2>
          <ul class="list-default">
            <li v-for="t in journal.fields.topic">
              {{ t.fields.title }}
            </li>
          </ul>
        </aside>

        <aside class="content-sidebar-aside" v-if="journal.fields.roles">
          <h2 class="list-header h6 h-border">Collaborators</h2>
          <ul class="list-default">
            <li v-for="c in journal.fields.collaborators">
              <div class="list-item-avatar">
                <p class="avatar-small" v-if="c.fields.avatar"><img :src="`${c.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-item-person">
                <h3 class="h-mb-0 person-name">
                  <NuxtLink :to="/collective/+`${c.fields.slug}`" class="no-underline">
                    {{ c.fields.name }}
                  </NuxtLink>
                </h3>
                <p class="person-role">
                  <span class="person-role-title" v-for="discipline in c.fields.disciplines" :key="discipline.fields.title">{{discipline.fields.title}}</span>
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
      <div class="content-post-sidebar">
        <div class="content-inner" v-if="journal.fields.content">
          <div class="content-text" v-html="$md.render(journal.fields.content)"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: [
      'slug'
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
        title: this.journal.fields.title,
        titleTemplate: '%s - Bia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.journal.fields.title
          }
        ]
      };
    }
  }
</script>
