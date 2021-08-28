<template>
  <div>
    <PropertiesPage :developments="propertiesInArea">
      <template #header>
        Properties for sale in {{ area }}
      </template>
    </PropertiesPage>
  </div>
</template>

<script>
import { developments } from '~/static/properties'
import { getSiteMeta } from '~/utils/getSiteMeta'

export default {
  asyncData ({ params, error }) {
    const area = params.area.charAt(0).toUpperCase() + params.area.slice(1)
    const city = params.city.charAt(0).toUpperCase() + params.city.slice(1)
    const propertiesInArea = developments.filter(x => x.area.toLowerCase() === area.toLowerCase())
    if (!propertiesInArea.length) {
      return error({ statusCode: 404, message: 'Page Not Found' })
    }

    return {
      area,
      city,
      propertiesInArea
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
        title: `Homes for sale in ${this.area}, ${this.city}`,
        description: `Find new builds and developments for sale in ${this.area}, ${this.city}. Forbes Homes desirable and exclusive developments of new houses in ${this.area}, ${this.city}.`,
        url: `${this.$config.rootUrl}${this.$route.path}`,
        image: this.propertiesInArea.length ? this.$img(this.propertiesInArea[0].mainImages[0].src, { width: 1200, height: 627 }) : null

      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
