<template>
  <section>
    <section class="hero">
      <h1>{{title}}</h1>
    </section>
    <section class="content" >
      <ul>
        <li v-for="c in cases" :key="c.fields.slug">
          <h2><NuxtLink :to="/cases/+`${c.fields.slug}`">{{ c.fields.title }}</NuxtLink></h2>
          <p>{{ c.fields.type }}</p>
          <p>{{ c.fields.summary }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Cases'
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
      cases() {
        return this.$store.state.caseData.cases;
      }
    },
  }
</script>