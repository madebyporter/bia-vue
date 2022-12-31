<template>
  <div>
    <section class="section">
      <div class="content-half">
        <div v-if="member.fields.avatar" class="profile-image image-rounded"><img :src="`${member.fields.avatar.fields.file.url}`" /></div>
      </div>
      <div class="content-half align-self-center">
        <div class="content-header">
          <h1 class="h1 margin-b-5">{{ member.fields.name }}</h1>
          <p class="p-gray" v-if="member.fields.title">{{ member.fields.title }}</p>
        </div>
        <div v-if="member.fields.bio"  v-html="$md.render(member.fields.bio)"></div>
      </div>
    </section>
    <section class="section-dark section-large padding-b-0">
      <div class="content-full">
        <h2 class="h2">More partner info</h2>
      </div>
    </section>
    <section class="section-dark section-large">
      <div class="content-thirds">
        <List v-if="member.fields.links" title="Links">
          <li v-for="link in member.fields.links">
            <a :href="`${link.fields.linkUrl}`" target="_blank" rel="noreferrer noopener">{{ link.fields.linkType }}</a>
          </li>
        </List>
      </div>
      <div class="content-thirds">
        <List v-if="member.fields.disciplines" title="Disciplines">
          <li v-for="discipline in member.fields.disciplines">
            {{ discipline.fields.title }}
          </li>
        </List>
      </div>
      <div class="content-thirds">
        <List v-if="member.fields.verticals" title="Verticals">
          <li v-for="vertical in member.fields.verticals">
            {{ vertical.fields.title }}
          </li>
        </List>
      </div>
    </section>
    <section class="section-large">
      <div class="content-full">
        <h2 class="h2">Cases</h2>
      </div>
      <div class="content-full">
        <ul class="list-content">
          <li v-for="caseStudy in cases" :key="caseStudy.fields.slug">
            <div class="list-content-left">
              <div class="list-item-image" v-if="caseStudy.fields.featuredImage">
                <NuxtLink :to="/cases/+`${caseStudy.fields.slug}`" class="no-underline">
                  <img class="image-rounded" :src="`${caseStudy.fields.featuredImage.fields.file.url}`" />
                </NuxtLink>
              </div>
            </div>
            <div class="list-content-right">
              <div class="list-content-header">
                <h2 class="h2"><NuxtLink :to="/cases/+`${caseStudy.fields.slug}`" class="no-underline">{{ caseStudy.fields.title }}</NuxtLink></h2>
                <ul class="list-tag">
                  <li v-for="delivarables in caseStudy.fields.delivarables">
                    {{ delivarables }}
                  </li>
                </ul>
              </div>
              <div class="list-content-data">
                <div class="list-content-data-left">
                  <List title="Team">
                    <li v-for="(role, i) in caseStudy.fields.roles" :key="'role-'+i">
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
                    <li v-for="(vertical, i) in caseStudy.fields.verticals">
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
        return this.$store.state.caseData.cases.filter((caseStudy) => {
          if (caseStudy.fields.roles) {
            return caseStudy.fields.roles.some((role) => {
              return role.fields.member.fields.slug === this.slug;
            });
          }
        });
      },
      ventures() {
        return this.$store.state.ventureData.ventures;
      }
    },
    head() {
      return {
        title: this.member.fields.name,
        titleTemplate: '%s - Collective - Bia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.member.fields.bio
          }
        ]
      };
    }
  }
</script>
