<template>
  <div class="flex flex-wrap items-center w-full mb-3 bg-gray-400 group md:w-auto">
    <label for="appointment" class="flex items-center w-full px-4 pt-3 pb-2 text-sm text-gray-700 uppercase bg-gray-100 md:text-base">Where Did You Hear About Us?

    </label>
    <transition name="fade">
      <ul class="flex flex-wrap w-full px-3 py-3">
        <li v-for="{media,selected} in allMedia" :key="media" class="relative flex flex-wrap items-center justify-center flex-grow w-auto px-6 py-3 border-2 border-gray-300 cursor-pointer md:h-24 hover:bg-gray-100 " :class="[selected ? 'bg-white hover:bg-gray-800 hover:text-gray-300 text-gray-700 hover:border-taupe border-opacity-20' : 'bg-white bg-opacity-50 hover:text-blue text-gray-700 border-opacity-20']" @click="selectMedia(media)">
          {{ media }} <span v-if="selected" class="absolute bottom-0 right-0 px-2 py-2 ml-2 text-xs text-white uppercase bg-taupe">Selected</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {

  data () {
    return {
      request: false,
      allMedia: [
        { media: 'Search Engine / Google', selected: false },
        { media: 'Evening Express', selected: false },
        { media: 'Press & Journal', selected: false },
        { media: 'Word of Mouth', selected: false },
        { media: 'Facebook', selected: false }
      ]
    }
  },
  computed: {
    mediaSelected () {
      return this.allMedia.filter(x => x.selected).map(x => x.media)
    }
  },

  watch: {
    mediaSelected (newValue, oldValue) {
      console.log(this.mediaSelected)
      this.$emit('hearfrom', { hearfrom: this.mediaSelected })
    }
  },
  methods: {
    selectMedia (media) {
      const foundMedia = this.allMedia.findIndex(x => x.media === media)
      this.allMedia[foundMedia].selected = !this.allMedia[foundMedia].selected
    },
    clear () {
      this.mediaSelected = ''
    }
  }
}
</script>

<style>

</style>
