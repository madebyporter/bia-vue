<template>
  <div>
    <Hero :title="title">
      <p>We are designers who have joined as a collective to solve future challenges for humanity. A small team delivering big results–we approach our work through the lens of curiosity, diversity, and authenticity.</p>
        
      <p>Learn more about each of us through our <a href="https://en.wikipedia.org/wiki/Myers–Briggs_Type_Indicator">Myers-Briggs Type Indicators</a>.</p>
    </Hero>
    <section class="section">
      <div class="content content-full sub-grid-thirds">
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-stephenmiller.jpg" alt="Stephen Miller" />
          <h2 class="h2">Stephen Miller</h2>
          <p class="">ENTP</p>
          <p class="p-gray margin-y-0">Seeker/inventor</p>
        </div>
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-chrisporter.jpg" alt="Chris Porter" />
          <h2 class="h2">Chris Porter</h2>
          <p class="margin-b-0">INTJ</p>
          <p class="p-gray margin-y-0">Analyst/scientist</p>
        </div>
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-monicathynguyen.jpg" alt="Monica Thy Nguyen" />
          <h2 class="h2">Monica Thy Nguyen</h2>
          <p class="margin-b-0">INFJ</p>
          <p class="p-gray margin-y-0">Humanist/empath</p>
        </div>
      </div>
    </section>

    <AccordionItems :content="faqs" />
  </div>
</template>

<script>
import AccordionItems from '@/components/accordion-items.vue'
  export default {
    components: {
      AccordionItems
    },
    data() {
      return {
        title: 'About',
        description: ``,
        faqs: [
          {
            question: 'who we <span class="s-underline-white">be</span>lieve',
            answer: "Companies, entities, and individuals who value communities, transparency interested in working with a small team to produce big results for humaity’s future."
          },
          {
            question: 'how we <span class="s-underline-white">be</span>have',
            answer: 'First principle thinkers by design, they find themselves more at home in quantum physics creation myth we are so familiar with.'
          },
          {
            question: 'why we <span class="s-underline-white">be</span>long',
            answer: 'Quality, aesthetics, and care through experiences for people to build sustainable systems overtime for our Human problems.'
          },
        ]
      }
    },
    head() {
      return {
        title: this.title,
        titleTemplate: '%s - Bia',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
  }
</script>
