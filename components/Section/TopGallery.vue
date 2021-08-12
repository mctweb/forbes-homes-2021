<template>
  <article>
    <div class="max-h-screen cursor-pointer" @click="viewImages(0)">
      <nuxt-img preset="cover" class="object-cover w-full h-auto " style="max-height: 90vh;" :src="images[0].src" :alt="development + ' - ' +images[0].room" />
    </div>

    <div v-if="images.length > 1" class="grid gap-3 pt-3 md:grid-cols-2 md:gap-6 md:pt-6">
      <div class="cursor-pointer" @click="viewImages(1)">
        <nuxt-img preset="cover" class="object-cover w-full h-full " :src="images[1].src" :alt="development + ' - ' +images[1].room" />
      </div>
      <div class="grid grid-rows-3 gap-3 md:gap-6">
        <div class="max-h-screen row-span-2 cursor-pointer" @click="viewImages(2)">
          <nuxt-img preset="cover" class="object-cover w-full h-full " :src="images[2].src" :alt="development + ' - ' + images[2].room" @click="viewImages(2)" />
        </div>
        <div class="grid grid-cols-2 gap-3 md:gap-6">
          <div class="max-h-screen cursor-pointer" @click="viewImages(3)">
            <nuxt-img preset="cover" class="object-cover w-full h-auto" :src="images[3].src" :alt="development + ' - ' +images[3].room" />
          </div>
          <div class="max-h-screen cursor-pointer" @click="viewImages(4)">
            <nuxt-img preset="cover" class="object-cover w-full h-auto" :src="images[4].src" :alt="development + ' - ' +images[4].room" />
          </div>
        </div>
      </div>
    </div>
    <GalleryModal v-if="imageGallery" :data="images" :start-at="startAt" @close="closeGallery" />
  </article>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
      validator: (propValue) => {
        return propValue.length >= 5 || propValue.length === 1
      }
    },
    development: {
      type: String,
      default: 'Forbes Homes'
    }
  },
  data () {
    return {
      startAt: 0,
      imageGallery: false
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

<style>

</style>
