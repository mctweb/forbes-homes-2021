<template>
  <div class="">
    <PropertiesPage :developments="developments" />
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
        description: 'Forbes Homes has extensive experience with creating large new builds in desirable areas. A personal and premium service from start to finish.',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
