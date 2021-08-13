<template>
  <div>
    <SectionTopBlue>
      <PageHeader> About Us</PageHeader>
      <HeaderImageHero title="About Forbes Homes" :image="mainImages[0].src">
        We are a family managed business with over 30 years' experience in the construction industry.
      </HeaderImageHero>

      <div class="py-12 md:py-16 lg:py-24">
        <QuotationSingle :quote="quote" />
      </div>
    </SectionTopBlue>
    <SectionSimpleText>
      <p>
        At Forbes Homes, we believe that buying a new home from us should be an enjoyable experience from start to finish.<br>

        We have spent decades building a reputable business, and it is vital that every one of our clients walks away with a smile on their face ( and a gorgeous home! ). We are a small, family run business, and every one of our clients is important to us.<br>

        Together we will make your vision a reality.
      </p>
    </SectionSimpleText>
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
  </div>
</template>

<script>
import { getSiteMeta } from '~/utils/getSiteMeta'
export default {
  data () {
    return {
      mainImages: [{ src: '/stripeside/Stripeside-27.png', room: 'exterior', featured: true }, { src: '/stripeside/Stripeside-25.png', room: 'exterior', featured: true }, { src: '/stripeside/Stripeside-20.png', room: 'exterior', featured: true }],
      quote: {
        message: 'Forbes Homes are not your average building company - they are a long standing family run company with their roots firmly in the North East of Scotland. They take a real pride in their work whether it be new build ( commercial and residential ) or renovations / extensions . Their experienced team of specialists covers all trades and the quality of workmanship is second to none . I have no hesitation in recommending their services .',
        author: 'Dave',
        authorTitle: 'Homeowner'

      }
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
        title: 'About',
        description: 'Forbes Homes have always strived to deliver the highest quality homes in great locations, and we are proud of the exceptional standard that we provide throughout. ',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }

  }

}
</script>
<style>

</style>
