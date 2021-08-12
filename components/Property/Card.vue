<template>
  <article class="flex flex-wrap justify-between px-6 pb-6 md:pb-12 md:px-12">
    <aside class="w-full md:w-1/2">
      <nuxt-img v-if="property.image" :src="property.image" preset="large" class="object-cover w-full h-full" />
    </aside>
    <section class="flex flex-col justify-center w-full max-w-xl p-12 pr-16 mx-auto md:w-1/2">
      <p class="text-sm font-bold">
        Plot {{ property.plot }}
      </p>
      <p class="pb-3 text-xl font-bold">
        {{ property.name || property.status + ' Plot' }}
      </p>
      <p>
        {{ property.brief }}
      </p>
      <NuxtButton :to="propertyLink" class="self-start mt-6 text-gray-200 lg:mt-8">
        View Property
      </NuxtButton>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    propertyLink () {
      const { city, area, development, name, plot } = this.property

      return `/developments/${city.toLowerCase()}/${area.toLowerCase()}/${development.toLowerCase()}/${name ? name.toLowerCase() : 'plot' + plot.toLowerCase()}`
    }
  }
}
</script>
