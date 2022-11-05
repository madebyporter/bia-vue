<template>
  <div>
    <div v-for="entry in active" :key="entry">
      <div v-if="content.name === 'cases'">
        <single-case :slug="entry" />
      </div>
      <div v-if="content.name === 'journal'">
        <single-journal :slug="entry" />
      </div>
      <div v-if="content.name === 'ventures'">
        <single-venture :slug="entry" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCase from '@/pages/cases/single-case.vue'
import SingleJournal from '@/pages/journal/single-journal.vue'
import SingleVenture from '@/pages/ventures/single-venture.vue'

export default {
  components: {
    SingleCase,
    SingleJournal,
    SingleVenture
  },
  data() {
    return {
      all: [],
      active: [],
      firstIndex: 0,
      currentIndex: 0,
      scrollYPositions: [],
      screenHeight: document.body.scrollHeight,
      timeout: null
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
          this.active.push(elem.fields.slug)
          this.firstIndex = index
          this.currentIndex = index
          this.screenHeight = document.body.scrollHeight
          this.scrollYPositions.push([0, document.body.scrollHeight])
        }
      })
    },
    loadNext() {
      const footerHeight = document.querySelector('.global-footer').offsetHeight
      if (this.timeout !== null) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout((() => {
        window.onscroll = () => {
          this.scrollYPositions.forEach((entry) => {
            if (window.scrollY >= entry[0] && window.scrollY <= entry[1]) {
              let currentIndex = this.scrollYPositions.indexOf(entry)
              window.history.pushState({}, document.title, this.active[currentIndex])
            }
          })

          if (window.innerHeight + window.scrollY >= document.body.scrollHeight - footerHeight) {
            this.currentIndex = this.all[this.currentIndex + 1] ? this.currentIndex + 1 : 0
            let nextEntry = this.all[this.currentIndex]
            if (this.active.includes(nextEntry)) return;
            this.active.push(nextEntry)
            this.scrollYPositions.push([this.screenHeight, document.body.scrollHeight])
            this.screenHeight = document.body.scrollHeight
          }
        }
      }), 100);
    }
  },
  mounted() {
    this.populateEntries();
    if (this.all.length > 1) {
      this.loadNext();
    }
  }
}
</script>
