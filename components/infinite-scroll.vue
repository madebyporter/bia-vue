<template>
  <div>
    <div v-for="(entry, i) in entries" :key="entry" class="single-post">
      <div v-if="content.name === 'cases'">
        <single-case :activeTitle="title" :activeDesc="description" :slug="entry" />
      </div>
      <div v-if="content.name === 'journal'">
        <single-journal :activeTitle="title" :activeSubTitle="subTitle" :slug="entry" />
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
      meta: [],
      title: '',
      activeIndex: 0,
      description: '',
      subTitle: '',
    }
  },
  props: [
    'content',
    'slug'
  ],
  mounted() {
    let timer = null;
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY + window.innerHeight
      if (timer !== null) {
        clearTimeout(timer);        
      }
      timer = setTimeout(() => {
        this.meta.forEach((entry, key) => {
          if (scrollPosition >= entry.offsetY[0] && scrollPosition <= entry.offsetY[1]) {
            this.title = entry.title
            this.description = entry.description
            this.subTitle = entry.subTitle
            this.activeIndex = key
            if (document.body.scrollHeight === this.meta[this.meta.length - 1].offsetY[1]) {
              history.pushState(null, null, entry.slug)
            }
          }
        })
      }, 150);
    })

    let screenEnd = 0
    let storeEntries = this.$store.state[this.content.store][this.content.name]

    let activeEntry = storeEntries.filter((elem, index) => {
      return elem.fields.slug === this.slug
    })[0]

    this.title = activeEntry.fields.title

    if (this.$route.path.includes('/cases/')) {
      this.description = activeEntry.fields.description;
    } else if (this.$route.path.includes('/journal/')) {
      this.subTitle = activeEntry.fields.subTitle;
    }

    this.activeIndex = storeEntries.indexOf(activeEntry)
    let reorderedEntries = [storeEntries[this.activeIndex], ...storeEntries.slice(0, this.activeIndex), ...storeEntries.slice(this.activeIndex + 1)]

    reorderedEntries.forEach((entry, index, array) => {
      let slug = entry.fields.slug
      setTimeout(() => {
        this.entries.push(slug)
        setTimeout(() => {
          this.meta.push({
            slug,
            title: entry.fields.title,
            description: entry.fields.description,
            subTitle: entry.fields.subTitle,
            offsetY: [screenEnd, document.body.scrollHeight]
          })
          screenEnd = document.body.scrollHeight
        }, 100)
      }, 200 * index)
    })
  }
}
</script>

<style scoped>
.case {
  opacity: .25;
  transition: opacity 1s ease;
}
.case.active {
  opacity: 1;
}
</style>