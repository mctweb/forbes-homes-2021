<template>
  <div class="relative w-full" style="height: 80vh;">
    <div>
      <nuxt-picture
        :src="currentImg.src"
        width="2300"
        height="1400"
        fit="cover"
        sizes="xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1600"
        class="nuxtpicture"
        :class="imageClass"
        :alt="alt + ' ' +currentImg.room"
        loading="lazy"
      />
    </div>

    <button class="absolute left-0 inline-flex items-center justify-center w-16 h-16 p-3 transition duration-200 prev bg-blue hover:bg-white hover:text-blue" style="top: calc(50% - 2rem);" aria-label="Previous Image" :class="{ 'hidden' : currentIndex === 0}" @click="prev">
      &#10094;
    </button>
    <button class="absolute right-0 inline-flex items-center justify-center w-16 h-16 p-3 transition duration-200 next bg-blue hover:bg-white hover:text-blue" style="top: calc(50% - 2rem);" aria-label="Next Image" :class="{ 'hidden' : currentIndex === images.length - 1}" @click="next">
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    images: {
      type: Array,
      default: () => []
    },
    alt: {
      type: String,
      default: 'Forbes Homes'
    }
  },
  data () {
    return {
      timer: null,
      currentIndex: 0,
      imageClass: 'fade-in'
    }
  },

  computed: {
    currentImg () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  },

  mounted () {
    this.startSlide()
  },

  methods: {
    startSlide () {
    //   this.timer = setInterval(this.next, 2000)
    },

    next () {
      this.imageClass = ''
      this.timer = setInterval(() => { this.imageClass = 'fade-in' }, 100)

      this.currentIndex += 1
    },
    prev () {
      this.currentIndex -= 1
    }
  }
}
</script>

<style scoped>

.nuxtpicture::v-deep img{
  @apply absolute inset-0 object-cover w-full h-full;
    visibility: hidden;
  width:100%;
  opacity: 0;
}
.nuxtpicture.fade-in::v-deep img{
 transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

</style>
