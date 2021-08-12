<template>
  <Component
    :is="is"
    v-bind="props"
    class="button"
    :class="[{'pointer-events-none opacity-50': disabled }, {light:light} ]"
    v-on="$listeners"
    @focus="handleFocus(true)"
    @blur="handleFocus(false)"
    @mousedown="mousedownHandler"
  >
    <span class="inline-block mr-2"><slot /></span>
    <IconArrowShort class="inline-block w-6 h-auto pb-1 ml-2 transition duration-200 transform md:hidden group-hover:translate-x-2" />
    <IconArrow class="hidden w-12 h-auto pb-1 ml-3 transition duration-200 transform md:inline-block lg:w-24 group-hover:translate-x-2" />
  </Component>
</template>

<script>

export default {
  props: {
    light: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    rel: {
      type: String,
      default: 'noopener nofollow noreferrer'
    },
    target: {
      type: String,
      default: '_blank'
    },
    tag: {
      type: String,
      default: 'a'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      focusedByMouse: false,
      focus: false,
      focusVisible: false

    }
  },
  computed: {
    props () {
      return {
        a: {
          href: this.to,
          target: this.target,
          rel: this.rel,
          ariaLabel: this.ariaLabel
        },
        NuxtLink: {
          to: this.to,
          ariaLabel: this.ariaLabel
        },
        button: {
          type: 'button',
          disabled: this.disabled,
          ariaLabel: this.ariaLabel
        }
      }[this.is]
    },
    isExternal () {
      if (!this.to) { return false }
      const isInternal =
        typeof this.to !== 'string' ||
        (this.to.startsWith('/') && this.to.startsWith('//') === false)
      return !isInternal
    },
    is () {
      if (this.isExternal) {
        return 'a'
      } else if (this.to) {
        return 'NuxtLink'
      } else {
        return 'button'
      }
    }
  },
  methods: {
    mousedownHandler () {
      this.focusedByMouse = true
    },
    handleFocus (state) {
      if (state) {
        if (this.focusedByMouse) {
          this.focus = true
          this.focusVisible = false
        } else {
          this.focus = true
          this.focusVisible = true
        }
      } else {
        this.focus = false
        this.focusVisible = false
        this.focusedByMouse = false
      }
    }

  }
}
</script>

<style scoped>
/* global reset, since Tailwind/Windi has "-webkit-appearance: button" which leads to default look in Safari */
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: none;
}

.button{
@apply group inline-flex  justify-between leading-tight items-center flex-shrink-0 w-auto px-6 pt-5 pb-4 tracking-widest uppercase bg-blue transition duration-200 hover:bg-white hover:text-blue border-2 border-transparent;
}
.button.light{
  @apply bg-white text-blue hover:bg-blue hover:text-white hover:border-white ;
}
</style>
