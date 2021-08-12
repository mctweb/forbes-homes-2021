<template>
  <div class="">
    <NavigationTopMenu :items="menuItems" :menu-is-open="menuIsOpen" @toggle="toggleMenu" />
    <NavigationOnScroll :items="menuItems" :top="atTop" :menu-is-open="menuIsOpen" @toggle="toggleMenu" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      lastScrollPosition: 0,
      currentScrollPosition: 0,
      menuIsOpen: false,
      menuItems: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Developments',
          route: '/developments'
        },
        {
          title: 'About',
          route: '/about'
        },
        {
          title: 'Contact',
          route: '/contact'
        }
      ]
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: [this.menuIsOpen ? 'overflow-hidden md:overflow-auto' : '']
      }
    }
  },
  computed: {
    atTop () {
      return this.currentScrollPosition <= 200
    }
  },
  watch: {
    '$route' () {
      this.menuIsOpen = !this.menuIsOpen
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggleMenu () {
      this.menuIsOpen = !this.menuIsOpen
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      this.currentScrollPosition = currentScrollPosition
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.lastScrollPosition = currentScrollPosition
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
ul.menuitems.menu-drop li a.active::after, ul.menuitems.menu-drop li a.active:hover::after{
  @apply bg-taupe;
}
ul.menuitems.menu-drop li a::after{
  @apply  bg-blue bg-opacity-20 ;
}
ul.menuitems li a:hover::after{
  @apply bg-opacity-100;
}
.navbar{
  @apply transition duration-500;
}
.navbar{
  transform: translate3d(0, -100%, 0);
}
.navbar-show {
  transform: translate3d(0, 0, 0);
}
</style>
