<template>
  <div class="">
    <div class="flex flex-wrap p-12 bg-white">
      <div v-for="(plan, i) in plans" :key="i" class="w-full mx-auto md:w-1/2 lg:w-1/3" @click="viewImages(i)">
        <nuxt-img :src="plan" preset="large" class="w-full h-auto transition-transform duration-300 transform cursor-pointer hover:scale-105" alt="Forbes Homes" loading="lazy" />
      </div>
    </div>
    <GalleryModal v-if="imageGallery" :data="plansArray" :start-at="startAt" preset="largesq" @close="closeGallery" />
  </div>
</template>

<script>
export default {
  props: {
    plans: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      startAt: 0,
      imageGallery: false
    }
  },
  computed: {
    plansArray () {
      return this.plans.map((x) => { return { src: x } })
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

<style  scoped>

</style>
