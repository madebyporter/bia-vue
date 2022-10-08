<template>
  <section class="hero section">
    <div class="content-50">
      <h1 class="h1">{{title}}</h1>
    </div>
    <div class="content-50 align-self-center">
      <p class="margin-b-0">{{ description }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String
    }
  }
</script>