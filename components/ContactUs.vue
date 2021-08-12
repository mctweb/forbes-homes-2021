<template>
  <div class="text-gray-300 bg-blue">
    <article class="px-12 py-8 md:px-16 lg:px-20">
      <div class="flex flex-wrap items-center justify-between w-full pt-6 pb-12 border-b-2 border-gray-300 border-opacity-25 md:pt-12 md:pb-20 lg:pt-20 lg:pb-32">
        <section class="w-full md:w-1/2 md:pr-12">
          <h5 class="pb-6 font-serif text-3xl text-gray-200 uppercase">
            Get In Touch
          </h5>
          <p>
            We aim to provide you with great customer service and support. We are here to help with any questions that you may have.<br>

            Your information will not be shared with any third parties.
          </p>
        </section>
        <form class="flex flex-col w-full md:w-1/2" @submit.prevent>
          <div class="flex flex-wrap items-center mb-2 border-b-2 border-taupe focus-within:border-white">
            <label for="name" class="inline-block pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100">Name</label>
            <input id="name" v-model="contact.name" type="text" required class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-200 focus:outline-none focus:bg-blue focus:text-gray-300">
          </div>
          <div class="flex flex-wrap">
            <label for="email">Email</label>
            <input id="email" v-model="contact.email" type="email" required>
          </div>

          <div class="flex flex-wrap">
            <label for="telephone">Telephone</label>
            <input id="telephone" v-model="contact.telephone" type="tel" required>
          </div>
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
  }
}
</script>
