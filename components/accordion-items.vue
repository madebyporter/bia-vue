<template>
  <section class="section-dark">
    <div class="content content-full">
      <div class="accordion">
        <div class="accordion-item" v-for="(ds, i) in dataSource" :key="i">
          <label @click="active === i ? active = null : active = i" class="accordion-panel">
            <h2 class="accordion-header h1 margin-b-0">{{ ds.key }}</h2>
            <div :class="active === i ? 'accordion-content open': 'accordion-content'">
              <p>{{ ds.value }}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: null
    }
  },
  watch: {
    active() {
      console.log(this.active)
    }
  }
}
</script>