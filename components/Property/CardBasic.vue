<template>
  <article class="flex flex-col">
    <aside class="w-full">
      <nuxt-img v-if="property && property.image" :src="property.image" preset="medium" class="object-cover w-full h-full" />
    </aside>
    <section class="flex flex-col justify-center p-12 mx-auto">
      <p v-if="property.style" class="text-sm font-bold">
        {{ property.style }}
      </p>
      <p class="pb-3 text-xl font-bold">
        {{ 'Plot ' + property.plot }}
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
