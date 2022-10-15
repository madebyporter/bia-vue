<template>
  <section class="hero section">
    <div class="content-half">
      <h1 class="h1">{{title}}</h1>
    </div>
    <div class="content-half align-self-center">
      <p>{{ description }}</p>
      <p v-if="description2" >{{ description2 }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      description2: String,
    }
  }
</script>