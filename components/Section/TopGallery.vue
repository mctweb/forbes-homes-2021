<template>
  <article>
    <div class="max-h-screen cursor-pointer" @click="viewImages(0)">
      <nuxt-picture
        width="1600"
        height="1300"
        fit="cover"
        sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
        class="nuxtpicture max"
        :src="images[0].src"
        :alt="development + ' - ' +images[0].room"
        loading="lazy"
      />
    </div>

    <div v-if="images.length > 1" class="grid gap-3 pt-3 md:grid-cols-2 md:gap-6 md:pt-6">
      <div class="cursor-pointer" @click="viewImages(1)">
        <nuxt-picture
          width="900"
          height="900"
          fit="cover"
          sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
          class="nuxtpicture"
          :src="images[1].src"
          :alt="development + ' - ' +images[1].room"
          loading="lazy"
        />
      </div>
      <div class="grid grid-rows-3 gap-3 md:gap-6">
        <div class="row-span-2 cursor-pointer " @click="viewImages(2)">
          <nuxt-picture
            width="900"
            height="600"
            fit="cover"
            sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
            class="nuxtpicture"
            :src="images[2].src"
            :alt="development + ' - ' + images[2].room"
            loading="lazy"
            @click="viewImages(2)"
          />
        </div>
        <div class="grid grid-cols-2 gap-3 md:gap-6">
          <div class="max-h-screen cursor-pointer" @click="viewImages(3)">
            <nuxt-picture
              width="500"
              height="300"
              fit="cover"
              sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
              class="nuxtpicture"
              :src="images[3].src"
              :alt="development + ' - ' +images[3].room"
              loading="lazy"
            />
          </div>
          <div class="max-h-screen cursor-pointer" @click="viewImages(4)">
            <nuxt-picture
              width="500"
              height="300"
              fit="cover"
              sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
              class="nuxtpicture"
              :src="images[4].src"
              :alt="development + ' - ' +images[4].room"
              loading="lazy"
            />
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

<style scoped>
.nuxtpicture.max::v-deep img{
  max-height: 90vh;
}
.nuxtpicture::v-deep img{
  @apply object-cover w-full h-full;
      animation: 1.5s ease-out 0s 1 fadeIn;
}
</style>
