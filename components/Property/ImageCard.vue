<template>
  <section class="relative flex items-center h-full px-20">
    <section class="z-20 p-12 text-gray-600 bg-gray-200">
      <h3 v-if="house.name" class="font-bold">
        Plot {{ house.plot }}
      </h3>
      <h1 class="pb-2 mb-6 text-4xl text-blue afterline afterline-blue">
        {{ house.name ? house.name : 'Plot ' + house.plot }}
      </h1>
      <h2 class="pb-12">
        {{ house.price }}
      </h2>
      <NuxtButton :to="propertyLink" class="text-white">
        View Property
      </NuxtButton>
    </section>
    <nuxt-img preset="large" :src="house.image" class="absolute inset-0 object-cover w-full h-full" />
  </section>
</template>

<script>
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
      const { city, area, development, name, plot } = this.house
      return `/developments/${city.toLowerCase()}/${area.toLowerCase()}/${development.toLowerCase()}/${name ? name.toLowerCase() : 'plot' + plot.toLowerCase()}`
    }
  }
}
</script>

<style>

</style>
