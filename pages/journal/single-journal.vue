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
        <div class="content-inner" v-if="journal.fields.content">
          <div class="content-text" v-html="$md.render(journal.fields.content)"></div>
        </div>
        <div class="content-inner" v-if="journal.fields.resourceList">
          <ul class="list-default">
            <li v-for="r in journal.fields.resourceList">
              <div class="card card-resource">
                <div class="card-inner card-top">
                  <div class="avatar-group">
                    <div class="avatar-large">
                      <img :src="r.fields.resourceAvatar.fields.file.url" :alt="r.fields.resourceName" />
                    </div>
                    <h3 class="h3 margin-0">
                      <a :href="r.fields.resourceUrl" target="_blank">{{ r.fields.resourceName }}</a>
                    </h3>
                  </div>
                </div>
                <div class="card-inner card-bottom">
                  <div class="tag-group">
                    <div class="tag">
                      {{ r.fields.resourceTags }}
                    </div>
                    <div class="tag">
                      {{ r.fields.resourceType }}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
            content: this.journal.fields.subTitle
          }
        ]
      };
    }
  }
</script>
