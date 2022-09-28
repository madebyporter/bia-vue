<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ cases.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy0">
      <div class="content-wide">
        <div class="hero-image" v-if="cases.fields.featuredImage"><img :src="`${cases.fields.featuredImage.fields.file.url}`" /></div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <ul class="list-default">
          <li><h3 v-if="cases.fields.type">{{ cases.fields.type }}</h3></li>
        </ul>

        <aside v-if="cases.fields.delivarables">
          <h2 class="list-header h6">Deliverables</h2>
          <ul class="list-default">
            <li v-for="delivarables in cases.fields.delivarables">
              {{ delivarables }}
            </li>
          </ul>
        </aside>

        <aside>
          <h2 class="list-header h6">Team</h2>
          <ul class="list-default">
            <li v-if="cases.fields.teamMemberA">
              <div class="list-avatar">
                <p class="avatar-small" v-if="cases.fields.teamMemberA.fields.avatar"><img :src="`${cases.fields.teamMemberA.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-content person">
                <h3 class="h-mb-0 person-name">{{ cases.fields.teamMemberA.fields.name }}</h3>
                <p class="person-role">{{ cases.fields.teamRoleA.fields.title }}</p>
              </div>
            </li>
            <li v-if="cases.fields.teamMemberB">
              <div class="list-avatar">
                <p class="avatar-small" v-if="cases.fields.teamMemberB.fields.avatar"><img :src="`${cases.fields.teamMemberB.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-content person">
                <h3 class="h-mb-0 person-name">{{ cases.fields.teamMemberB.fields.name }}</h3>
                <p class="person-role">{{ cases.fields.teamRoleB.fields.title }}</p>
              </div>
            </li>
            <li v-if="cases.fields.teamMemberC">
              <div class="list-avatar">
                <p class="avatar-small" v-if="cases.fields.teamMemberC.fields.avatar"><img :src="`${cases.fields.teamMemberC.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-content person">
                <h3 class="h-mb-0 person-name">{{ cases.fields.teamMemberC.fields.name }}</h3>
                <p class="person-role">{{ cases.fields.teamRoleC.fields.title }}</p>
              </div>
            </li>
            <li v-if="cases.fields.teamMemberD">
              <div class="list-avatar">
                <p class="avatar-small" v-if="cases.fields.teamMemberD.fields.avatar"><img :src="`${cases.fields.teamMemberD.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-content person">
                <h3 class="h-mb-0 person-name">{{ cases.fields.teamMemberD.fields.name }}</h3>
                <p class="person-role">{{ cases.fields.teamRoleD.fields.title }}</p>
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
      <div class="content-wide">
        <div v-if="cases.fields.bodyImage"><img class="case-image-full image-rounded" :src="`${cases.fields.bodyImage.fields.file.url}`" /></div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-full">
        <div class="p-large" v-if="cases.fields.bodyContent" v-html="$md.render(cases.fields.bodyContent)"></div>
      </div>
    </section>

    <section class="section-xy0">
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
      <div class="content-wide">
        <div v-if="cases.fields.finalMockupImage">
          <img class="case-image-full image-rounded" :src="`${cases.fields.finalMockupImage.fields.file.url}`" />
        </div>
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
      cases() {
        let cases = this.$store.state.caseData.cases.filter(
          el => el.fields.slug === this.slug
        );
        return cases[0];
      }
    },
    head() {
      return {
        title: this.cases.fields.name
      };
    }
  }
</script>