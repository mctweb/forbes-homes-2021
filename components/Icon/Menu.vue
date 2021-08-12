<template>
  <button class="menu" :class="{ opened : open}" :aria-expanded="open" aria-label="Main Menu" @click="$emit('hit')">
    <svg class="w-auto h-full" viewBox="0 0 100 100">
      <path class="stroke-current line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
      <path class="stroke-current line line2" d="M 20,50 H 80" />
      <path class="stroke-current line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openMenu () {
      this.$emit('hit')
    }
  }
}
</script>

<style scoped>
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.line {
  fill: none;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}

</style>
