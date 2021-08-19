<template>
  <div class="">
    <section class="flex flex-wrap px-6 cursor-pointer md:px-16 lg:px-32" @click="viewImages(i)">
      <div v-for="image in imagesArray" :key="image.src" class="w-full px-6 py-6 md:py-0 md:w-1/3">
        <nuxt-img :src="image.src" preset="large" :alt="`${development.development} Development in ${development.city} - ${image.room}`" class="object-cover w-full h-full" loading="lazy" />
      </div>
    </section>
    <GalleryModal v-if="imageGallery" :data="imagesArray" :start-at="startAt" @close="closeGallery" />
  </div>
</template>

<script>
export default {
  props: {
    development: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      startAt: 0,
      imageGallery: false
    }
  },
  computed: {
    imagesArray () {
      return this.development.images.filter(x => x.featured).splice(0, 3)
    }
  },
  methods: {
    closeGallery () {
      this.imageGallery = false
    },
    viewImages (num) {
      this.startAt = num
      this.imageGallery = true
    }
  }

}
</script>
