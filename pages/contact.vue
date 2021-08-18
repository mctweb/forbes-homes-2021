<template>
  <div class="">
    <SectionTopBlue title="Get In Touch" class="pt-16 pb-6 " />
    <ContactFull large />
  </div>
</template>

<script>

import { getSiteMeta } from '~/utils/getSiteMeta'
export default {
  layout: 'contact',

  head () {
    return {
      ...this.meta
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'Contact',
        description: 'We would love to hear from you. You can contact us on this page via phone, email or this online form.',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }

  }

}
</script>

<style>

</style>
