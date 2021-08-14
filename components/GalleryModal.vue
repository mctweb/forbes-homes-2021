<template>
  <transition name="modal" appear>
    <div
      ref="modal"
      class="fixed top-0 bottom-0 left-0 right-0 z-50 px-6 py-12 overflow-x-hidden bg-black cursor-pointer bg-opacity-80 md:px-16 overscroll-y-auto modal--images"
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

          <div class="modal__image">
            <nuxt-img
              v-if="activeItem"
              :src="activeItem.src"
              loading="lazy"
              :preset="preset"
              class="w-full h-auto bg-white"
              alt="Forbes Homes"
            />
          </div>

          <div
            v-if="showNav"
            class="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between h-10 mx-3 mb-3 md:absolute md:-mb-12 md:flex-end appear"
          >
            <button
              class="flex items-center justify-center p-0 transition duration-500 transform md:fixed top-half md:w-16 md:h-10 md:left-0 focus:outline-none hover:scale-125"
              aria-label="Previous"
              type="button"
              title="Previous"
              @click.stop="previous"
            >
              <!-- eslint-disable-next-line -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M17.9 23.2L6.1 12 17.9.8"
                />
              </svg>
            </button>

            <div v-if="activeItem" class="block px-1 text-lg text-white w-30">
              {{ selected + 1 }} / {{ data.length }}
            </div>

            <button
              class="flex items-center justify-center p-0 transition duration-500 transform md:fixed top-half md:w-16 md:h-10 md:right-0 focus:outline-none hover:scale-125"
              aria-label="Next"
              type="button"
              title="Next"
              @click.stop="next"
            >
              <!-- eslint-disable-next-line -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M6.1 23.2L17.9 12 6.1.8"
                />
              </svg>
            </button>
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
let lastFocusableEl
export default {
  props: {
    data: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },

    startAt: {
      type: Number,
      required: false,
      default: 0
    },
    preset: {
      type: String,
      default: 'cover'
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
  computed: {
    showNav () {
      return this.data.length > 1
    }
  },
  watch: {
    selected () {
      this.activeItem = this.data[this.selected]
    }
  },
  created () {
    this.selected = this.startAt
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
    lastFocusableEl = focusableEls[focusableEls.length - 1]
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
    previous () {
      this.selected = (this.selected - 1 + this.data.length) % this.data.length
    },
    next () {
      this.selected = (this.selected + 1) % this.data.length
    },
    close () {
      this.$emit('close')
    },
    handleKeyDown (e) {
      if (e.keyCode === 27) {
        // esc key
        this.close()
      } else if (e.keyCode === 39) {
        // right arrow
        this.next()
      } else if (e.keyCode === 37) {
        // left arrow
        this.previous()
      } else if (e.keyCode === 9) {
        // tab
        if (focusableEls.length === 1) {
          e.preventDefault()
          return
        }
        if (e.shiftKey) {
          this.handleBackwardTab(e)
        } else {
          this.handleForwardTab(e)
        }
      }
    },
    handleForwardTab (e) {
      if (document.activeElement === lastFocusableEl) {
        e.preventDefault()
        firstFocusableEl.focus()
      }
    },
    handleBackwardTab (e) {
      if (document.activeElement === firstFocusableEl) {
        e.preventDefault()
        lastFocusableEl.focus()
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
    opacity: 1;
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
.modal__image img {
  max-height: calc(100vh - 8.8rem);
}
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.top-half {
  top: 50%;
}
/* .modal__image.lazyloading {
  background: url('~assets/loader.svg') no-repeat center;
} */
</style>
