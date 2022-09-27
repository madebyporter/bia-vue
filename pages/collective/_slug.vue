<template>
  <section class="section">
    <div class="content-full">
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
      <div>
        <h2>Cases:</h2>
        <div v-for="cases in cases">
          <ul v-if="cases.fields.teamMemberA.fields.slug === member.fields.slug" v-for="team in cases.fields.teamMemberA">
            <li v-if="team.slug === member.fields.slug" :key="cases.fields.slug">
              <h2><NuxtLink :to="/cases/+`${cases.fields.slug}`">{{ cases.fields.title }}</NuxtLink></h2>
              <p>{{ cases.fields.challenge }}</p>
            </li>
          </ul>
          <ul v-if="cases.fields.teamMemberB.fields.slug === member.fields.slug" v-for="team in cases.fields.teamMemberB">
            <li v-if="team.slug === member.fields.slug" :key="cases.fields.slug">
              <h2><NuxtLink :to="/cases/+`${cases.fields.slug}`">{{ cases.fields.title }}</NuxtLink></h2>
              <p>{{ cases.fields.challenge }}</p>
            </li>
          </ul>
          <ul v-if="cases.fields.teamMemberC.fields.slug === member.fields.slug" v-for="team in cases.fields.teamMemberC">
            <li v-if="team.slug === member.fields.slug" :key="cases.fields.slug">
              <h2><NuxtLink :to="/cases/+`${cases.fields.slug}`">{{ cases.fields.title }}</NuxtLink></h2>
              <p>{{ cases.fields.challenge }}</p>
            </li>
          </ul>
          <ul v-if="cases.fields.teamMemberD.fields.slug === member.fields.slug" v-for="team in cases.fields.teamMemberD">
            <li v-if="team.slug === member.fields.slug" :key="cases.fields.slug">
              <h2><NuxtLink :to="/cases/+`${cases.fields.slug}`">{{ cases.fields.title }}</NuxtLink></h2>
              <p>{{ cases.fields.challenge }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2>Ventures:</h2>
        <div v-for="venture in ventures">
          <div v-for="team in venture.fields.team">
            <ul v-if="team.fields.slug === member.fields.slug">
              <li :key="venture.fields.slug">
                <h2><NuxtLink :to="/cases/+`${venture.fields.slug}`">{{ venture.fields.title }}</NuxtLink></h2>
                <p>{{ venture.fields.summary }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      },
      cases() {
        return this.$store.state.caseData.cases;
      },
      ventures() {
        return this.$store.state.ventureData.ventures;
      }
    },
    head() {
      return {
        title: this.member.fields.name
      };
    }
  }
</script>