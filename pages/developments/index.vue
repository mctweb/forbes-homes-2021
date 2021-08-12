<template>
  <div class="">
    <SectionTopBlue v-for="{development, area, city, mainImages, houses} in developments.slice(0,1)" :key="development">
      <div class="flex flex-wrap items-end justify-between w-full my-12">
        <header class="flex flex-col flex-wrap items-baseline ">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {{ development }}
          </h1>
          <h2 class="text-xl">
            {{ area }}, {{ city }}
          </h2>
        </header>
        <aside>
          <NuxtButton class="text-white" :to="'/developments/' + city.toLowerCase()+ '/' + area.toLowerCase() + '/' + development.toLowerCase()" light>
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
    <article v-for="(development, index) in developments" :key="development.development + index" class="pb-32">
      <section class="px-12 pt-12 pb-6 font-bold lg:px-20 lg:pt-20">
        <p>Homes for sale at </p>
        <h2 class="text-3xl">
          {{ development.development }}
        </h2>
      </section>
      <SectionHouseSlider :houses="development.houses" />
      <SectionSimpleText>
        <p>{{ development.brief }}</p>
        <NuxtButton class="mt-6 text-white" :to="'/developments/' + development.city.toLowerCase() + '/' + development.area.toLowerCase() +'/' + development.development.toLowerCase()">
          View {{ development.development }} Homes
        </NuxtButton>
      </SectionSimpleText>
      <PropertyImageTile :development="development" />
    </article>
  </div>
</template>

<script>
import { getSiteMeta } from '~/utils/getSiteMeta'
import { developments } from '~/static/properties'
export default {
  asyncData ({ params }) {
    return {
      developments
    }
  },
  head () {
    return {
      ...this.meta
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'Developments',
        description: 'Stripeside is a new and exclusive development of 12 homes in Netherley. Each of these delightful five bedroom family homes offer scenic views over the countryside.',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
