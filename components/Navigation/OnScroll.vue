<template>
  <div
    class="fixed top-0 z-50 w-full shadow-lg h-30 z-100 navbar bg-gray-50"
    :class="{ 'navbar-show' : !top } "
  >
    <nav class="z-20 flex items-center justify-between w-full h-20 pt-3 border-b-4 md:items-end border-blue border-opacity-20">
      <nuxt-link to="/" name="Home" class="flex items-center justify-center" aria-label="Forbes Homes">
        <LogoSmall class="relative inline-block w-8 h-auto pt-6 pb-6 mx-6 my-auto" />

        <span class="hidden">Homepage</span>
      </nuxt-link>

      <div class="menuitems" :class="{ open : menuIsOpen}" aria-label="Menu" @click.self="$emit('toggle')">
        <button class="absolute top-0 right-0 block p-1 m-10 text-white md:hidden" aria-label="Open Menu" @click="$emit('toggle')">
          <IconCross class="w-8 h-auto" />
          <span class="hidden">Open Menu</span>
        </button>
        <div v-for="(item, id) in items" :key="id" class="relative inline-block ml-6 font-thin tracking-widest uppercase transition duration-100 hover:text-blue xl:ml-12 lg:ml-8 menuitem">
          <NuxtLink :to="item.route" exact-active-class="active" :active-class="item.title === 'Home' ? '' : 'active'">
            {{ item.title }}
          </NuxtLink>
        </div>
      </div>
      <IconMenu class="flex h-10 mx-6 text-blue md:hidden hover:text-taupe" :open="menuIsOpen" @hit="$emit('toggle')" />
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
    top: {
      type: Boolean,
      default: true
    },
    menuIsOpen: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>
.menuitems{
    @apply fixed w-screen h-screen justify-center items-center transition duration-500 flex inset-0 bg-blue flex-col md:flex-row;
    transform: translate3d(-100%, 5rem, 0);
    height: calc(100vh + 5rem);
    z-index: 99;
}
.menuitems.open{
    transform: translate3d(0, 5rem, 0);
}
.menuitems .menuitem{
    @apply relative block font-thin tracking-widest text-gray-200 py-2 transition duration-100 hover:text-taupe md:inline-block md:ml-6 md:text-gray-600 md:hover:text-blue xl:ml-12 lg:ml-8 md:py-0;
}

.navbar-show .menuitems{
    transform: translate3d(-100%, 0%, 0);
    height: 100vh;
}
.navbar-show .menuitems.open{
    transform: translate3d(0, 0%, 0);
}
@screen md{
    .menuitems, .menuitems.open{
    @apply fixed w-screen h-screen justify-center items-center transition duration-500 flex inset-0 bg-blue flex-col md:flex-row;
    transform: translate3d(0, 0, 0);
    }

    .menuitems, .menuitems.open{
        @apply flex relative bg-transparent h-auto w-auto flex-row mx-6 pb-2 pr-2 ml-auto text-sm px-6;
    }
    .menuitems .menuitem a::after{
        @apply absolute  left-0 right-0 bg-white bg-opacity-0 transition duration-300;
        content: '';
        bottom: -12px;
        height: 3px;
        left: -1.5rem;
        right: -1.5rem;
        width: calc(100% + 3rem);
    }

    .menuitems .menuitem a::after{
        @apply  bg-blue bg-opacity-0 ;
    }
    .menuitems .menuitem:hover a::after{
        @apply bg-opacity-100 bg-taupe;
    }
    .menuitems .menuitem a.active::after {
      @apply bg-opacity-100 bg-taupe;
    }
        .menuitems .menuitem:hover a.active::after {
      @apply bg-opacity-100 bg-blue;
    }

    .navbar{
    @apply transition duration-500 h-auto;
    transform: translate3d(0, -100%, 0);
    }
    .navbar-show{
        @apply h-auto;
        transform: translate3d(0, 0%, 0);
    }
    .navbar-show, .navbar-show .menuitems, .navbar-show .menuitems.open{
        @apply h-auto;
        transform: translate3d(0, 0, 0);
    }
}

</style>
