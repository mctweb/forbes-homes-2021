<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-center justify-between w-full">
        <header class="flex flex-col flex-wrap items-baseline">
          <h1 class="mt-12 text-3xl md:text-4xl lg:text-5xl">
            {{ city }}
          </h1>
        </header>
      </div>
      {{ propertiesInCity }}
    </SectionTopBlue>
  </div>
</template>

<script>
import { developments } from '~/static/properties'

export default {
  asyncData ({ params }) {
    const city = params.city
    const propertiesInCity = developments.filter(x => x.city.toLowerCase() === city.toLowerCase())

    return {
      city,
      propertiesInCity
    }
  }

}
</script>

<style>

</style>
