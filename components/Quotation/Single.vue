<template>
  <div class="relative p-6 mx-auto md:px-12 md:pt-12">
    <QuotationMark class="absolute top-0 left-0 w-auto h-12 opacity-20" />
    <div class="flex flex-col flex-wrap w-full lg:flex-row">
      <div class="text-xl opacity-90 lg:w-3/5" :class="[dark ? 'text-gray-700' : 'text-gray-100']">
        {{ quote.message }}
      </div>
      <div v-if="quote.author" class="flex flex-wrap items-center justify-end flex-1 pt-12 pl-6 lg:pt-0">
        <div class="flex flex-col justify-center font-serif">
          <p v-if="quote.author" class="block text-4xl leading-none text-right opacity-70">
            - {{ quote.author }}
          </p>
          <p v-if="quote.authorTitle" class="block text-2xl leading-none text-right opacity-50">
            {{ quote.authorTitle }}
          </p>
        </div>
        <div v-if="quote.profile" class="w-1/2 ml-12">
          <nuxt-picture :src="quote.profile" :alt="quote.author + ' review of Forbes Homes'" class="nuxtpicture " loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      default: () => {
        return {
          message: '',
          author: null,
          authorTitle: null,
          profile: null
        }
      }
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.nuxtpicture::v-deep img{
  @apply w-full h-full;
}
</style>
