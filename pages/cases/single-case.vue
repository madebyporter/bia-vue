<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ cases.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy-0" v-if="cases.fields.featuredImage">
      <div class="content-wide">
        <div class="hero-image">
          <img :src="`${cases.fields.featuredImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <aside class="content-sidebar-aside" v-if="cases.fields.type">
          <ul class="list-default">
            <li><div class="tag">{{ cases.fields.type }}</div></li>
          </ul>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.delivarables">
          <h2 class="list-header h6 h-border">Deliverables</h2>
          <ul class="list-default">
            <li v-for="delivarables in cases.fields.delivarables">
              {{ delivarables }}
            </li>
          </ul>
        </aside>

        <aside class="content-sidebar-aside" v-if="cases.fields.roles">
          <h2 class="list-header h6 h-border">Team</h2>
          <ul class="list-default">
            <li v-for="(role, i) in cases.fields.roles" :key="'role-'+i">
              <div class="list-item-avatar">
                <p class="avatar-small" v-if="role.fields.member.fields.avatar"><img :src="`${role.fields.member.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-item-person">
                <h3 class="h-mb-0 person-name">
                  <NuxtLink :to="/collective/+`${role.fields.member.fields.slug}`" class="no-underline">
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
          <h2 class="content-header h6 h-border">Challenge</h2>
          <div class="content-text" v-if="cases.fields.challenge" v-html="$md.render(cases.fields.challenge)"></div>
        </div>

        <div class="content-inner" v-if="cases.fields.solution">
          <h2 class="content-header h6 h-border">Solution</h2>
          <div class="content-text" v-if="cases.fields.solution" v-html="$md.render(cases.fields.solution)"></div>
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.bodyImage">
      <div class="content-full">
        <div class="case-image-full">
          <img class="image-rounded" :src="`${cases.fields.bodyImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-x-0" v-if="cases.fields.postImages">
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

    <section class="section" v-if="cases.fields.imageFloatLeft">
      <div class="content-full">
        <div class="case-image-left">
          <img class="image-rounded" :src="`${cases.fields.imageFloatLeft.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large" v-if="cases.fields.bodyContent">
      <div class="content-normal">
        <div class="content-text" v-html="$md.render(cases.fields.bodyContent)"></div>
      </div>
    </section>


    <section class="section" v-if="cases.fields.finalMockupImage">
      <div class="content-wide">
        <div class="case-image-full">
          <img class="image-rounded" :src="`${cases.fields.finalMockupImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section" v-if="cases.fields.imageFloatRight">
      <div class="content-full">
        <div class="case-image-right">
          <img class="image-rounded" :src="`${cases.fields.imageFloatRight.fields.file.url}`" />
        </div>
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
