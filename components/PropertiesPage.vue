<template>
  <div>
    <SectionTopBlue v-for="{development, area, city, mainImages, houses} in developments.slice(0,1)" :key="development">
      <h1 v-if="$slots.header" class="pt-6 mb-12 text-2xl text-right text-white text-opacity-50 md:text-3xl lg:text-4xl ">
        <slot name="header" />
      </h1>
      <div class="flex flex-wrap items-end justify-between w-full my-12">
        <header v-if="$slots.header" class="flex flex-col flex-wrap items-baseline ">
          <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {{ development }}
          </h2>
          <h3 class="text-xl">
            {{ area }}, {{ city }}
          </h3>
        </header>
        <header v-else class="flex flex-col flex-wrap items-baseline ">
          <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {{ development }}
          </h1>
          <h2 class="text-xl">
            {{ area }}, {{ city }}
          </h2>
        </header>
        <aside>
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
      <PropertyImageTile :development="development" class="mb-12 md:mb-16 lg:mb-20" />
      <component :is="development.siteLayout" v-if="development.siteLayout" class="max-h-screen mx-auto mb-32" />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    developments: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
