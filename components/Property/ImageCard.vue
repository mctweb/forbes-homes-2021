<template>
  <section class="relative flex items-center h-full px-12 md:px-16 lg:px-20">
    <section class="z-20 p-6 py-12 text-gray-600 bg-gray-200 md:p-12">
      <h3 v-if="house.style" class="font-bold">
        {{ house.style }}
      </h3>
      <h1 class="pb-2 mb-6 font-serif text-4xl text-blue afterline afterline-blue">
        {{ 'Plot ' + house.plot }}
      </h1>
      <h2 class="pb-12">
        {{ house.price }}
      </h2>
      <NuxtButton :to="propertyLink" class="text-white">
        View Property
      </NuxtButton>
    </section>
    <nuxt-picture
      width="2300"
      height="1400"
      fit="cover"
      sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
      :src="house.image"
      class="nuxtpicture"
      :alt="'Plot ' + house.plot"
      loading="lazy"
    />
  </section>
</template>

<script>
import { propertyLink } from '~/utils/common'
export default {
  props: {
    house: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {
    propertyLink () {
      return propertyLink(this.house)
    }
  }
}
</script>

<style scoped>
.nuxtpicture::v-deep img{
  @apply absolute inset-0 object-cover w-full h-full;

}
</style>
