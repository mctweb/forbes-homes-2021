<template>
  <SectionMeta title="Why choose Forbes Homes?" />
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
        title: 'Why choose Forbes Homes?',
        description: 'There are many house builders that could provide a house to you - why should you choose Forbes Homes?',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
