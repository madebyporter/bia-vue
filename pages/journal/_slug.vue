<template>
  <infinite-scroll
    :content="{store: 'journalData', name : 'journal'}"
    :slug="slug"
  />
</template>

<script>
import SingleJournal from './single-journal.vue'
import InfiniteScroll from '@/components/infinite-scroll.vue'

export default {
  components: {
    SingleJournal,
    InfiniteScroll
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
