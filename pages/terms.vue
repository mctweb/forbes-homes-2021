<template>
  <SectionGeneral id="terms" title="Terms & Conditions">
    <p>
      The term 'Forbes Homes' or 'us' or 'we' refers to the owner of the
      website. The term 'you' refers to the user or viewer of our website.
      Use of this website is subject to the following terms and conditions:
    </p>
    <p>
      The content of the pages of this website is for your general
      information and use only. It is subject to change without notice.
    </p>
    <p>
      This website uses cookies to monitor browsing preferences. If you do
      allow cookies to be used, some personal information may be stored by
      us for use by third parties.
    </p>
    <p>
      Neither we nor any third parties provide any warranty or guarantee as
      to the accuracy, timeliness, performance, completeness or suitability
      of the information and materials found or offered on this website for
      any particular purpose. You acknowledge that such information and
      materials may contain inaccuracies or errors and we expressly exclude
      liability for any such inaccuracies or errors to the fullest extent
      permitted by law.
    </p>
    <p>
      Your use of any information or materials on this website is entirely
      at your own risk, for which we shall not be liable. It shall be your
      own responsibility to ensure that any products, services or
      information available through this website meet your specific
      requirements.
    </p>
    <p>
      This website contains material which is owned by or licensed to us.
      This material includes, but is not limited to, the design, layout,
      look, appearance and graphics. Reproduction is prohibited other than
      in accordance with the copyright notice, which forms part of these
      terms and conditions.
    </p>
    <p>
      All trade marks reproduced in this website which are not the property
      of, or licensed to, the operator are acknowledged on the website.
    </p>
    <p>
      Unauthorised use of this website may give rise to a claim for damages
      and/or be a criminal offence.
    </p>
    <p>
      From time to time this website may also include links to other
      websites. These links are provided for your convenience to provide
      further information. They do not signify that we endorse the
      website(s). We have no responsibility for the content of the linked
      website(s).
    </p>
    <p>
      Your use of this website and any dispute arising out of such use of
      the website is subject to the laws of England, Northern Ireland,
      Scotland and Wales.
    </p>
    <p class="font-semibold">
      Registered in Scotland no. SC167500
    </p>
    <h2 class="pt-8 pb-6 my-1 text-4xl ">
      Legal Disclaimer
    </h2>
    <p>The information shown on this website is intended for illustration purposes only and may change for example in response to market demand or ground conditions. Consequently, it should be treated as general guidance and cannot be relied upon as accurately describing any of the Specified Matters prescribed by any order made under Property Misdescription Act 1991. Nor do the contents constitute a contract, part of a contract or a warranty.</p>
  </SectionGeneral>
</template>

<script>
import { getSiteMeta } from '~/utils/getSiteMeta'
export default {
  head () {
    return {
      ...this.meta
    }
  },
  computed: {
    meta () {
      const metaData = {
        title: 'Terms & Conditions',
        description: 'The terms and conditions for using our website.',
        url: `${this.$config.rootUrl}${this.$route.path}`
      }
      return getSiteMeta(metaData)
    }
  }

}
</script>

<style scoped>
#terms p{
    @apply pb-6;
}
</style>
