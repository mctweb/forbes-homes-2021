<template>
  <transition name="modal" appear>
    <div
      ref="modal"
      class="fixed top-0 bottom-0 left-0 right-0 z-50 p-6 py-12 overflow-x-hidden bg-black bg-opacity-75 cursor-pointer md:px-6 md:py-12 lg:px-16 overscroll-y-auto"
      tabindex="-1"
      aria-hidden="false"
      aria-label="images"
      role="dialog"
      @click="close"
    >
      <div class="modal__wrap">
        <div class="relative m-auto cursor-default" @click.stop>
          <button
            class="absolute top-0 right-0 z-10 flex items-center justify-center w-12 h-12 -mt-12 text-white transition duration-500 transform focus:outline-none hover:scale-125"
            aria-label="Close"
            type="button"
            @click.stop="close"
          >
            <!-- eslint-disable-next-line -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <g
                fill="none"
                class="stroke-current"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
              >
                <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25" />
              </g>
            </svg>
          </button>
          <div
            class="max-w-xl text-gray-700 bg-gray-300"
          >
            <slot />

            <footer
              v-if="$slots.footer"
              class="flex flex-wrap items-center justify-between w-full mt-12"
            >
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
let focusedElBeforeOpen
let focusableEls
let firstFocusableEl
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Are you sure?'
    }
  },
  data () {
    return {
      selected: null,
      activeItem: null
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: 'modal-open'
      }
    }
  },

  beforeMount () {
    window.addEventListener('keydown', this.handleKeyDown)
    focusedElBeforeOpen = document.activeElement
  },
  mounted () {
    focusableEls = this.$refs.modal.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    )
    focusableEls = Array.prototype.slice.call(focusableEls)
    firstFocusableEl = focusableEls[0]
    // focus on the first element
    firstFocusableEl.focus()
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleKeyDown)
    if (focusedElBeforeOpen) {
      focusedElBeforeOpen.focus()
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    handleKeyDown (e) {
      if (e.keyCode === 27) {
        // esc key
        this.close()
      }
    }
  }
}
</script>

<style>
.appear {
  animation: fadein 4s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
body.modal-open {
  overflow: hidden;
}
.modal__wrap {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.w-80vw {
  width: 80vw;
}
</style>
