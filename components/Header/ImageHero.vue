<template>
  <div class="relative flex items-center w-full" style="height: 60vh;">
    <div class="absolute z-20 max-w-2xl p-12 text-xl md:text-2xl lg:text-3xl slide-in-up">
      <slot />
    </div>
    <div class="absolute inset-0 z-10 bg-blue bg-opacity-70" />
    <nuxt-picture
      :src="image"
      class="nuxtpicturehero"
      :alt="title"
      width="2300"
      height="1400"
      fit="cover"
      sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Forbes Homes'
    },
    image: {
      type: String,
      default: '/icon.png'
    }
  }
}
</script>
<style scoped>
.nuxtpicturehero::v-deep img{
  @apply absolute object-cover w-full h-full inset-0;
    animation: 1.5s ease-out 0s 1 fadeIn;
}
</style>
