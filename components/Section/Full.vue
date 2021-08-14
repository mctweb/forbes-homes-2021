<template>
  <div class="relative w-full ">
    <div class="relative z-10 flex items-center px-12 py-32 mr-auto md:px-16 lg:px-24 bg-blue bg-opacity-80">
      <section class="flex flex-col justify-start py-20">
        <header class="max-w-2xl py-5 text-2xl text-gray-200">
          <slot />
        </header>
        <slot name="footer" />
      </section>
    </div>
    <nuxt-img :src="image" class="absolute inset-0 z-0 object-cover w-full h-full" alt="Forbes Homes" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/stripeside/StripesideBack.png'
    }
  }
}
</script>

<style  scoped>

</style>
