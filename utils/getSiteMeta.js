const type = 'website'
const url = 'https://forbeshomes.co.uk'
const title = 'Forbes Homes'
const description = 'Forbes Homes is a family owned business with over 30 years\' experience in the construction industry. We understand the importance of your home, and our mission is your happiness.'
const mainImage = '/stripeside/atrium.png'

export const getSiteMeta = (meta) => {
  if (process.env.NODE_ENV === 'development') {
    if (meta.description) {
      const length = meta.description.length
      if (length > 166) { console.log(`${meta.url} :Meta too long. ${length}, (${length - 166} too large),`) }
      if (length < 155) { console.log(`${meta.url} :Meta too short. ${length}, (${155 - length} too small)`) }
    }
  }
  return {
    title: (meta && meta.title) || title,
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: (meta && meta.url) || url
      }
    ],
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: (meta && meta.description) || description
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: (meta && meta.type) || type
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: (meta && meta.url) || url
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: (meta && meta.title) || title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: (meta && meta.description) || description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: (meta && meta.mainImage) || mainImage
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: (meta && meta.url) || url
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: (meta && meta.title) || title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: (meta && meta.description) || description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: (meta && meta.mainImage) || mainImage
      }
    ]
  }
}
