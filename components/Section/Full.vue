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
    <nuxt-picture
      :src="image"
      width="2300"
      height="1400"
      fit="cover"
      sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
      class="nuxtpictured"
      alt="Forbes Homes"
      loading="lazy"
    />
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

<style scoped>
.nuxtpictured::v-deep img{
  @apply absolute inset-0 z-0 object-cover w-full h-full;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

}
.nuxtpictured{
  @apply absolute inset-0 z-0 object-cover w-full h-full;
}
</style>
