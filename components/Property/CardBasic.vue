<template>
  <article class="flex flex-col">
    <aside class="w-full">
      <nuxt-picture
        v-if="property && property.image"
        :src="property.image"
        width="750"
        height="650"
        fit="cover"
        sizes="sm:400 md:400 lg:400 xl:600"
        class="nuxtpicture"
        :alt="'Plot ' + property.plot"
        loading="lazy"
      />
    </aside>
    <section class="flex flex-col justify-center p-12 mx-auto">
      <p v-if="property.style" class="text-sm font-bold">
        {{ property.style }}
      </p>
      <p class="pb-3 font-serif text-xl md:text-2xl lg:text-3xl">
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
<style scoped>
.nuxtpicture::v-deep img{
  @apply object-cover w-full h-full;

}
</style>
