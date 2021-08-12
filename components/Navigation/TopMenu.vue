<template>
  <div class="z-40 w-full shadow-lg h-30 z-100 bg-blue">
    <nav class="relative z-20 flex items-center justify-between w-full px-6 pt-3 border-b-4 border-gray-300 md:items-end border-opacity-10">
      <nuxt-link to="/" name="Home">
        <LogoWhite class="inline-block w-24 h-auto px-2 py-4 mx-2 my-auto" />
        <span class="hidden">Homepage</span>
      </nuxt-link>

      <ul class="items-center hidden w-auto pb-2 pr-2 ml-auto text-sm menuitems md:flex">
        <li v-for="(item, id) in items" :key="id" class="relative inline-block ml-6 font-thin tracking-widest text-gray-200 uppercase transition duration-100 hover:text-white xl:ml-12 lg:ml-8">
          <NuxtLink :to="item.route" exact-active-class="active">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <IconMenu class="flex h-10 text-white md:hidden hover:text-taupe" :open="menuIsOpen" @hit="$emit('toggle')" />
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    menuIsOpen: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>

ul.menuitems li a::after{
  @apply absolute  left-0 right-0 bg-white bg-opacity-0 transition duration-300;
  content: '';
  bottom: -12px;
  height: 3px;
  left: -1.5rem;
  right: -1.5rem;
  width: calc(100% + 3rem);
}

ul.menuitems li a.active::after, ul.menuitems li a.active:hover::after{
  @apply bg-taupe;
}

ul.menuitems li a:hover::after{
  @apply bg-opacity-100;
}

</style>
