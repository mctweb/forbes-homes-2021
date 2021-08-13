<template>
  <div class="text-gray-300 bg-blue">
    <article class="px-12 py-8 md:px-16 lg:px-20">
      <div class="flex flex-wrap items-center justify-between w-full pt-6 pb-12 border-b-2 border-gray-300 border-opacity-25 md:pt-12 md:pb-20 lg:pt-20 lg:pb-32">
        <section class="w-full pb-12 md:w-1/2 md:pr-12 lg:pr-24 md:pb-0">
          <h5 class="pb-6 font-serif text-3xl text-gray-200 uppercase">
            Get In Touch
          </h5>
          <p class="mb-6 md:mb-12 lg:mb-16">
            We aim to provide you with great customer service and support. We are here to help with any questions that you may have.<br>

            Your information will not be shared with any third parties.
          </p>
          <a href="tel:01224 861780" class="flex flex-wrap mt-3 lg:mt-6 hover:text-white">
            <IconPhone class="hidden w-auto h-6 mr-6 text-gray-300 opacity-50 md:inline-block" />01224 861780
          </a>
          <a href="mailto:enquiries@forbeshomes.co.uk" class="flex flex-wrap mt-3 lg:mt-6 hover:text-white">
            <IconEmail class="hidden w-auto h-5 mr-6 text-gray-300 opacity-50 md:inline-block" />enquiries@forbeshomes.co.uk
          </a>
        </section>
        <form class="flex flex-col w-full md:w-1/2" @submit.prevent>
          <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
            <label for="name" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block">Name</label>
            <input id="name" v-model="contact.name" type="text" required class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 group-hover:bg-gray-400 focus:text-gray-300">
          </div>
          <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
            <label for="email" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block">Email</label>
            <input id="email" v-model="contact.email" type="email" class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 group-hover:bg-gray-400 focus:text-gray-300" required>
          </div>

          <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
            <label for="telephone" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block">Telephone</label>
            <input id="telephone" v-model="contact.telephone" type="tel" class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 group-hover:bg-gray-400 focus:text-gray-300" required>
          </div>
          <div class="flex flex-wrap w-full border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
            <label for="message" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 hover:border-white">Message</label>
            <textarea v-model="contact.message" class="flex-1 w-full px-4 pt-3 pb-2 text-gray-700 bg-gray-300 h-72 focus:outline-none focus:bg-gray-900 group-hover:bg-gray-400 focus:text-gray-300" rows="8" />
          </div>
          <NuxtButton class="mt-6 ml-auto" light @click="submitForm">
            Send Enquiry
          </NuxtButton>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
export default {
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
    submitForm () {
      console.log('hit')
    }
  }
}
</script>
