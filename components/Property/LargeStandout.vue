<template>
  <div class="relative w-full ">
    <div class="relative z-10 flex items-center justify-center px-12 py-32 mr-auto md:px-16 lg:px-24 bg-blue bg-opacity-80">
      <section class="flex flex-col items-center justify-center py-20">
        <nuxt-picture
          :src="development.logo"
          class="nuxtpicture-logo"
          height="163"
          width="400"
          sizes="sm:100vw md:50vw lg:400px"
          loading="lazy"
          :alt="development.development"
        />
        <p class="pt-12 pb-12 text-gray-300">
          {{ available }} {{ available > 1 ? 'properties are': 'property is' }} currently available in this exclusive development.
        </p>
        <NuxtButton :to="String(`/developments/${development.city}/${development.area}/${development.development}`).toLowerCase()" light>
          View {{ available > 1 ? 'Properties': 'Property' }}
        </NuxtButton>
      </section>
    </div>
    <nuxt-picture :src="development.backimage" class="nuxtpicture" :alt="development.development" loading="lazy" />
  </div>
</template>

<script>

export default {
  props: {
    development: {
      type: Object,
      default: () => {}
    },
    available: {
      type: Number,
      default: null
    }
  }
}
</script>

<style scoped>
.nuxtpicture-logo::v-deep img{
  @apply object-cover w-full h-full ;

}
.nuxtpicture::v-deep img{
  @apply absolute inset-0 z-0 object-cover w-full h-full;

}

</style>
