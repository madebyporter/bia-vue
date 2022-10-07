<template>
  <infinite-scroll
    :content="{store: 'caseData', name : 'cases'}"
    :slug="slug"
  />
</template>

<script>
import SingleCase from './single-case.vue'
import InfiniteScroll from '@/components/infinite-scroll.vue'

export default {
  components: {
    SingleCase,
    InfiniteScroll
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
