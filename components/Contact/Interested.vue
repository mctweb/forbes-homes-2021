<template>
  <div class="flex flex-wrap items-center w-full mb-3 bg-gray-400 group md:w-auto">
    <label for="interest" class="flex items-center w-full px-4 pt-3 pb-2 text-sm text-gray-700 uppercase bg-gray-100 md:text-base" @click="checkboxClicked">Register An Interest
      <div class="flex flex-wrap items-center justify-end ml-auto"><div v-if="request && interest" class="pl-2 ml-auto text-sm md:text-base">{{ interest }}</div>
        <IconCheckbox class="w-6 h-6 mb-1 ml-3 text-gray-500 hover:bg-white" :checked="request" /></div>
    </label>
    <transition name="fade">
      <ul v-if="request" class="flex flex-wrap w-full px-3 py-3">
        <li v-for="{development,selected} in allDevelopments" :key="development" class="flex flex-wrap items-center justify-center flex-1 px-6 py-3 border-2 border-gray-300 cursor-pointer md:h-24 hover:bg-gray-100 " :class="[selected ? 'bg-white hover:bg-gray-800 hover:text-gray-300 text-gray-700 hover:border-taupe border-opacity-20' : 'bg-white bg-opacity-50 hover:text-blue text-gray-700 border-opacity-20']" @click="selectDevelopment(development)">
          {{ development }} <span v-if="selected" class="px-2 py-4 ml-2 text-xs text-white uppercase bg-taupe">Selected</span>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <ul v-if="developmentSelected && request" class="grid w-full gap-3 px-3 pb-3 overflow-y-auto text-sm md:grid-cols-2 lg:grid-cols-3 max-h-64 md:max-h-full">
        <li v-for="{plot, selected} in selectedDevelopment.houses" :key="plot" :class="[selected ? 'bg-white hover:bg-gray-800 hover:text-gray-300 text-gray-700 hover:border-taupe border-opacity-20' : 'bg-white bg-opacity-50 hover:text-blue text-gray-700 border-opacity-20']" class="flex flex-col items-center justify-center px-6 py-3 border-2 border-gray-300 cursor-pointer md:h-24 hover:bg-gray-100 " @click="selectProperty(plot)">
          Plot {{ plot }}<div v-if="selected" class="px-2 py-1 ml-2 text-xs text-white uppercase bg-taupe">
            Selected
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { developments } from '~/static/properties'
export default {

  data () {
    return {
      request: false,
      developmentSelected: '',
      propertySelected: ''
    }
  },
  computed: {
    selectedDevelopment () {
      return this.allDevelopments.find(x => x.selected)
    },
    interest () {
      let interest = null
      if (!this.request) { return null }
      if (this.developmentSelected) {
        interest = this.developmentSelected.charAt(0).toUpperCase() + this.developmentSelected.slice(1)
      }
      if (this.propertySelected && this.developmentSelected) {
        interest += ', Plot ' + this.propertySelected
      }

      return interest
    },
    allDevelopments () {
      return developments.map((x) => {
        return {
          development: x.development,
          selected: this.developmentSelected.toLowerCase() === x.development.toLowerCase(),
          houses: x.houses.filter(x => x.status === 'Available' || x.status === 'Viewing Home' || x.status === 'Future Release').map((x) => {
            return {
              ...x,
              plot: x.plot,
              style: x.style,
              selected: this.propertySelected === x.plot
            }
          })
        }
      })
    }
  },
  watch: {
    interest (newValue, oldValue) {
      this.$emit('interest', { interest: this.interest })
    }
  },
  mounted () {
    this.getInterestsFromRoute()
  },
  methods: {
    getInterestsFromRoute () {
      if (this.$route.query.interest) {
        this.developmentSelected = this.$route.query.interest.toLowerCase()
        setTimeout((x) => { this.request = true }, 1000)
      }
      if (this.$route.query.plot) {
        this.propertySelected = this.$route.query.plot.toLowerCase()
      }
    },

    checkboxClicked () {
      this.request = !this.request
      if (!this.request) { this.clear() }
      if (developments.length === 1) {
        this.developmentSelected = this.allDevelopments[0].development
      }
    },

    clear () {
      this.developmentSelected = ''
      this.propertySelected = ''
    },

    selectDevelopment (development) {
      this.developmentSelected.toLowerCase() === development.toLowerCase() ? this.clear() : this.developmentSelected = development
    },

    selectProperty (development) {
      this.propertySelected.toLowerCase() === development.toLowerCase() ? this.propertySelected = '' : this.propertySelected = development
    }
  }
}
</script>

<style>

</style>
