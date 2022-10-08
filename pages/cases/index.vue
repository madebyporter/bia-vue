<template>
  <div>
    <section class="hero section">
      <div class="content-full sub-grid-50 align-center">
        <h1 class="h1">{{title}}</h1>
        <p>A collective group of designers, engineers, thinkers, makers creators that get shit done for the better of humanity. Consciousness explained.</p>
      </div>
    </section>
    <section class="section">
      <div class="content-full">
        <ul class="list-content">
          <li v-for="cases in cases" :key="cases.fields.slug">
            <div class="list-content-left">
              <div class="list-image" v-if="cases.fields.featuredImage">
                <NuxtLink :to="/cases/+`${cases.fields.slug}`">
                  <img class="image-rounded" :src="`${cases.fields.featuredImage.fields.file.url}`" />
                </NuxtLink>
              </div>
            </div>
            <div class="list-content-right">
              <div class="list-content-header">
                <h2 class="h2"><NuxtLink :to="/cases/+`${cases.fields.slug}`">{{ cases.fields.title }}</NuxtLink></h2>
                <ul class="list-tag">
                  <li v-for="delivarables in cases.fields.delivarables">
                    {{ delivarables }}
                  </li>
                </ul>
              </div>
              <div class="list-content-data">
                <div class="list-content-data-left">
                  <h3 class="h3">Team</h3>
                  <ul class="list-default">
                    <li v-for="(role, i) in cases.fields.roles" :key="'role-'+i">
                      <div class="list-avatar">
                        <p class="avatar-small" v-if="role.fields.member.fields.avatar"><img :src="`${role.fields.member.fields.avatar.fields.file.url}`" /></p>
                      </div>
                      <div class="list-person">
                        <h3 class="h-mb-0 person-name">
                          <NuxtLink :to="/collective/+`${role.fields.member.fields.slug}`">
                            {{ role.fields.member.fields.name }}
                          </NuxtLink>
                        </h3>
                        <p class="person-role">
                          <span class="person-role-title" v-for="discipline in role.fields.disciplines" :key="discipline.fields.title">{{discipline.fields.title}}</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="list-content-data-right">
                  <h3 class="h3">Verticals</h3>
                  <ul class="list-default">
                    <li v-for="(vertical, i) in cases.fields.verticals">
                      {{ vertical.fields.title }}
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
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