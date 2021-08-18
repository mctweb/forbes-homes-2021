<template>
  <article class="px-12 py-8 text-gray-300 md:px-16 lg:px-20 bg-blue">
    <div
      class="flex flex-wrap items-center justify-between w-full border-b-2 border-gray-300 border-opacity-25 "
      :class="[large ? 'pb-12 md:pb-20 lg:pb-32' : 'pt-6 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-32 lg:mb-24']"
    >
      <ContactSide class="w-full pb-12 lg:w-1/2 lg:pr-24 lg:pb-0" :large="large" />
      <form class="flex flex-col w-full lg:w-1/2" @submit.prevent>
        <ContactBasic :contact="contact" @update:contact="updateContact">
          <ContactAppointment v-if="large" :contact="contact" @appointment="updateInterests" />
          <ContactInterested v-if="large" :contact="contact" @interest="updateInterests" />
        </ContactBasic>

        <NuxtButton class="mt-6 ml-auto" light @click="submitForm">
          Send Enquiry
        </NuxtButton>
      </form>
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
      }
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
    submitForm () {
      console.log('hit')
    }
  }
}
</script>
