<template>
  <section>
    <header v-if="title" class="block pb-3 font-serif text-xl leading-none tracking-wide lg:leading-none lg:text-2xl afterline" :class="[blue ? 'text-gray-200' : 'text-blue thin']">
      {{ title }}
    </header>
    <p class="whitespace-pre-line">
      <slot />
    </p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    blue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.thin{
    max-width: 18rem;
}
</style>
