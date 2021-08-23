<template>
  <article class="flex flex-wrap justify-between px-6 md:px-12">
    <aside class="w-full md:w-1/2">
      <nuxt-picture
        v-if="property.image"
        :src="property.image"
        width="2300"
        height="1400"
        fit="cover"
        sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
        class="nuxtpicture"
        :alt="'Plot ' + property.plot"
        loading="lazy"
      />
    </aside>
    <section class="flex flex-col justify-center w-full max-w-xl p-12 pr-16 mx-auto md:w-1/2">
      <p v-if="property.style" class="text-sm font-bold">
        {{ property.style }}
      </p>
      <p class="pb-3 font-serif text-2xl lg:text-4xl">
        {{ ' Plot' + property.plot }}
      </p>
      <p class="self-start inline-block px-3 pt-2 pb-1 mb-2 text-sm text-gray-800 bg-gray-200 border border-gray-400 border-opacity-30">
        {{ property.status }}
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
