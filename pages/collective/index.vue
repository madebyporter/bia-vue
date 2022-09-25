<template>
  <section class="section">
    <div class="hero content-full">
      <h1>{{title}}</h1>
    </div>
    <div class="content content-full">
      <ul>
        <li v-for="member in members" :key="member.fields.slug">
          <h2><NuxtLink :to="/collective/+`${member.fields.slug}`">{{ member.fields.name }}</NuxtLink></h2>
          <p>{{ member.fields.title }}</p>
        </li>
      </ul>
    </div>
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