<template>
  <section>
    <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
      <label for="name" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block lg:w-40">Name</label>
      <input id="name" v-model="contactModel.name" type="text" required class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 hover:bg-gray-400 focus:text-gray-300">
    </div>
    <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
      <label for="email" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block lg:w-40">Email</label>
      <input id="email" v-model="contactModel.email" type="email" class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 hover:bg-gray-400 focus:text-gray-300" required>
    </div>

    <div class="flex flex-wrap items-center w-full mb-2 border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
      <label for="telephone" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 md:inline-block lg:w-40">Telephone</label>
      <input id="telephone" v-model="contactModel.telephone" type="tel" class="flex-1 px-4 pt-3 pb-2 text-gray-700 bg-gray-300 focus:outline-none focus:bg-gray-900 hover:bg-gray-400 focus:text-gray-300" required>
    </div>
    <slot />
    <div class="flex flex-wrap w-full border-b-2 border-taupe focus-within:border-white hover:border-white group md:w-auto">
      <label for="message" class="block w-full pt-3 pb-2 pl-4 pr-12 text-gray-700 uppercase bg-gray-100 hover:border-white">Message</label>
      <textarea id="message" v-model="contactModel.message" class="flex-1 w-full px-4 pt-3 pb-2 text-gray-700 bg-gray-300 h-72 focus:outline-none focus:bg-gray-900 hover:bg-gray-400 focus:text-gray-300" rows="8" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    contactModel: {
      get () { return this.contact },
      set (value) { this.$emit('update:contact', value) }
    }
  }
}
</script>

<style>

</style>
