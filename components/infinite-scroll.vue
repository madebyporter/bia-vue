<template>
  <div>
    <div v-for="entry in entries" :key="entry">
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
      entries: [],
      meta: []
    }
  },
  props: [
    'content',
    'slug'
  ],
  mounted() {
    window.onscroll = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 2
      setTimeout(() => {
        this.meta.forEach((entry) => {
          if (scrollPosition >= entry.offsetY[0] && scrollPosition <= entry.offsetY[1]) {
            document.title = entry.title
            history.pushState(null, null, entry.slug)
          }
        })
      }, 500)
    }

    let screenEnd = 0
    let storeEntries = this.$store.state[this.content.store][this.content.name]

    let activeEntry = storeEntries.filter((elem, index) => {
      return elem.fields.slug === this.slug
    })[0]

    let activeIndex = storeEntries.indexOf(activeEntry)
    let reorderedEntries = [storeEntries[activeIndex], ...storeEntries.slice(0, activeIndex), ...storeEntries.slice(activeIndex + 1)]

    reorderedEntries.forEach((entry, index, array) => {
      let slug = entry.fields.slug
      setTimeout(() => {
        this.entries.push(slug)
        setTimeout(() => {
          this.meta.push({
            slug,
            title: document.title,
            offsetY: [screenEnd, document.body.scrollHeight]
          })
          document.title = this.meta.filter((entry) => entry.slug === this.slug)[0].title
          screenEnd = document.body.scrollHeight
        }, 100)
      }, 200 * index)
    })
    setTimeout(() => {
      document.title = this.meta.filter(entry => entry.slug === this.slug)[0].title
    }, 300 * reorderedEntries.length)
  }
}
</script>
