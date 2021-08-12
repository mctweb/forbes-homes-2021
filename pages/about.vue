<template>
  <SectionGeneral title="About">
    ABOUT
  </SectionGeneral>
</template>

<script>
import { getSiteMeta } from '~/utils/getSiteMeta'
export default {
  head () {
    return {
      ...this.meta
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'About',
        description: 'Forbes Homes have always strived to deliver the highest quality homes in great locations, and we are proud of the exceptional standard that we provide throughout. ',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>
<style>

</style>
