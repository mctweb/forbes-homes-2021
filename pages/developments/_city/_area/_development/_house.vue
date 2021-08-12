<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-end justify-between w-full my-12">
        <header class="flex flex-col flex-wrap items-baseline ">
          <h3 v-if="home.style" class="font-serif text-2xl tracking-wide text-gray-300 uppercase">
            {{ home.style }}
          </h3>
          <h1 class="mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-50 md:mb-12">
            {{ 'Plot ' + home.plot }}
          </h1>
          <h2 class="text-xl">
            {{ development.development }}, {{ development.area }}
          </h2>
          <p>{{ development.city }}, {{ home.postcode }}</p>
        </header>
        <aside>
          <p>Only {{ amountAvailable }} Properties Available</p>
          <p>{{ amountComingSoon }} Future Releases</p>
        </aside>
      </div>
      <div class="flex flex-wrap items-center w-full my-12">
        <div class="flex flex-col w-full md:pr-3 md:w-1/2 ">
          <NuxtButton class="self-stretch w-full" :to="`/contact?interest=true&development=${development.development}&plot=${home.plot}`" light>
            Register An Interest
          </NuxtButton>
        </div>
        <div class="flex flex-col w-full pt-3 md:pl-3 md:pt-0 md:w-1/2">
          <NuxtButton class="self-stretch" :to="`/contact?appointment=true&development=${development.development}&plot=${home.plot}`" light>
            Book An Appointment
          </NuxtButton>
        </div>
      </div>
      <SectionImageSlider :images="images" :alt="home.name + ' ' + development.development" />
    </SectionTopBlue>
    <SectionSimpleText>{{ development.brief }}</SectionSimpleText>
    <Floorplans v-if="home.floorplans" :plans="home.floorplans" />
    <SectionHalfStandoff v-for="(feature,i) in home.features" :key="i" :title="feature.title" :image="feature.image" :flip="i % 4 === 2 || i % 4 === 3">
      {{ feature.description }}
    </SectionHalfStandoff>
    <section class="relative flex flex-wrap p-12 overflow-none ">
      <h2 class="block w-full font-serif text-3xl uppercase align-top md:self-start md:sticky md:w-1/3 md:text-2xl lg:text-4xl md:top-32 afterline">
        Specification
      </h2>
      <ul class="w-full pt-1 md:w-2/3">
        <li v-for="(spec, i) in home.specification" :key="i" class="pb-4">
          <p class="text-lg text-blue ">
            {{ spec.title }}
          </p><p class="text-sm">
            {{ spec.description }}
          </p>
          <ul v-if="spec.list" class="list-disc list-inside">
            <li v-for="(item,ind) in spec.list" :key="ind" class="text-sm">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <component :is="home.siteLayout" class="max-h-screen pb-32 mx-auto" :selectedplot="home.plot" />
    <MapsSingle :location="home.mapLocation" />
    <section class="flex flex-wrap p-12 md:py-20 lg:py-32">
      <SectionTextCard v-for="{title, description} in home.location" :key="title" class="w-full max-w-sm p-6 mx-auto md:w-1/3" :title="title">
        {{ description }}
      </SectionTextCard>
    </section>

    <div class="flex flex-wrap items-center w-full p-12 bg-blue">
      <div class="flex flex-col w-full md:pr-3 md:w-1/2 ">
        <NuxtButton class="self-stretch w-full" :to="`/contact?interest=true&development=${development.development}&plot=${home.plot}`" light>
          Register An Interest
        </NuxtButton>
      </div>
      <div class="flex flex-col w-full pt-3 md:pl-3 md:pt-0 md:w-1/2">
        <NuxtButton class="self-stretch" :to="`/contact?appointment=true&development=${development.development}&plot=${home.plot}`" light>
          Book An Appointment
        </NuxtButton>
      </div>
    </div>
  </div>
</template>

<script>
import { developments } from '~/static/properties'
import { shuffleArray } from '~/utils/common'
import { getSiteMeta } from '~/utils/getSiteMeta'

export default {
  asyncData ({ params, error }) {
    const house = params.house
    const developmentName = params.development
    const [development] = developments.filter(x => x.development.toLowerCase() === developmentName.toLowerCase())
    const amountAvailable = development.houses.filter(x => x.status === 'Available' || x.status === 'Viewing Home').length
    const amountComingSoon = development.houses.filter(x => x.status === 'Future Release').length
    const home = development.houses.find((x) => {
      return house === 'plot' + x.plot
    })
    if (!home) {
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    const images = home.images || shuffleArray(development.images.filter(x => x.featured))

    return {
      house,
      home,
      development,
      amountAvailable,
      amountComingSoon,
      images
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
        title: 'About',
        description: this.development.brief,
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
