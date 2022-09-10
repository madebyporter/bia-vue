<template>
  <section>
    <section class="hero">
      <h1>{{title}}</h1>
    </section>
    <section class="content" >
      <ul>
        <li v-for="post in posts" :key="post.fields.slug">
          <h2><NuxtLink :to="/collective/+`${post.fields.slug}`">{{ post.fields.name }}</NuxtLink></h2>
          <p>{{ post.fields.title }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Collective'
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
      posts() {
        return this.$store.state.posts;
      }
    },
  }
</script>