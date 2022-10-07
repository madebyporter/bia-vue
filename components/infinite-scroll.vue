<template>
  <div>
    <div v-for="entry in active" :key="entry">
      <div v-if="content.name === 'cases'">
        <single-case :slug="entry" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCase from '@/pages/cases/single-case.vue'

export default {
  components: {
    SingleCase
  },
  data() {
    return {
      all: [],
      active: [],
      currentIndex: 0,
      screenHeight: document.body.scrollHeight
    }
  },
  props: [
    'content',
    'slug'
  ],
  methods: {
    populateEntries() {
      this.$store.state[this.content.store][this.content.name].forEach((elem, index, array) => {
        this.all.push(elem.fields.slug)
        if (this.slug === elem.fields.slug) {
          this.currentIndex = index
          this.active.push(elem.fields.slug)
        }
      })
    },
    snapToNext() {
      var x = 0;
      var y = this.bottomOfScreen;
    },
    disableSnapping(){
      window.onscroll = function() { };
    },
  },
  mounted() {
    this.populateEntries();
    const loadNew = new IntersectionObserver(elems => {
      elems.forEach(elem => {
        if (elem.isIntersecting) {
          this.currentIndex = this.all[this.currentIndex + 1] ? this.currentIndex + 1 : 0
          let nextEntry = this.all[this.currentIndex]
          this.active.push(nextEntry)
          window.history.pushState({}, document.title, nextEntry);
          window.scrollTo({top: this.screenHeight, behavior: 'smooth'});
          window.setTimeout(() => {
            this.active.shift()
            this.screenHeight = document.body.scrollHeight
          }, 1000)
        }
      });
    });

    loadNew.observe(document.querySelector('.global-footer'));
  }
}
</script>
