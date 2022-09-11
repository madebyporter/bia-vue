<template>
  <section>
    <h1>{{ venture.fields.title }}</h1>
    <p v-if="venture.fields.summary">{{ venture.fields.summary }}</p>
    <div v-if="venture.fields.delivarables">
      <h2>Deliverables:</h2>
      <ul>
        <li v-for="delivarables in venture.fields.delivarables">
          {{ delivarables }}
        </li>
      </ul>
    </div>
    <div v-if="venture.fields.team">
      <h2>Team:</h2>
      <ul>
        <li v-for="team in venture.fields.team">
          {{ team.fields.name }}
        </li>
      </ul>
    </div>
    <div v-if="venture.fields.disciplines">
      <h2>Disciplines:</h2>
      <ul>
        <li v-for="disciplines in venture.fields.disciplines">
          {{ disciplines.fields.title }}
        </li>
      </ul>
    </div>
    
    <p v-if="venture.fields.featuredImage"><img :src="`${venture.fields.featuredImage.fields.file.url}`" /></p>

    <div v-if="venture.fields.postImages">
      <h2>postImages:</h2>
      <ul>
        <li v-for="postImage in venture.fields.postImages">
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
      venture() {
        let venture = this.$store.state.ventureData.ventures.filter(
          el => el.fields.slug === this.slug
        );
        return venture[0];
      }
    },
    head() {
      return {
        title: this.venture.fields.name
      };
    }
  }
</script>