<template>
  <div>
    <!-- Title -->
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ journalIndex.fields.title }}</h1>
      </div>
    </section>

    <!-- Hero Image -->
    <section class="section-xy-0" v-if="journalIndex.fields.heroImage">
      <div class="content-wide">
        <div class="hero-image">
          <img :src="`${journalIndex.fields.heroImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">

      <!-- Sidebar -->
      <div class="content-sidebar">

        <!-- Topics -->
        <aside class="content-sidebar-aside" v-if="journalIndex.fields.topic">
          <List title="Topics">
            <li v-for="t in journalIndex.fields.topic">
              {{ t.fields.title }}
            </li>
          </List>
        </aside>

        <!-- Collaborators-->
        <aside class="content-sidebar-aside" v-if="journalIndex.fields.collaborators">
          <List title="Collaborators">
            <li v-for="person in journalIndex.fields.collaborators">
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
        <div class="content-inner" v-if="journalIndex.fields.content">
          <div class="content-text" v-html="$md.render(journalIndex.fields.content)"></div>
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
      journalIndex() {
        if (!this.$store.state.journalData) {
          console.error("journalData is not defined in store state");
          return {};
        }

        let journal = this.$store.state.journalData.journal;
        if (!journal) {
          console.error("journal is not defined in journalData");
          return {};
        }
        journal = journal.filter(
          el => el.fields.slug === this.slug
        );

        let journalResourceList = this.$store.state.journalData.journalResourceList;
        if (!journalResourceList) {
          console.error("journalResourceList is not defined in journalData");
          return {};
        }
        journalResourceList = journalResourceList.filter(
          el => el.fields.slug === this.slug
        );

        return journal[0] || journalResourceList[0];
      },
    },
    mounted() {
      console.log(this.journalIndex);
    },
    head() {
      return {
        title: this.journalIndex.fields.title,
        titleTemplate: '%s - Bia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.journalIndex.fields.subTitle
          }
        ]
      };
    }
  }
</script>
