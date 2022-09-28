<template>
  <section class="section">
    <div class="content-full">
      <h1 class="h1">{{ cases.fields.title }}</h1>
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
      <aside>
        <h2>Team:</h2>
        <ul>
          <li v-if="cases.fields.teamMemberA">
            <p v-if="cases.fields.teamMemberA.fields.avatar"><img :src="`${cases.fields.teamMemberA.fields.avatar.fields.file.url}`" /></p>
            <h3>{{ cases.fields.teamMemberA.fields.name }}</h3>
            <p>{{ cases.fields.teamRoleA.fields.title }}</p>
          </li>
          <li v-if="cases.fields.teamMemberB">
            <p v-if="cases.fields.teamMemberB.fields.avatar"><img :src="`${cases.fields.teamMemberB.fields.avatar.fields.file.url}`" /></p>
            <h3>{{ cases.fields.teamMemberB.fields.name }}</h3>
            <p>{{ cases.fields.teamRoleB.fields.title }}</p>
          </li>
          <li v-if="cases.fields.teamMemberC">
            <p v-if="cases.fields.teamMemberC.fields.avatar"><img :src="`${cases.fields.teamMemberC.fields.avatar.fields.file.url}`" /></p>
            <h3>{{ cases.fields.teamMemberC.fields.name }}</h3>
            <p>{{ cases.fields.teamRoleC.fields.title }}</p>
          </li>
          <li v-if="cases.fields.teamMemberD">
            <p v-if="cases.fields.teamMemberD.fields.avatar"><img :src="`${cases.fields.teamMemberD.fields.avatar.fields.file.url}`" /></p>
            <h3>{{ cases.fields.teamMemberD.fields.name }}</h3>
            <p>{{ cases.fields.teamRoleD.fields.title }}</p>
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
        <h2>Carousel Images:</h2>
        <ul>
          <li v-for="postImage in cases.fields.postImages">
            <img :src="`${postImage.fields.file.url}`" />
          </li>
        </ul>
      </div>

      <div v-if="cases.fields.finalMockupImage">
        <h2>Final Mockup Image:</h2>
        <img :src="`${cases.fields.finalMockupImage.fields.file.url}`" />
      </div>
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