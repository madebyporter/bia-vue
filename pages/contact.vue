<template>
    <div>
      <Hero :title="title" description="A collective group of designers, engineers, thinkers, makers creators that get shit done for the better of humanity. Consciousness explained." description2="Dive deeper into our personality and vibe and resonate with us. Based on MBTI and Carl Jung Socionics. We look like Pokemon cards."></Hero>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          title: 'Contact',
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
              content: 'Contact page description'
            }
          ]
        }
      },
    }
  </script>
  