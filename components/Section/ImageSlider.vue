<template>
  <div class="relative w-full" style="height: 80vh;">
    <div>
      <nuxt-img ref="image" :src="currentImg.src" class="object-cover w-full h-full image" :class="imageClass" :alt="alt + ' ' +currentImg.room" /></nuxt-img>
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
.image.fade-in {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.image {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

</style>
