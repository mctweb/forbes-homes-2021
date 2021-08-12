<template>
  <div class="max-w-3xl px-12 py-24 mx-auto md:py-32 lg:py-40 xl:py-48 md:px-16 lg:px-20">
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
