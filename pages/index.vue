<template>
  <main>
    <section>
      <div class="mx-auto">
        <HeaderHomepage />
        <StripesideTripleFeature />
        <div class="grid gap-6 p-6 -mt-6 md:grid-cols-2 md:gap-12 md:px-12 md:pb-12 bg-blue">
          <NuxtButton to="/developments" light class="flex-1">
            View Properties
          </NuxtButton>
          <NuxtButton to="/contact?development=Stripeside" light class="flex-1">
            Arrange a Viewing
          </NuxtButton>
        </div>
        <SectionHalfStandoff title="Find your forever home, today." class="pt-6 md:pt-12" image="/stripeside/atrium.png">
          <template #main>
            <div class="relative">
              <QuotationMark class="absolute top-0 left-0 w-auto h-16 -mt-8 -ml-8 md:h-24 lg:h-32 opacity-10" />
              <QuotationMark class="absolute bottom-0 right-0 w-auto h-16 -mb-8 -mr-8 transform rotate-180 md:h-24 lg:h-32 opacity-10" />
              We have contracted Forbes Homes many times over the past 30 years on a variety building and renovation projects. Being a small family business, we have always found them to be very conscientious and thorough in their work with <span class="font-bold">excellent attention to detail.</span><br>
              We would happily recommend them as a trustworthy and sensibly priced construction company that offers sound advice on every project they have undertaken for us.
            </div>
          </template>
        </SectionHalfStandoff>
        <SectionHalfStandoff title="Timeless design & premium materials" image="/stripeside/StripesideBack.png" :button="{to:'/developments', text: 'View Properties'}">
          We pride ourselves with a personal service and first class attention to detail, ensuring you will be delighted with your new home.
        </SectionHalfStandoff>
        <SectionFull image="/images/Deeview-Dining.png">
          <template #default>
            We will guide you through the buying process and ensure you end up with your dream home.
          </template>
          <template #footer>
            <NuxtButton to="/why-forbes-homes" light class="self-start">
              Why choose Forbes Homes?
            </NuxtButton>
          </template>
        </SectionFull>
        <SectionHalfStandoff title="Our Team" image="/deeview/Deeview-Dining.png" class="pt-6 md:pt-12" :button="{to:'/about', text: 'About Us'}">
          Forbes Homes is a family owned business with over 30 years' experience in the construction industry. We understand the importance of your home, and our mission is your happiness.
        </SectionHalfStandoff>
        <PropertyLargeStandout :development="mainDevelopment" :available="mainDevelopment.available" />
      </div>
    </section>
  </main>
</template>

<script>
import { developments } from '~/static/properties'
import { getSiteMeta } from '~/utils/getSiteMeta'
import { amountAvailableNow } from '~/utils/common'

export default {
  asyncData () {
    return {
      developments
    }
  },
  head () {
    return {
      ...this.meta
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'Find your forever home',
        description: 'Forbes Homes is a family owned business with over 30 years\' experience in building homes. We understand the importance of your home and our mission is your happiness.',
        url: `${this.$config.rootUrl}${this.$route.path}`,
        image: this.$img('/stripeside/StripesideFarmWide.png', { width: 1200, height: 627, fit: 'contain' })
      }
      return getSiteMeta(metaData)
    },
    mainDevelopment () {
      const development = developments[0]
      const available = amountAvailableNow(development.houses)
      return {
        ...development,
        available
      }
    }
  }

}
</script>
