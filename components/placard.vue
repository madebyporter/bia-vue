<template>
  <div class="placard">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      avatarData: String,
      personData: String,
      personImageData: String,
      personNameData: String,
      personRoleData: String,
      personRoleType: String,
      personRoleTitleData: String,
    }
  }
</script>