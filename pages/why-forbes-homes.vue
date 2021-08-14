<template>
  <div>
    <SectionTopBlue>
      <PageHeader>Why Forbes Homes?</PageHeader>
      <HeaderImageHero title="About Forbes Homes" image="/stripeside/Stripeside-25.png">
        Forbes Homes is a family-run housebuilder committed to delivering new homes for sale across the North East of Scotland.
      </HeaderImageHero>
      <div class="flex flex-wrap items-center w-full pt-12">
        <div class="order-2 w-full md:w-2/5 md:h-auto md:order-1">
          <nuxt-img preset="medium" src="/deeview/Cults.png" class="object-cover w-full h-72 md:h-96" alt="Forbes Homes" />
        </div>
        <SectionTextCard title="Building Dreams" class="flex-1 order-1 max-w-xl pb-12 mx-auto md:pl-12 md:py-0 md:order-2" blue>
          We don’t build houses, we build homes. Homes that look, feel, and work perfectly for modern day living.
        </SectionTextCard>
      </div>
    </SectionTopBlue>
    <SectionHalfStandoff
      v-for="({title, image, body, button},i) in advantages.slice(0,2)"
      :key="i + '-Advantages'"
      :title="title"
      :image="image"
      :button="button"
      class="pt-6 md:pt-12"
    >
      {{ body }}
    </SectionHalfStandoff>
    <SectionFull image="/images/Deeview-Dining.png">
      <template #default>
        You can be assured that by choosing a Forbes Home, you are choosing a family run business , proud of their reputation for having high quality homes and a high standard of care.
      </template>
      <template #footer>
        <NuxtButton to="/about" light class="self-start">
          About Us
        </NuxtButton>
      </template>
    </SectionFull>
    <SectionHalfStandoff
      v-for="({title, image, body, button},index) in advantages.slice(2,4)"
      :key="index"
      :title="title"
      :image="image"
      :button="button"
      class="pt-6 md:pt-12"
    >
      {{ body }}
    </SectionHalfStandoff>
  </div>
</template>

<script>
import { getSiteMeta } from '~/utils/getSiteMeta'
export default {
  data () {
    return {
      advantages: [
        {
          title: 'Find Your Forever Home',
          body: 'All our homes feature solid wood oak finishings, traditional coving, Nobilia kitchens with integrated appliances, and Kohler and Roca bathrooms to tailor your home to perfection.',
          image: '/deeview/stairs.png',
          button: null
        },
        {
          title: 'NHBC',
          body: 'As an NHBC registered builder, you can be confident that your new home is covered by an NHBC warranty. NHBC is the leading warranty and insurance provider for new and newly-converted homes in the UK.',
          image: '/deeview/overlay_6.png',
          button: { to: 'https://www.nhbc.co.uk/homeowners/what-does-buildmark-cover', text: 'Buildmark' }
        },
        {
          title: 'Landscaping',
          body: 'We know how important your new home is to you and we want to help you settle in as soon as you can and take full advantage of your home and surroundings.By chosing a new build with Forbes Homes you benefit from our pre-landscaped gardens including driveways, turf, plants, feature rockery and hardwood decking areas.',
          image: '/stripeside/Stripeside-25.png',
          button: null
        },
        {
          title: 'Seal Of Approval',
          body: 'We have always strived to deliver the highest quality homes in great locations and we are proud of the standard that we provide. All of our properties undergo rigorous checks before being passed over to the new owner.',
          image: '/images/seal.png',
          button: null
        }
      ]
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
        title: 'Why choose Forbes Homes?',
        description: 'There are many house builders that could provide a house to you - why should you choose Forbes Homes?',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style>

</style>
