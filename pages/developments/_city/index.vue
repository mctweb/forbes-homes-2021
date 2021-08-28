<template>
  <div class="">
    <PropertiesPage :developments="relevantDevelopments">
      <template #header>
        Properties for sale in {{ city }}
      </template>
    </PropertiesPage>
  </div>
</template>

<script>
import { developments } from '~/static/properties'
import { getSiteMeta } from '~/utils/getSiteMeta'

export default {
  asyncData ({ params, error }) {
    const city = params.city.charAt(0).toUpperCase() + params.city.slice(1)
    const relevantDevelopments = developments.filter(x => x.city.toLowerCase() === city.toLowerCase())

    if (!relevantDevelopments.length) {
      return error({ statusCode: 404, message: 'Page Not Found' })
    }
    return {
      city,
      relevantDevelopments
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
        title: 'New Build Homes in ' + this.city,
        description: `Find new builds and developments for sale in ${this.city}. Forbes Homes exclusive developments of new houses in ${this.city} include large plots of land.`,
        url: `${this.$config.rootUrl}${this.$route.path}`,
        image: this.relevantDevelopments.length ? this.$img(this.relevantDevelopments[0].mainImages[0].src, { width: 1200, height: 627 }) : null

      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
