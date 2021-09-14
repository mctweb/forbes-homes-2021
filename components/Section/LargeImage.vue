<template>
  <div class="px-12 pb-12 lg:px-16 lg:pb-24 xl:px-40">
    <nuxt-picture
      :src="image"
      class="nuxtpicture"
      loading="lazy"
      :alt="title"
      width="1600"
      height="850"
      fit="cover"
      sizes="sm:600 md:800 lg:1000 xl:1200 xxl:1600"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/Icon.png'
    },
    alt: {
      type: String,
      default: 'Forbes Homes'
    }
  }
}
</script>

<style scoped>
.nuxtpicture::v-deep img{
  @apply object-cover w-full h-full ;

}

</style>
