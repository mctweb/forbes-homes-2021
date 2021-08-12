<template>
  <div>
    <SectionTopBlue>
      <div class="flex flex-wrap items-center justify-between w-full">
        <header class="flex flex-col flex-wrap items-baseline mt-12">
          <h1 class="text-3xl capitalize md:text-4xl lg:text-5xl">
            {{ area }}
          </h1>
        </header>
      </div>
      {{ propertiesInArea }}
    </SectionTopBlue>
  </div>
</template>

<script>
import { developments } from '~/static/properties'

export default {
  asyncData ({ params }) {
    const area = params.area
    const propertiesInArea = developments.filter(x => x.area.toLowerCase() === area.toLowerCase())

    return {
      area,
      propertiesInArea
    }
  }

}
</script>

<style>

</style>
