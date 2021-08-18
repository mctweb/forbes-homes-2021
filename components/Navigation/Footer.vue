<template>
  <div class="text-gray-300 bg-blue">
    <section class="flex flex-wrap items-center justify-between px-12 py-3 md:px-16 lg:px-20">
      <div class="w-full py-8 md:flex-1">
        <nuxt-img src="/images/nhbc-logo.png" width="245" height="108" class="w-auto h-20 mx-auto md:mr-auto md:ml-0 md:h-24" alt="NHBC Logo" />
      </div>
      <div class="flex-1 py-8">
        <ul class="text-sm text-right md:text-base ">
          <li>
            <NuxtLink to="/why-forbes-homes" class="inline-block py-1 hover:text-white">
              Why Forbes Homes?
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/terms" class="inline-block py-1 hover:text-white">
              Terms & Conditions
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy" class="inline-block py-1 hover:text-white">
              Privacy Policy
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section class="flex flex-wrap items-center justify-between px-12 pt-8 pb-16 text-sm md:px-16 lg:px-20">
      <div class="pr-6">
        Forbes Homes Ltd, Nether Crossley, Maryculter, Aberdeen, AB12 5FA
      </div>
      <div class="pr-6">
        © Forbes Homes Ltd. {{ year }}
      </div>
      <div class="">
        Company No. SC167500
      </div>
    </section>
  </div>
</template>

<script>

export default {
  computed: {
    year () {
      const date = new Date()
      const year = date.getFullYear()
      return year
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
