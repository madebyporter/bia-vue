<template>
  <section>
    <h1>{{ post.fields.name }}</h1>
    <p v-if="post.fields.title">{{ post.fields.title }}</p>
    <p v-if="post.fields.bio">{{ post.fields.bio }}</p>
    <p v-if="post.fields.avatar"><img :src="`${post.fields.avatar.fields.file.url}`" /></p>

    <div v-if="post.fields.links">
      <h2>Links:</h2>
      <ul>
        <li v-for="link in post.fields.links">
          <a :href="`${link}`">{{ link }}</a>
        </li>
      </ul>
    </div>
    
    <div v-if="post.fields.disciplines">
      <h2>Disciplines:</h2>
      <ul>
        <li v-for="discipline in post.fields.disciplines">
          {{ discipline }}
        </li>
      </ul>
    </div>

    <div v-if="post.fields.verticals">
      <h2>Verticals:</h2>
      <ul>
        <li v-for="vertical in post.fields.verticals">
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
      post() {
        let post = this.$store.state.posts.filter(
          el => el.fields.slug === this.slug
        );
        return post[0];
      }
    },
    head() {
      return {
        title: this.post.fields.name
      };
    }
  }
</script>