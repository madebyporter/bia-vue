<template>
  <section>
    <section class="hero">
      <h1>{{title}}</h1>
    </section>
    <section class="content" >
      <ul>
        <li v-for="post in posts" :key="post.fields.slug" @click="$router.push(`/collective/${post.fields.slug}`)">
          <h2>{{ post.fields.name }}</h2>
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