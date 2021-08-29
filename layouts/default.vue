<template>
  <div class="font-sans text-gray-700 bg-gray-100">
    <NavigationFull />
    <Nuxt class="min-h-full" />
    <ContactFull :large="contactPage" />
    <NavigationFooter />
    <CookieConsent />
  </div>
</template>

<script>
export default {
  computed: {
    contactPage () {
      return this.$route.name === 'contact'
    }
  }
}
</script>
