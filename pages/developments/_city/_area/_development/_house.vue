<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-end justify-between w-full my-12">
        <header class="flex flex-col flex-wrap items-baseline ">
          <h3 v-if="home.style" class="font-serif text-2xl tracking-wide text-gray-300 uppercase">
            {{ home.style }}
          </h3>
          <div class="flex flex-wrap items-center justify-between">
            <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-50">
              {{ 'Plot ' + home.plot }}
            </h1>
            <h3 v-if="['Reserved', 'Sold'].includes(home.status)" class="inline-block px-4 pt-2 pb-1 ml-6 text-xl font-bold uppercase bg-white text-blue md:text-2xl lg:text-3xl">
              {{ home.status }}
            </h3>
          </div>
          <h3 v-if="home.price " class="text-xl text-gray-400 md:text-2xl lg:text-3xl">
            {{ home.price }}
          </h3>
          <h2 class="mt-6 text-xl md:mt-12">
            {{ development.development }}, {{ development.area }}
          </h2>
          <p>{{ development.city }}, {{ home.postcode }}</p>
        </header>
        <aside class="pl-3 ml-auto text-right">
          <p>Currently {{ amountAvailable }} {{ amountAvailable === 1 ? 'Property' : 'Properties' }} Available</p>
          <p>{{ amountComingSoon }} Future Releases</p>
        </aside>
      </div>
      <div class="flex flex-wrap items-center w-full my-12">
        <div class="flex flex-col w-full md:pr-3 md:w-1/2 ">
          <NuxtButton class="self-stretch w-full" :to="`/contact?interest=${development.development}&plot=${home.plot}`" light>
            Register An Interest
          </NuxtButton>
        </div>
        <div class="flex flex-col w-full pt-3 md:pl-3 md:pt-0 md:w-1/2">
          <NuxtButton class="self-stretch" :to="`/contact?appointment=${development.development}&plot=${home.plot}`" light>
            Book An Appointment
          </NuxtButton>
        </div>
      </div>
      <SectionImageSlider :images="images" :alt="'Plot ' + home.plot + ' ' + development.development" />
      <div class="flex flex-wrap items-center pt-6 text-gray-100 md:pt-12">
        <section class="w-full md:w-1/2">
          <MapsSingle :location="home.mapLocation" />
        </section>
        <section class="w-full py-12 md:w-1/2 md:pl-6 lg:pl-12 ">
          <SectionTextCard v-for="{title, description} in home.location.slice(0,1)" :key="title" :title="title" blue class="max-w-xl mx-auto mb-6 lg:mb-12">
            {{ description }}
          </SectionTextCard>
        </section>
      </div>
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
    <component :is="home.siteLayout" :selectedplot="home.plot" />
    <MapsSingle :location="home.mapLocation" />
    <section class="flex flex-wrap p-12 md:py-20 lg:py-32">
      <SectionTextCard v-for="{title, description} in home.location" :key="title" class="w-full max-w-sm py-6 mx-auto md:p-6 md:w-1/3" :title="title">
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
        title: 'Plot ' + this.home.plot,
        description: this.home.brief || this.development.brief,
        url: `${this.$config.rootUrl}${this.$route.path}`,
        image: this.images.length ? this.$img(this.images[0].src, { width: 1200, height: 627, fit: 'cover' }) : null

      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
