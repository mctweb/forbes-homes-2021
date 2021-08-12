<template>
  <article class="grid w-full gap-6 p-6 -mt-6 md:gap-12 md:px-12 md:pb-12 md:grid-cols-3 bg-blue feature">
    <div v-for="{title,text} in features" :key="title" class="p-6 border-2 border-taupe">
      <div class="h-24 md:h-32 lg:h-40" />
      <h2 class="relative pb-3 mb-6 font-serif text-xl leading-tight tracking-widest text-gray-100 uppercase lg:text-3xl afterline">
        {{ title }}
      </h2>
      <p class="text-gray-300">
        {{ text }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          title: 'Luxurious',
          text: 'Spacious 4-5 bedroom homes that are built with the best materials.'
        },
        {
          title: 'Great Location',
          text: 'Quick commute to Aberdeen city and the airport. Great schools.'
        },

        {
          title: 'Landscaped',
          text: 'Pre-landscaped, paved driveways,  plants, and feature rockeries.'
        }

      ]
    }
  }
}
</script>
