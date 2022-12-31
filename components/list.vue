<template>
  <div class="list">
    <h2 class="list-header h6 h-border" v-if="title">{{ title }}</h2>
    <ul class="list-default">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    }
  }
</script>