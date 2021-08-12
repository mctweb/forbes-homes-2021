<template>
  <div class="relative flex items-center w-full" style="height: 60vh;">
    <div class="absolute z-20 max-w-2xl p-12 text-3xl ">
      <slot />
    </div>
    <div class="absolute inset-0 z-10 bg-blue bg-opacity-70" />
    <nuxt-img :src="image" class="absolute object-cover w-full h-full" :alt="title" />
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
