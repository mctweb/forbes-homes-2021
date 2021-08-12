<template>
  <div class="relative w-full ">
    <div class="relative z-10 flex items-center justify-center px-12 py-32 mr-auto md:px-16 lg:px-24 bg-blue bg-opacity-80">
      <section class="flex flex-col items-center justify-center py-20">
        <nuxt-img
          :src="development.logo"
          class="object-contain w-3/4 h-auto md:w-72 lg:w-96"
          height="845"
          width="2077"
          sizes="sm:100vw md:50vw lg:400px"
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
    <nuxt-img :src="development.backimage" class="absolute inset-0 z-0 object-cover w-full h-full" />
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
