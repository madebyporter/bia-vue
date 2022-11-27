<template>
  <section class="hero section">
    <div class="content-half">
      <h1 class="h1">{{title}}</h1>
    </div>
    <div class="content-half align-self-center">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
    }
  }
</script>