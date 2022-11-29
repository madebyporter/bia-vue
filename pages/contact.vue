<template>
    <div>
      <Hero :title="title">
        <p>Together we unite our individual strengths to create impactful results for clients with values that match our own. Get in touch.</p>
      </Hero>
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
  