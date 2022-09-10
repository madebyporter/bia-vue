<template>
  <section>
    <h1>{{ member.fields.name }}</h1>
    <p v-if="member.fields.title">{{ member.fields.title }}</p>
    <p v-if="member.fields.bio">{{ member.fields.bio }}</p>
    <p v-if="member.fields.avatar"><img :src="`${member.fields.avatar.fields.file.url}`" /></p>

    <div v-if="member.fields.links">
      <h2>Links:</h2>
      <ul>
        <li v-for="link in member.fields.links">
          <a :href="`${link}`">{{ link }}</a>
        </li>
      </ul>
    </div>
    
    <div v-if="member.fields.disciplines">
      <h2>Disciplines:</h2>
      <ul>
        <li v-for="discipline in member.fields.disciplines">
          {{ discipline.fields.title }}
        </li>
      </ul>
    </div>

    <div v-if="member.fields.verticals">
      <h2>Verticals:</h2>
      <ul>
        <li v-for="vertical in member.fields.verticals">
          {{ vertical }}
        </li>
      </ul>
    </div>

    
  </section>
</template>

<script>
  export default {
    data() {
      return {
        slug: this.$route.params.slug
      };
    },
    computed: {
      member() {
        let member = this.$store.state.memberData.members.filter(
          el => el.fields.slug === this.slug
        );
        return member[0];
      }
    },
    head() {
      return {
        title: this.member.fields.name
      };
    }
  }
</script>