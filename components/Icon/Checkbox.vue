<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <transition name="fade">
      <path v-if="checked" d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" class="fill-current" />
      <path v-else d="M22 2V22H2V2H22ZM24 0H0V24H24V0Z" class="fill-current" />
    </transition>
  </svg>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
