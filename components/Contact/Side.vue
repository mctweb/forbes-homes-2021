<template>
  <section>
    <h5 class="pb-3 mb-6 font-serif text-3xl text-gray-200 md:text-4xl lg:text-5xl afterline" :class="{'hidden lg:inline-block' : large}">
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
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
