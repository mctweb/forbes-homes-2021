<template>
  <article class="flex flex-wrap justify-between px-6 pb-6 md:pb-12 md:px-12">
    <section class="flex flex-col justify-center w-full max-w-xl p-12 mx-auto md:w-1/2" :class="[ flip ? 'md:order-2 pl-16' : 'pr-16']">
      <header class="block pb-3 mb-6 font-serif text-xl leading-none tracking-widest uppercase lg:leading-none lg:text-2xl text-blue afterline" style="max-width: 18rem;">
        {{ title }}
      </header>
      <p><slot /></p>
      <NuxtButton v-if="button && button.to" light :to="button.to" class="self-start mt-3">
        {{ button.text }}
      </NuxtButton>
    </section>
    <aside class="w-full md:w-1/2" :class="{ 'md:order-1' : flip}">
      <nuxt-img :src="image" preset="large" class="object-cover w-full h-full" />
    </aside>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/stripeside/atrium.png'
    },
    button: {
      type: Object,
      default: () => {}
    },
    flip: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
