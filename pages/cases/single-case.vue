<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ cases.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy-0">
      <div class="content-wide">
        <div class="hero-image" v-if="cases.fields.featuredImage"><img :src="`${cases.fields.featuredImage.fields.file.url}`" /></div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <aside class="content-sidebar-aside" v-if="cases.fields.type">
          <ul class="list-default">
            <li><h3>{{ cases.fields.type }}</h3></li>
          </ul>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.delivarables">
          <h2 class="list-header h6">Deliverables</h2>
          <ul class="list-default">
            <li v-for="delivarables in cases.fields.delivarables">
              {{ delivarables }}
            </li>
          </ul>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.roles">
          <h2 class="list-header h6">Team</h2>
          <ul class="list-default">
            <li v-for="(role, i) in cases.fields.roles" :key="'role-'+i">
              <div class="list-item-avatar">
                <p class="avatar-small" v-if="role.fields.member.fields.avatar"><img :src="`${role.fields.member.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-item-person">
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
        </aside>
      </div>

      <div class="content-post-sidebar">
        <div class="content-inner" v-if="cases.fields.challenge">
          <h2 class="content-header h6">Challenge:</h2>
          <div class="p-large" v-if="cases.fields.challenge">{{ cases.fields.challenge }}</div>
        </div>

        <div class="content-inner" v-if="cases.fields.solution">
          <h2 class="content-header h6">Solution:</h2>
          <div class="p-large" v-if="cases.fields.solution">{{ cases.fields.solution }}</div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="content-full">
        <div v-if="cases.fields.bodyImage"><img class="case-image-full image-rounded" :src="`${cases.fields.bodyImage.fields.file.url}`" /></div>
      </div>
    </section>

    <section class="section-xy-0">
      <div class="content-wide">
        <div class="carousel">
          <ul class="carousel-track">
            <li class="carousel-element" v-for="postImage in cases.fields.postImages">
              <img class="image-rounded" :src="`${postImage.fields.file.url}`" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="content-full">
        <div v-if="cases.fields.imageFloatLeft"><img class="case-image-left image-rounded" :src="`${cases.fields.imageFloatLeft.fields.file.url}`" /></div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-normal">
        <div class="p-large" v-if="cases.fields.bodyContent" v-html="$md.render(cases.fields.bodyContent)"></div>
      </div>
    </section>


    <section class="section">
      <div class="content-wide">
        <div v-if="cases.fields.finalMockupImage">
          <img class="case-image-full image-rounded" :src="`${cases.fields.finalMockupImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.imageFloatRight">
      <div class="content-full">
        <img class="case-image-right image-rounded" :src="`${cases.fields.imageFloatRight.fields.file.url}`" />
      </div>
    </section>
  </div>
</template>

<script>

export default {
  props: [
    'slug'
  ],
  computed: {
    cases() {
      let cases = this.$store.state.caseData.cases.filter(
        el => el.fields.slug === this.slug
      );
      return cases[0];
    },
  },
  head() {
    return {
      title: this.cases.fields.title,
      titleTemplate: '%s - Case Studies - Bia',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.cases.fields.title
        }
      ]
    };
  }
}
</script>
