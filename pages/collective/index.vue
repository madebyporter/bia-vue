<template>
  <section>
    <section class="hero">
      <h1>{{title}}</h1>
    </section>
    <section class="content" >
      <ul>
        <li v-for="member in members" :key="member.fields.slug">
          <h2><NuxtLink :to="/collective/+`${member.fields.slug}`">{{ member.fields.name }}</NuxtLink></h2>
          <p>{{ member.fields.title }}</p>
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
      members() {
        return this.$store.state.memberData.members;
      },
    },
  }
</script>