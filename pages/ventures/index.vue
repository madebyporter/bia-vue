<template>
  <section>
    <section class="hero">
      <h1>{{title}}</h1>
    </section>
    <section class="content" >
      <ul>
        <li v-for="venture in ventures" :key="venture.fields.slug">
          <h2><NuxtLink :to="/ventures/+`${venture.fields.slug}`">{{ venture.fields.title }}</NuxtLink></h2>
          <p>{{ venture.fields.summary }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Ventures'
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
      ventures() {
        return this.$store.state.ventureData.ventures;
      }
    },
  }
</script>