<template>
  <div />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  },
  head () {
    return {
      title: this.title || null,
      meta: this.getHead()

    }
  },
  methods: {
    getHead () {
      const meta = [{ hid: 'og-type', name: 'og:type', content: 'website' }, { hid: 'og-url', name: 'og:url', content: `${this.$config.rootUrl}${this.$route.path}  ` }]
      if (this.title) {
        meta.push({ hid: 'og-title', name: 'og:title', content: this.title })
        meta.push({ hid: 'subject', name: 'subject', content: this.title })
      }
      if (this.description) {
        meta.push({ hid: 'og-desc', name: 'og:description', content: this.description })
        meta.push({ hid: 'description', name: 'description', content: this.description })
      }
      if (this.image) {
        meta.push({ hid: 'og-image', name: 'og:image', content: this.$img(this.image, { width: 1200 }) })
      }
      return meta
    }
  }
}
</script>

<style scoped>

</style>
