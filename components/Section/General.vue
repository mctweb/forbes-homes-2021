<template>
  <div class="max-w-4xl px-12 py-24 md:px-16 lg:px-20">
    <h1 v-if="title" class="pb-3 mb-6 font-serif text-3xl uppercase afterline md:text-4xl lg:text-5xl">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>
