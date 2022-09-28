<template>
  <section class="section">
    <div class="content-full">
      <h1 class="h1">{{ journal.fields.title }}</h1>
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
    </div>
  </section>
</template>

<style>
  img {width: 50%;}
</style>

<script>
  export default {
    data() {
      return {
        slug: this.$route.params.slug
      };
    },
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
        title: this.journal.fields.title
      };
    }
  }
</script>