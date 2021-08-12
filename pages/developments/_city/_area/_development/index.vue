<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-center justify-between w-full my-12">
        <header class="flex flex-col flex-wrap items-baseline ">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {{ development.development }}
          </h1>
          <h2 class="text-xl">
            {{ development.area }}
          </h2>
        </header>
        <aside>
          <p class="font-bold">
            Only {{ amountAvailable }} properties available
          </p>
          <p>{{ development.type }} in {{ development.city }}</p>
        </aside>
      </div>
      <SectionTopGallery :images="images" :development="development.development" />
    </SectionTopBlue>
    <SectionSimpleText>{{ development.brief }}</SectionSimpleText>
    <div v-if="sitelayout" class="bg-gray-300 shadow-inner">
      <component :is="sitelayout" class="max-h-screen mx-auto mb-32" />
    </div>
    <PropertyCard v-for="property in availableHouses" :key="property.plot" :property="property" />
    <SectionRegisterAnInterest :development="development.development" />
  </div>
</template>

<script>
import { developments } from '~/static/properties'
import { shuffleArray } from '~/utils/common'

export default {
  asyncData ({ params }) {
    const developmentName = params.development
    const [development] = developments.filter(x => x.development.toLowerCase() === developmentName.toLowerCase())
    const amountAvailable = development.houses.filter(x => x.status === 'Available' || x.status === 'Viewing Home').length
    const sitelayout = development.siteLayout || null
    const images = shuffleArray(development.images.filter(x => x.featured))

    return {
      development,
      images,
      amountAvailable,
      sitelayout,
      houses: development.houses

    }
  },

  computed: {
    availableHouses () {
      return this.houses.filter(x => x.status === 'Available' || x.status === 'Future Release' || x.status === 'Viewing Home').sort((a, b) => {
        if (a.status === 'Available' && b.status === 'Future Release') {
          return -1
        }
        if (a.status === 'Future Release' && b.status === 'Available') {
          return 1
        }
        return 0
      })
    }
  }

}
</script>

<style>

</style>
