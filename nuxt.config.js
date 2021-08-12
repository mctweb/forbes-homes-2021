export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'We build forever homes',
    titleTemplate: '%s | Forbes Homes',
    meta: [

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Forbes Homes, Homes for Sale Scotland, Houses for Sale Scotland, Aberdeenshire Properties, Property Development Scotland, Aberdeenshire Properties' },
      { hid: 'description', name: 'description', content: 'Forbes Homes is a family owned business with over 30 years\' experience in the construction industry. We understand the importance of your home, and our mission is your happiness.' },
      { hid: 'og:desc', property: 'og:description', content: 'Forbes Homes is a family owned business with over 30 years\' experience in the construction industry. We understand the importance of your home, and our mission is your happiness.' },
      { hid: 'og:title', property: 'og:title', content: 'We build forever homes' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', property: 'og:type', content: 'Forbes Homes' },
      { hid: 'og:image', property: 'og:image', content: '/stripeside/atrium.png' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  publicRuntimeConfig: {
    rootUrl: process.env.NODE_ENV === 'production' ? 'https://forbeshomes.co.uk' : 'http://localhost:3000'

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    ['nuxt-gmaps', {
      key: process.env.MAPS_API
    }],
    ['@nuxtjs/google-analytics', {
      id: 'UA-36759801-2'
    }]
  ],
  googleFonts: {
    families: {
      Amiko: [400]
    }
  },
  image: {
    presets: {
      cover: {
        modifiers: {
          format: 'png',
          width: 1280,
          height: 1000,
          fit: 'cover',
          sizes: 'xs:320 sm:640 md:768 lg:1280 xl:1536 xxl:1800'
        }
      },
      large: {
        modifiers: {
          format: 'png',
          width: 1200,
          height: 1000,
          fit: 'cover',
          sizes: 'sm:600 md:700 lg:900 xl:1000 xxl:1400'
        }
      },
      largesq: {
        modifiers: {
          format: 'png',
          width: 1200,
          height: 1200,
          fit: 'contain',
          sizes: 'sm:600 md:700 lg:900 xl:1000 xxl:1400'
        }
      },
      medium: {
        modifiers: {
          format: 'png',
          width: 750,
          height: 650,
          fit: 'cover',
          sizes: 'sm:600 md:650 lg:700 xl:750'
        }
      },
      small: {
        modifiers: {
          format: 'png',
          width: 300,
          height: 250,
          fit: 'cover',
          sizes: 'sm:200 md:250 lg:300'
        }
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://forbeshomes.co.uk',
    gzip: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
