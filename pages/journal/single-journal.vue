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

      <!-- Post Sidebar -->
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
