<template>
  <article class="px-12 py-8 text-gray-300 md:px-16 lg:px-20 bg-blue">
    <div
      class="flex flex-wrap items-center justify-between w-full border-b-2 border-gray-300 border-opacity-25 "
      :class="[large ? 'pb-12 md:pb-20 lg:pb-32' : 'pt-6 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-32 lg:mb-24']"
    >
      <ContactSide class="w-full pb-12 lg:w-1/2 lg:pr-24 lg:pb-0" :large="large" />
      <transition name="fade">
        <div v-if="status === 'new'" class="w-full lg:w-1/2">
          <form class="flex flex-col w-full max-w-2xl ml-auto" @submit.prevent="submitForm">
            <ContactBasic :contact="contact" @update:contact="updateContact">
              <ContactAppointment v-if="large" :contact="contact" @appointment="updateInterests" />
              <ContactInterested v-if="large" :contact="contact" @interest="updateInterests" />
              <ContactHearFrom :contact="contact" @hearfrom="updateHearFrom" />
            </ContactBasic>

            <NuxtButton class="mt-6 ml-auto" light type="submit">
              Send Enquiry
            </NuxtButton>
          </form>
        </div>
        <div v-if="status ==='sending'" class="flex flex-col items-center justify-center flex-1 max-w-2xl mx-auto text-3xl">
          Sending
          <IconLoading class="w-12 h-12 mt-2" />
        </div>
        <div v-if="status ==='sent'" class="flex flex-col items-center justify-center flex-1 max-w-2xl mx-auto text-3xl">
          Message Sent!
          <p class="text-base">
            We will be in touch shortly. Thanks for getting in touch.
          </p>
        </div>
        <div v-if="status ==='error'" class="flex flex-col items-center justify-center flex-1 max-w-2xl mx-auto text-3xl">
          Error
          <p class="text-base">
            We have encountered a problem whilst sending your message. Please try again or contact us via email or phone.
          </p>
        </div>
      </transition>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      contact: {
        name: null,
        email: null,
        telephone: null,
        message: null
      },
      status: 'new'
    }
  },
  computed: {
    year () {
      const date = new Date()
      const year = date.getFullYear()
      return year
    }
  },
  methods: {
    updateContact (value) {
      this.contact = { ...this.contact, value }
    },
    updateInterests (value) {
      this.contact = { ...this.contact, ...value }
    },
    updateHearFrom (value) {
      this.contact = { ...this.contact, ...value }
    },
    async submitForm () {
      this.status = 'sending'
      try {
        await this.$http.post('/api/email', this.contact)
        this.status = 'sent'
      } catch (err) {
        this.status = 'error'
        setTimeout((x) => { this.status = 'new' }, 5000)
      }
    }
  }
}
</script>
