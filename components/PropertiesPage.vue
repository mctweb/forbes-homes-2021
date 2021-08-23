<template>
  <div>
    <SectionTopBlue v-for="{development, area, city, mainImages, houses} in developments.slice(0,1)" :key="development">
      <h1 v-if="$slots.header" class="pt-6 mb-12 text-xl text-right text-white text-opacity-50 md:text-3xl lg:text-4xl ">
        <slot name="header" />
      </h1>
      <div class="flex flex-wrap items-end justify-between w-full my-12">
        <header v-if="$slots.header" class="flex flex-col flex-wrap items-baseline pr-6">
          <h2 class="font-serif text-4xl lg:text-5xl xl:text-6xl">
            {{ development }}
          </h2>
          <h3 class="text-xl text-gray-400">
            {{ area }}, {{ city }}
          </h3>
        </header>
        <header v-else class="flex flex-col flex-wrap items-baseline pr-6">
          <h1 class="font-serif text-4xl lg:text-5xl xl:text-6xl">
            {{ development }}
          </h1>
          <h2 class="text-xl text-gray-400">
            {{ area }}, {{ city }}
          </h2>
        </header>
        <aside class="pt-3">
          <NuxtButton class="text-white" :to="String('/developments/' + city+ '/' + area + '/' + development).toLowerCase()" light>
            View {{ development }}
          </NuxtButton>
        </aside>
      </div>
      <SectionImageSlider :images="mainImages" :alt="development" />
      <div class="flex flex-wrap items-center pt-6 text-gray-100 md:pt-12">
        <section class="w-full md:w-1/2">
          <MapsSingle :location="houses[0].mapLocation" />
        </section>
        <section class="w-full py-12 md:w-1/2 md:pl-6 lg:pl-12 ">
          <SectionTextCard v-for="{title, description} in houses[0].location" :key="title" :title="title" blue class="max-w-xl mx-auto mb-6 lg:mb-12">
            {{ description }}
          </SectionTextCard>
        </section>
      </div>
    </SectionTopBlue>
    <article v-for="(development, index) in developments" :key="development.development + index" class="pt-16">
      <section class="px-12 pb-6 font-bold md:px-20 lg:px-20">
        <p>Homes for sale at </p>
        <h2 class="text-3xl">
          {{ development.development }}
        </h2>
      </section>
      <SectionHouseSlider :houses="availableHouses(development.houses)" />
      <SectionSimpleText>
        <p>{{ development.brief }}</p>
        <NuxtButton class="mt-6 text-white" :to="'/developments/' + development.city.toLowerCase() + '/' + development.area.toLowerCase() +'/' + development.development.toLowerCase()">
          View {{ development.development }} Homes
        </NuxtButton>
      </SectionSimpleText>
      <PropertyImageTile :development="development" class="mb-12 md:mb-16 lg:mb-20" />
      <component :is="development.siteLayout" v-if="development.siteLayout" class="mx-auto " />
    </article>
  </div>
</template>

<script>
import { currentlyAvailableHouses } from '~/utils/common'
export default {
  props: {
    developments: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    availableHouses (houses) {
      return currentlyAvailableHouses(houses)
    }
  }
}
</script>
