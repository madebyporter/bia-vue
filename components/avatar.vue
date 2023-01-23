<template>
  <div class="avatar">
    <img :src="imgSrc" />
  </div>
</template>

<script>
  export default {
    props: {
      imgSrc: String,
    }
  }
</script>