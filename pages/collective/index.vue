<template>
  <div>
    <Hero :title="title">
      <p>A group of creators with backgrounds in engineering, design, and systems that make a difference. Human-focused, human-forward.</p>
    </Hero>
    <section class="section">
      <div class="content content-full">
        <ul class="list-people">
          <li v-if="member.fields.showInCollective === true" v-for="member in members" :key="member.fields.slug">
            <NuxtLink :to="/collective/+`${member.fields.slug}`" class="no-underline">
              <h2 class="h2">{{ member.fields.name }}</h2>
              <p class="p-gray">{{ member.fields.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
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
        titleTemplate: '%s - Bia',
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