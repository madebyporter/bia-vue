<template>
  <section class="section">
    <div class="hero content-full">
      <h1 class="h1">{{title}}</h1>
    </div>
    <div class="content-full">
      <ul>
        <li v-for="journal in journal" :key="journal.fields.slug">
          <h2><NuxtLink :to="/journal/+`${journal.fields.slug}`">{{ journal.fields.title }}</NuxtLink></h2>

          <div v-if="journal.fields.collaborators">
            <h2>Collaborators:</h2>
            <ul>
              <li v-for="c in journal.fields.collaborators">
                {{ c.fields.name }}
              </li>
            </ul>
          </div>

          <div v-if="journal.fields.topic">
            <h2>Topics:</h2>
            <ul>
              <li v-for="t in journal.fields.topic">
                {{ t.fields.title }}
              </li>
            </ul>
          </div>
            
          <div v-html="$md.render(journal.fields.content)"></div>
        </li>
      </ul>
    </div>
  </section>
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