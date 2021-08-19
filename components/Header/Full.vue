<template>
  <header class="relative flex items-center justify-center w-full h-screen overflow-hidden">
    <section class="relative z-10">
      <slot />
    </section>
    <nuxt-picture
      :src="image"
      width="2300"
      height="1400"
      fit="cover"
      sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
      class="nuxtpicture"
      :class="stick"
    />
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/'
    },
    stick: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style scoped>
.nuxtpicture::v-deep img{
  @apply object-cover w-full h-full absolute inset-0 z-0;
}
.nuxtpicture.center::v-deep img{
  @apply object-center;
}
.nuxtpicture.bottom::v-deep img{
  @apply object-bottom;
}
.nuxtpicture.top::v-deep img{
  @apply object-bottom;
}
</style>
