<template>
  <section>
    <h1>{{ cases.fields.title }}</h1>
    <p v-if="cases.fields.summary">{{ cases.fields.summary }}</p>
    <div v-if="cases.fields.delivarables">
      <h2>Deliverables:</h2>
      <ul>
        <li v-for="delivarables in cases.fields.delivarables">
          {{ delivarables }}
        </li>
      </ul>
    </div>
    <div v-if="cases.fields.team">
      <h2>Team:</h2>
      <ul>
        <li v-for="team in cases.fields.team">
          {{ team.fields.name }}
        </li>
      </ul>
    </div>
    <div v-if="cases.fields.disciplines">
      <h2>Disciplines:</h2>
      <ul>
        <li v-for="disciplines in cases.fields.disciplines">
          {{ disciplines.fields.title }}
        </li>
      </ul>
    </div>
    
    <p v-if="cases.fields.featuredImage"><img :src="`${cases.fields.featuredImage.fields.file.url}`" /></p>

    <div v-if="cases.fields.postImages">
      <h2>postImages:</h2>
      <ul>
        <li v-for="postImage in cases.fields.postImages">
          <img :src="`${postImage.fields.file.url}`" />
        </li>
      </ul>
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
      cases() {
        let cases = this.$store.state.caseData.cases.filter(
          el => el.fields.slug === this.slug
        );
        return cases[0];
      }
    },
    head() {
      return {
        title: this.cases.fields.name
      };
    }
  }
</script>