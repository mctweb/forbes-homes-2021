<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="chosen === false"
      class="fixed bottom-0 right-0 w-full p-6 md:w-3/4 lg:w-1/2 xl:w-1/3"
      style="z-index: 100"
    >
      <section
        class="w-full p-6 leading-tight text-gray-700 bg-gray-200 lg:px-10"
      >
        <div class="inline-flex py-3 mr-3">
          We use cookies to track visits to our website and improve the user
          experience
        </div>
        <div class="inline-flex py-3 text-blue-800">
          <button
            class="px-6 py-2 mr-2 text-xs hover:bg-taupe hover:text-white"
            @click="declineCookies()"
          >
            Decline
          </button>
          <button
            class="px-6 py-2 mr-4 text-gray-100 bg-blue hover:bg-taupe hover:text-white"
            @click="acceptCookies()"
          >
            Accept
          </button>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      chosen: true,
      cookieConsent: null
    }
  },
  mounted () {
    this.checkCookies()
  },
  methods: {
    checkCookies () {
      const consent = window.localStorage.getItem('cookie-consent')
      console.log(consent)
      this.cookieConsent = consent
      if (consent !== null) {
        consent ? this.acceptCookies() : this.declineCookies()
      } else {
        this.chosen = false
      }
    },
    acceptCookies () {
      this.chosen = true
      this.cookieConsent = true
      this.$ga.enable()
      if (process.browser) {
        localStorage.setItem('cookie-consent', true)
      }
    },
    declineCookies () {
      this.chosen = true
      this.cookieConsent = false
      if (process.browser) {
        localStorage.setItem('cookie-consent', false)
      }
    }
  }
}
</script>
