<template>
  <section>
    <h1>{{ cases.fields.title }}</h1>
    <div v-if="cases.fields.featuredImage"><img :src="`${cases.fields.featuredImage.fields.file.url}`" /></div>
    <p v-if="cases.fields.type">{{ cases.fields.type }}</p>
    <aside v-if="cases.fields.delivarables">
      <h2>Deliverables:</h2>
      <ul>
        <li v-for="delivarables in cases.fields.delivarables">
          {{ delivarables }}
        </li>
      </ul>
    </aside>
    <aside v-if="cases.fields.team">
      <h2>Team:</h2>
      <ul>
        <li v-for="team in cases.fields.team">
          {{ team.fields.name }}
        </li>
      </ul>
    </aside>
    <aside v-if="cases.fields.disciplines">
      <h2>Disciplines:</h2>
      <ul>
        <li v-for="disciplines in cases.fields.disciplines">
          {{ disciplines.fields.title }}
        </li>
      </ul>
    </aside>

    <div v-if="cases.fields.challenge">
      <h2>Challenge:</h2>
      <ul>
        <p v-if="cases.fields.challenge">{{ cases.fields.challenge }}</p>
      </ul>
    </div>

    <div v-if="cases.fields.solution">
      <h2>Solution:</h2>
      <ul>
        <p v-if="cases.fields.solution">{{ cases.fields.solution }}</p>
      </ul>
    </div>

    <div v-if="cases.fields.bodyImage"><img :src="`${cases.fields.bodyImage.fields.file.url}`" /></div>

    <div v-if="cases.fields.bodyContent" v-html="$md.render(cases.fields.bodyContent)"></div>

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