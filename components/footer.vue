<template>
  <footer id="contact" class="global-footer">
    <div class="global-footer-contact">
      <p class="p-large">Create a new world together</p>
      <a class="global-footer-email no-underline" href="mailto:build@bia.partners">
        <span class="break-mobile">build@</span>
        <span class="break-mobile">bia.partners</span>
      </a>
    </div>
    <div class="global-footer-copyright">
      &copy; {{ currentYear }} Bia
    </div>
    <div class="global-footer-rights">
      All Rights Reserved
    </div>
    <div class="global-footer-slogan">
      <span class="ssTablet-down-hide">Future x</span> 
      <span class="ssTablet-down-hide">Forward x</span> 
      <span>Partners</span>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
</script>