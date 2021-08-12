<template>
  <div id="contact" class="w-full">
    <div class="bg-gray-100">
      <div class="container mx-auto px-4 py-10 md:p-20">
        <div v-if="!sent">
          <h2 class="py-1 my-1 text-4xl text-gray-700 border-b-2">
            Contact Us
          </h2>
          <p>
            Please complete the form below if you would like to be kept up to
            date with our developments. Your information will not be shared with
            any third parties.<br>
            * Denotes mandatory field.
          </p>
          <form class="pt-10">
            <div id="contact" class="flex flex-wrap -mx-3 mb-0 md:mb-2">
              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="name"
                >
                  Name *
                </label>
                <input
                  id="name"
                  v-model="name"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none focus:bg-white
                  "
                  type="text"
                  placeholder="Enter Name..."
                >
              </div>
              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="email"
                >
                  Email *
                </label>
                <input
                  id="email"
                  v-model="email"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  type="email"
                  placeholder="name@email.com"
                >
              </div>
              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="telephone"
                >
                  Telephone *
                </label>
                <input
                  id="telephone"
                  v-model="telephone"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  type="tel"
                  placeholder="07123456789"
                >
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-0 md:mb-2">
              <div class="w-full px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  v-model="address"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none focus:bg-white
                  "
                  type="text"
                  placeholder="Enter Address..."
                >
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-0 md:mb-2">
              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="city"
                >
                  City
                </label>
                <input
                  id="city"
                  v-model="city"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  type="text"
                  placeholder="Aberdeen"
                >
              </div>

              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="postcode"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  v-model="postcode"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  type="text"
                  placeholder="AB12 5FA"
                >
              </div>
              <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="reason"
                >
                  Reason for Enquiry *
                </label>
                <div class="relative">
                  <select
                    id="reason"
                    v-model="reason"
                    class="
                      block
                      appearance-none
                      w-full
                      bg-gray-200
                      border border-gray-200
                      text-gray-700
                      py-3
                      px-4
                      pr-8
                      rounded
                      leading-tight
                      focus:outline-none focus:bg-white focus:border-gray-500
                    "
                  >
                    <option>Arrange a Viewing</option>
                    <option>Register an Interest</option>
                    <option>General Enquiry</option>
                  </select>
                  <div
                    class="
                      pointer-events-none
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      px-2
                      text-gray-700
                    "
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-0 md:mb-2">
              <div
                v-if="
                  reason == 'Register an Interest' ||
                    (interest.length > 0 && reason != 'Arrange a Viewing')
                "
                class="w-full px-3 mb-2 md:mb-0"
              >
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="properties"
                >
                  Properties
                </label>
                <div class="flex flex-wrap">
                  <div
                    v-for="property in properties"
                    :key="property.key"
                    class="check"
                    :class="[
                      property.checked
                        ? 'bg-blue-500 text-white'
                        : 'bg-transparent text-gray-700 ',
                    ]"
                    @click="clickProperty(property.key)"
                  >
                    {{ property.name
                    }}<span
                      class="text-xs"
                      :class="[
                        property.checked ? 'text-blue-100' : 'text-blue-300',
                      ]"
                    >- {{ property.place }}</span>
                    <div
                      class="text-sm uppercase tracking-wider text-blue-100 h-6"
                    >
                      {{ property.checked ? 'Interested' : '' }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-0 md:mb-2">
              <div class="w-full px-3 mb-2 md:mb-0">
                <label
                  class="
                    block
                    uppercase
                    tracking-wide
                    text-gray-700 text-xs
                    font-bold
                    mb-2
                  "
                  for="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  class="
                    w-full
                    bg-gray-200
                    border border-gray-200
                    smooth
                    text-gray-700
                    py-3
                    px-4
                    pr-8
                    rounded
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  :class="[textSelected ? 'h-40' : 'h-12']"
                  @focus="textSelected = true"
                />
              </div>
            </div>

            <div
              class="
                rounded
                px-6
                py-3
                uppercase
                tracking-widest
                border
                bg-blue-500
                text-white
                cursor-pointer
                hover:bg-brown-500 hover:font-bold
              "
              @click="sendEmail"
            >
              SEND
            </div>
          </form>
        </div>
        <div v-else>
          <h2 class="text-3xl text-gray-700 leading-none pt-6">
            Message Sent
          </h2>
          <h4 class="text-xl text-blue-400 pt-0">
            Thank you for your enquiry. We will be in touch shortly.
          </h4>
          <div
            class="
              fixed
              w-full
              h-full
              bg-gray-200
              top-0
              left-0
              bottom-0
              right-0
              cursor-pointer
              smooth
            "
            :class="{ 'opacity-0': hideModal }"
            @click="hideModal = !hideModal"
          >
            <div
              class="
                flex flex-col
                justify-center
                align-center
                items-center
                h-full
              "
            >
              <h2 class="text-3xl text-gray-700 leading-none pt-6">
                Message Sent
              </h2>
              <h4 class="text-xl text-blue-400 pt-0">
                Thank you for your enquiry. We will be in touch shortly.
              </h4>
              <p>Click to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideModal: false,
      name: '',
      telephone: '',
      email: '',
      address: '',
      city: '',
      postcode: '',
      message: '',
      reason: '',
      textSelected: false,
      sent: false
    }
  },
  computed: {
    interest () {
      return this.$store.getters.interestedProperties
    },
    properties () {
      return this.$store.getters.orderedHouses
    }
  },
  methods: {
    clickProperty (id) {
      this.$store.commit('changeInterest', id)
    },

    async sendEmail () {
      const items = {
        name: this.name,
        telephone: this.telephone,
        email: this.email,
        address: this.address,
        city: this.city,
        postcode: this.postcode,
        reason: this.reason,
        message: this.message,
        interest: this.interest
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const newitem = JSON.stringify(items)
      const res = await this.$axios.$post(
        'https://forbeshomes.co.uk/.netlify/functions/email',
        newitem,
        config
      )
      if (res === 'Message sent') {
        this.sent = true
        setTimeout(() => {
          this.hideModal = true
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.check {
  @apply appearance-none flex-auto mb-1 border border-gray-200 py-3 px-4 rounded leading-tight cursor-pointer;
}
.check:focus {
  @apply outline-none bg-white border-gray-500;
}
</style>
