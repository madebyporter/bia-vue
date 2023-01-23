<template>
  <div class="person">
    <h4 class="h4 h-mb-0 person-name">
      <NuxtLink :to="personLink" class="no-underline">
        {{ personName }}
      </NuxtLink>
    </h4>
    <div class="person-role">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      personLink: String,
      personName: String,
    }
  }
</script>