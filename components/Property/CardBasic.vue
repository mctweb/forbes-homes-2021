<template>
  <article class="flex flex-col">
    <aside class="w-full">
      <nuxt-img v-if="property && property.image" :src="property.image" preset="medium" class="object-cover w-full h-full" />
    </aside>
    <section class="flex flex-col justify-center p-12 mx-auto">
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
