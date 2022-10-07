<template>
  <infinite-scroll
    :content="{store: 'ventureData', name : 'ventures'}"
    :slug="slug"
  />
</template>

<script>
import SingleVenture from './single-venture.vue'
import InfiniteScroll from '@/components/infinite-scroll.vue'

export default {
  components: {
    SingleVenture,
    InfiniteScroll
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  }
}
</script>
