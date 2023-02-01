<template>
  <infinite-scroll 
    :content="content" 
    :slug="slug" />
</template>

<script>
import SingleJournal from './single-journal.vue'
import InfiniteScroll from '@/components/infinite-scroll.vue'

export default {
  components: {
    SingleJournal,
    InfiniteScroll
  },
  computed: {
    journal() {
      let journal = this.$store.state.journalData.journal.filter(
        el => el.fields.slug === this.slug
      );
      let journalResource = this.$store.state.journalData.journalResourceList.filter(
        el => el.fields.slug === this.slug
      );
      return journal[0] || journalResource[0];
    },
    content() {
      if (this.journal.type === 'journal') {
        return {store: 'journalData', name: 'journal'};
      } else if (this.journal.type === 'journalResourceList') {
        return {store: 'journalData', name: 'journalResourceList'};
      }
    },
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
