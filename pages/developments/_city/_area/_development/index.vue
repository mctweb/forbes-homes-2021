<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-center justify-between w-full my-12">
        <header class="flex flex-col flex-wrap items-baseline slide-in-up">
          <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {{ development.development }}
          </h1>
          <h2 class="text-xl">
            {{ development.area }}
          </h2>
        </header>
        <aside class="fade-in">
          <p class="pl-3 font-bold text-right">
            Currently {{ amountAvailable }} properties available
          </p>
          <p>{{ development.type }} in {{ development.city }}</p>
        </aside>
      </div>
      <SectionTopGallery :images="images" :development="development.development" />
    </SectionTopBlue>

    <SectionSimpleText>{{ development.brief }}</SectionSimpleText>
    <div class="flex flex-wrap items-center px-12 py-16 md:px-16 lg:px-20 ">
      <section class="w-full py-12 md:w-1/2 md:px-6 lg:px-12 ">
        <SectionTextCard
          v-for="{title, description} in development.houses[0].location"
          :key="title"
          :title="title"

          class="max-w-xl mx-auto mb-6 lg:mb-12"
        >
          {{ description }}
        </SectionTextCard>
      </section>
      <section class="w-full md:w-1/2">
        <MapsSingle :location="development.houses[0].mapLocation" large />
      </section>
    </div>
    <div v-if="sitelayout" class="bg-gray-300 shadow-inner">
      <component :is="sitelayout" />
    </div>

    <div class="py-6">
      <PropertyCard v-for="property in availableHouses" :key="property.plot" :property="property" class="py-6" />
    </div>
    <SectionRegisterAnInterest :development="development.development" />
  </div>
</template>

<script>
import { developments } from '~/static/properties'
import { shuffleArray, availableHouses, amountAvailableNow } from '~/utils/common'
import { getSiteMeta } from '~/utils/getSiteMeta'

export default {
  asyncData ({ params, error }) {
    const developmentName = params.development
    const [development] = developments.filter(x => x.development.toLowerCase() === developmentName.toLowerCase())
    if (!development) {
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    const houses = development.houses
    const amountAvailable = amountAvailableNow(houses)
    const available = availableHouses(houses)
    const sitelayout = development.siteLayout || null
    const images = shuffleArray(development.images.filter(x => x.featured))

    return {
      development,
      images,
      amountAvailable,
      sitelayout,
      houses: development.houses,
      availableHouses: available
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
        title: this.development.development + ' Homes',
        description: this.development.brief,
        url: `${this.$config.rootUrl}${this.$route.path}`,
        image: this.images.length ? this.$img(this.images[0].src, { width: 1200, height: 627 }) : null

      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
