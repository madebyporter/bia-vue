<template>
  <section>
    <h1>{{ post.fields.name }}</h1>
    <p>{{ post.fields.title }}</p>
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