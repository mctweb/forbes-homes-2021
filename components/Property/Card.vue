<template>
  <article class="flex flex-wrap justify-between px-6 pb-6 md:pb-12 md:px-12">
    <aside class="w-full md:w-1/2">
      <nuxt-img v-if="property.image" :src="property.image" preset="large" class="object-cover w-full h-full" />
    </aside>
    <section class="flex flex-col justify-center w-full max-w-xl p-12 pr-16 mx-auto md:w-1/2">
      <p v-if="property.style" class="text-sm font-bold">
        {{ property.style }}
      </p>
      <p class="pb-3 font-serif text-2xl lg:text-4xl">
        {{ ' Plot' + property.plot }}
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
import { propertyLink } from '~/utils/common'

export default {
  props: {
    property: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    propertyLink () {
      return propertyLink(this.property)
    }
  }
}
</script>
