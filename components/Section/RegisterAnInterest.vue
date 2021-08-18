<template>
  <div class="w-full text-gray-200 bg-gray-900 ">
    <section class="flex flex-wrap items-center p-12 py-20 lg:py-32">
      <div class="w-full lg:w-1/2 lg:px-24">
        <h4 class="text-2xl lg:text-3xl">
          Can you see yourself living here?
        </h4>
        <p class="text-lg text-gray-300">
          Get in touch to ensure that you are kept up to date with any developments.
        </p>
      </div>
      <div class="flex flex-col w-full lg:w-1/2">
        <NuxtButton class="w-full mt-6 lg:mx-auto lg:mt-0" :to="contactLink" light>
          Register An Interest
        </NuxtButton>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    development: {
      type: String,
      default: ''
    }
  },
  computed: {
    contactLink () {
      if (!this.development) { return '/contact' }
      return '/contact?interest=' + this.development
    }
  }
}
</script>

<style>

</style>
