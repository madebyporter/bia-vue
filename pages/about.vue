<template>
  <div>
    <Hero :title="title" description="A collective group of designers, engineers, thinkers, makers creators that get shit done for the better of humanity. Consciousness explained. Dive deeper into our personality and vibe and resonate with us. Based on MBTI and Carl Jung Socionics. We look like Pokemon cards."></Hero>
    <section class="section">
      <div class="content content-full sub-grid-thirds">
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-stephenmiller.jpg" alt="Stephen Miller" />
          <h2 class="h2">Stephen Miller</h2>
          <p class="margin-b-0">ENTP</p>
          <p class="p-gray">Seeker/inventor</p>
        </div>
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-chrisporter.jpg" alt="Chris Porter" />
          <h2 class="h2">Chris Porter</h2>
          <p class="margin-b-0">INTJ</p>
          <p class="p-gray">Analyst/scientist</p>
        </div>
        <div class="card card-person">
          <img class="card-image image-rounded" src="~/assets/img/people/person-monicathynguyen.jpg" alt="Monica Thy Nguyen" />
          <h2 class="h2">Monica Thy Nguyen</h2>
          <p class="margin-b-0">INFJ</p>
          <p class="p-gray">Humanist/empath</p>
        </div>
      </div>
    </section>

    <section class="section-dark">
      <div class="content content-full">
        <div class="accordion">
          <div class="accordion-item closed">
            <div class="accordion-panel">
              <h2 class="h1 margin-b-0">who we <span class="s-underline-white">be</span>lieve</h2>
            </div>
            <div class="accordion-content">
              <p>First principle thinkers by design, they find themselves more at home in quantum physics creation myth we are so familiar with.</p>
            </div>
          </div>
          <div class="accordion-item closed">
            <div class="accordion-panel">
              <h2 class="h1 margin-b-0">how we <span class="s-underline-white">be</span>have</h2>
            </div>
            <div class="accordion-content">
              <p>First principle thinkers by design, they find themselves more at home in quantum physics creation myth we are so familiar with.</p>
            </div>
          </div>
          <div class="accordion-item opened">
            <div class="accordion-panel">
              <h2 class="h1 margin-b-0">why we <span class="s-underline-white">be</span>long</h2>
            </div>
            <div class="accordion-content">
              <p>First principle thinkers by design, they find themselves more at home in quantum physics creation myth we are so familiar with.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About'
      }
    },
    head() {
      return {
        title: this.title,
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