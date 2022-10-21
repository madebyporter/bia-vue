<template>
  <div>
    <section class="section-large">
      <div class="content-full">
        <h1 class="h1 h-mb-0">{{ venture.fields.title }}</h1>
      </div>
    </section>

    <section class="section-xy-0">
      <div class="content-wide">
        <div class="hero-image" v-if="venture.fields.featuredImage">
          <img :src="`${venture.fields.featuredImage.fields.file.url}`" />
        </div>
      </div>
    </section>

    <section class="section-large">
      <div class="content-sidebar">
        <aside v-if="venture.fields.delivarables">
          <h2 class="list-header h6">Deliverables</h2>
          <ul class="list-default">
            <li v-for="delivarables in venture.fields.delivarables">
              {{ delivarables }}
            </li>
          </ul>
        </aside>

        <aside>
          <h2 class="list-header h6">Team</h2>
          <ul class="list-default">
            <li v-for="(role, i) in venture.fields.roles" :key="'role-'+i">
              <div class="list-item-avatar">
                <p class="avatar-small" v-if="role.fields.member.fields.avatar"><img :src="`${role.fields.member.fields.avatar.fields.file.url}`" /></p>
              </div>
              <div class="list-content person">
                <h3 class="h-mb-0 person-name">{{ role.fields.member.fields.name }}</h3>
                <p class="person-role">
                  <span class="person-role-title" v-for="discipline in role.fields.disciplines" :key="discipline.fields.title">{{discipline.fields.title}}</span>
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>

      <div class="content-post-sidebar">
        <div class="content-inner" v-if="venture.fields.bodyContent">
          <div class="p-large">{{ venture.fields.bodyContent }}</div>
        </div>
      </div>
    </section>

    <section class="section-x-0">
      <div class="content-wide">
        <div class="carousel">
          <ul class="carousel-track">
            <li class="carousel-element" v-for="postImage in venture.fields.postImages">
              <img class="image-rounded" :src="`${postImage.fields.file.url}`" />
            </li>
          </ul>
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
      venture() {
        let venture = this.$store.state.ventureData.ventures.filter(
          el => el.fields.slug === this.slug
        );
        return venture[0];
      }
    },
    head() {
      return {
        title: this.venture.fields.name,
        titleTemplate: '%s - Bia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.venture.fields.title
          }
        ]
      };
    }
  }
</script>
