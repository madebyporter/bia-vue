<template>
  <div>
    <Hero :title="title">
      <p>Work we’ve created that’s stimulating, curious, and smart–with real-world feedback. We know the rules and strive to break them in order to create a connection that is authentic, emotional, and powerful.</p>
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
                  <h3 class="h3 list-content-data-heading">Collaborators</h3>
                  <ul class="list-default">
                    <li class="align-items-start" v-for="(person, i) in journal.fields.collaborators" :key="'person-'+i">
                      <div class="list-item-avatar">
                        <p class="avatar-small" v-if="person.fields.avatar"><img :src="`${person.fields.avatar.fields.file.url}`" /></p>
                      </div>
                      <div class="list-item-person">
                        <h4 class="h4 h-mb-0 person-name">
                          <NuxtLink :to="/collective/+`${person.fields.slug}`" class="no-underline">
                            {{ person.fields.name }}
                          </NuxtLink>
                        </h4>
                        <p class="person-role">
                          <span class="person-role-title" v-for="discipline in person.fields.disciplines" :key="discipline.fields.title">{{discipline.fields.title}}</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-content-data-right">
                  <h3 class="h3 list-content-data-heading">Topics</h3>
                  <ul class="list-default">
                    <li v-for="(topic, i) in journal.fields.topic">
                      <p>{{ topic.fields.title }}</p>
                    </li>
                  </ul>
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
  export default {
    data() {
      return {
        title: 'Journal'
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
        ]
      }
    },
    computed: {
      journal() {
        return this.$store.state.journalData.journal;
      }
    },
  }
</script>