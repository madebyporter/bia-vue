<template>
  <section class="section-dark">
    <div class="content content-full">
      <div class="accordion">
        <div class="accordion-item" v-for="(faq, i) in content" :key="i">
          <label class="accordion-panel">
            <h2 v-html="faq.question" class="accordion-header h1 margin-b-0"></h2>
            <input name="accordion" type="radio" />
            <div class="accordion-content">
              <p>{{faq.answer}}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['content']
}
</script>

