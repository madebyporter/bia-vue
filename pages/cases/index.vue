<template>
  <div>
    <Hero :title="title">
      <p>Work we’ve created that’s stimulating, curious, and smart–with real-world feedback. We know the rules and strive to break them in order to create a connection that is authentic, emotional, and powerful.</p>
    </Hero>
    <section class="section-large">
      <div class="content-full">
        <ul class="list-content">
          <li v-for="cases in cases" :key="cases.fields.slug">
            <div class="list-content-left">
              <div class="list-item-image" v-if="cases.fields.featuredImage">
                <NuxtLink :to="/cases/+`${cases.fields.slug}`" class="no-underline">
                  <img class="image-rounded" :src="`${cases.fields.featuredImage.fields.file.url}`" />
                </NuxtLink>
              </div>
            </div>
            <div class="list-content-right">
              <div class="list-content-header">
                <h2 class="h2">
                  <NuxtLink :to="/cases/+`${cases.fields.slug}`" class="no-underline">{{ cases.fields.title }}</NuxtLink>
                </h2>
                <ul class="list-tag">
                  <li v-for="delivarables in cases.fields.delivarables">
                    {{ delivarables }}
                  </li>
                </ul>
              </div>
              <div class="list-content-data">
                <div class="list-content-data-left">
                  <List title="Team">
                    <li v-for="(role, i) in cases.fields.roles" :key="'role-'+i">
                      <Placard>
                        <Avatar v-if="role.fields.member.fields.avatar" :imgSrc="role.fields.member.fields.avatar.fields.file.url"></Avatar>
                        <Person :personLink="/collective/+`${role.fields.member.fields.slug}`" :personName="role.fields.member.fields.name">
                          <p class="p-small" v-for="(discipline, i) in role.fields.disciplines" :key="i" v-if="i === 0">
                            {{discipline.fields.title}}
                          </p>
                        </Person>
                      </Placard>
                    </li>
                  </List>
                </div>
                <div class="list-content-data-right">
                  <List title="Verticals">
                    <li v-for="(vertical, i) in cases.fields.verticals">
                      {{ vertical.fields.title }}
                    </li>
                  </List>
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
        title: 'Case Studies'
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
      cases() {
        return this.$store.state.caseData.cases;
      }
    },
  }
</script>