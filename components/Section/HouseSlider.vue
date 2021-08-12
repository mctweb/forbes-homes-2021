<template>
  <div class="relative w-full overflow-hidden" style="height: 80vh;">
    <div class="h-full px-20">
      <!-- <nuxt-img ref="image" :src="currentImg.src" class="object-cover w-full h-full image" :class="imageClass" :alt="alt + ' ' +currentImg.room" /></nuxt-img> -->
      <PropertyImageCard :house="currentHouse" class="fade" :class="fadeClass" />
    </div>

    <button class="absolute left-0 inline-flex items-center justify-center w-16 h-16 p-3 transition duration-200 prev bg-blue hover:bg-taupe text-taupe hover:text-blue" style="top: calc(50% - 2rem);" aria-label="Previous House" :class="{ 'hidden' : currentIndex === 0}" @click="prev">
      &#10094;
    </button>
    <button class="absolute right-0 inline-flex items-center justify-center w-16 h-16 p-3 transition duration-200 next bg-blue hover:bg-taupe text-taupe hover:text-blue" style="top: calc(50% - 2rem);" aria-label="Next House" :class="{ 'hidden' : currentIndex === houses.length - 1}" @click="next">
      &#10095;
    </button>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    houses: {
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
      fadeClass: 'fade-in'
    }
  },

  computed: {
    currentHouse () {
      return this.houses[Math.abs(this.currentIndex) % this.houses.length]
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
      this.fadeClass = ''
      this.timer = setInterval(() => { this.fadeClass = 'fade-in' }, 100)

      this.currentIndex += 1
    },
    prev () {
      this.currentIndex -= 1
    }
  }
}
</script>

<style scoped>
.fade.fade-in {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  width:100%;
  opacity: 1;
}

.fade {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

</style>
