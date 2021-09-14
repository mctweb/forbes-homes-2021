const allPlots = {
  development: 'Stripeside',
  city: 'Aberdeenshire',
  area: 'Netherley',
  postcode: 'AB39 3AB',
  type: 'New Build Homes',
  image: '/stripeside/basic.png',
  siteLayout: 'StripesideSiteLayout',
  price: '£TBC',
  features: [
    {
      title: 'Modern & Spacious Kitchen',
      description: 'Clean lines, exquisite materials and clearly structured architecture – these are the distinguishing marks of this designer Nobilia kitchen. Integrated appliances, with solid quartz worktops make for a modern and polished finish.',
      image: '/stripeside/Stripeside-47.png'
    },
    {
      title: 'Enviable Lounge',
      description: 'No matter what size of home, the lounge is the place where people can relax, chat, and enjoy each other\'s company. This spacious living room ensures that the family can enjoy time together in comfort with plenty of natural light.',
      image: '/stripeside/Stripeside-48.png'
    },
    {
      title: 'Five Generous Bedrooms',
      description: 'A master bedroom with en suite and walk in wardrobe. Two further bedrooms with en suites and walk in wardrobes. In addition to two standard bedrooms.',
      image: '/stripeside/Stripeside-46.png'
    },
    {
      title: 'Five Luxurious Bathrooms',
      description: 'Our Stripeside homes come with five fully fitted bathrooms.',
      image: '/stripeside/Stripeside-04.png'
    }
  ],
  mapLocation: {
    lat: 57.05577368908729,
    lng: -2.2209145018531053
  },
  location: [
    {
      title: 'Great For Commuting', description: 'The new Aberdeen bypass is a short drive away giving easy access to Westhill, Dyce, Cove and Stonehaven.'
    },
    {
      title: 'Highly Acclaimed Schools', description: 'Lairhillock Primary School, Cults Academy and The International School are all located nearby. '
    },
    {
      title: 'Local Facilities', description: 'Nearby Cults, Peterculter and Stonehaven provide  restaurants, shops and other local facilities'
    }
  ],
  specification: [
    {
      title: 'Kitchen',
      description: 'Nobila furniture, Neff appliances with quartz worktop as per viewing home – supplied and installed by Laings Inverurie.',
      list: [
        'Double oven', 'Induction hob', 'Extractor canopy', 'Integral fridge freezer', 'Dishwasher'
      ]
    },
    { title: 'Utility', description: 'Nobila furniture with 40mm laminate worktop as per viewing home – supplied and installed by Laings Inverurie.' },
    { title: 'Carpets', description: 'Fitted in living room, bedrooms and dressing rooms. Colour samples are available to select from.' },
    { title: 'Laminate flooring', description: 'Plank laminate flooring in hall, kitchen and utility areas and also available in all shower room, en suite and bathroom areas. Samples available to select from.' },
    { title: 'Underfloor heating', description: 'The ground floor has underfloor heating throughout. On the upper floors, electric under floor heating is fitted in the bathroom and en suite shower rooms.' },
    { title: 'Tiles', description: 'Wall tiling as per viewing home – tiles supplied from Aberdeen Tile Distributors. Also available for all shower rooms, en suite and bathroom floors.' },
    {
      title: 'Bathroom and en suite sanitaryware',
      description: '(as per viewing home)',
      list: [
        'Wall hung Kohler or Roca toilet pans (concealed cistern already installed)',
        'The ground floor shower and main bathroom have single wash hand basins including vanity unit',
        'The master en suite is piped for a double wash hand basin with option of vanity unit below',
        'The second floor en suites have semi pedestal wash hand basins',
        'LED mirrors above all wash hand basins',
        'Fixed head and slide rails fitted in each shower with Zen wet room fixed glass panels',
        'Free standing bath in bathroom as per viewing home',
        'Towel rails in each en suite, bathroom and shower room',
        'Electric underfloor heating mats in first and second floor en suites and bathroom.'
      ]
    },
    { title: 'Window blinds', description: 'Roller blinds installed as per viewing home.' },
    {
      title: 'Sound System',
      description: 'The following rooms have been hard wired for ceiling speakers which will be installed.   All speakers are wired back to the cupboard in the kitchen where the Sonos amps/controllers are located',
      list: [
        'Living room',
        'Kitchen/Dining',
        'Master bedroom and master en suite',
        'Bathroom',
        'All remaining bedrooms'
      ]
    }
  ]
}

const crossley = {
  style: 'Crossley',
  floorplans: [
    '/stripeside/crossley/ground-floor.png',
    '/stripeside/crossley/first-floor.png',
    '/stripeside/crossley/garages.png'
  ],
  specification: [
    {
      title: 'Kitchen',
      description: 'Nobila furniture, Neff appliances with quartz worktop as per viewing home – supplied and installed by Laings Inverurie.',
      list: [
        'Double oven', 'Induction hob', 'Extractor canopy', 'Integral fridge freezer', 'Dishwasher'
      ]
    },
    { title: 'Dining Room', description: 'Open plan dining room with log burning stove.' },
    { title: 'Utility', description: 'Nobila furniture with 40mm laminate worktop as per viewing home – supplied and installed by Laings Inverurie.' },
    { title: 'Carpets', description: 'Fitted in living room, bedrooms and dressing rooms. Colour samples are available to select from.' },
    { title: 'Laminate flooring', description: 'Plank laminate flooring in hall, kitchen and utility areas and also available in all shower room, en suite and bathroom areas. Samples available to select from.' },
    { title: 'Underfloor heating', description: 'The ground floor has underfloor heating throughout. On the upper floors, electric under floor heating is fitted in the bathroom and en suite shower rooms.' },
    { title: 'Tiles', description: 'Wall tiling as per viewing home – tiles supplied from Aberdeen Tile Distributors. Also available for all shower rooms, en suite and bathroom floors.' },
    {
      title: 'Bathroom and en suite sanitaryware',
      description: '(as per viewing home)',
      list: [
        'Wall hung Kohler or Roca toilet pans (concealed cistern already installed)',
        'The ground floor shower and main bathroom have single wash hand basins including vanity unit',
        'The master en suite is piped for a double wash hand basin with option of vanity unit below',
        'The second floor en suites have semi pedestal wash hand basins',
        'LED mirrors above all wash hand basins',
        'Fixed head and slide rails fitted in each shower with Zen wet room fixed glass panels',
        'Free standing bath in bathroom as per viewing home',
        'Towel rails in each en suite, bathroom and shower room',
        'Electric underfloor heating mats in first and second floor en suites and bathroom.'
      ]
    },
    { title: 'Window blinds', description: 'Roller blinds installed as per viewing home.' },
    {
      title: 'Sound System',
      description: 'The following rooms have been hard wired for ceiling speakers which will be installed.   All speakers are wired back to the cupboard in the kitchen where the Sonos amps/controllers are located',
      list: [
        'Living room',
        'Kitchen/Dining',
        'Master bedroom and master en suite',
        'Bathroom',
        'All remaining bedrooms'
      ]
    }
  ],
  features: [
    {
      title: 'Modern & Spacious Kitchen',
      description: 'Clean lines, exquisite materials and clearly structured architecture – these are the distinguishing marks of this designer Nobilia kitchen. Integrated appliances, with solid quartz worktops make for a modern and polished finish.',
      image: '/stripeside/Stripeside-47.png'
    },
    {
      title: 'Enviable Lounge',
      description: 'No matter what size of home, the lounge is the place where people can relax, chat, and enjoy each other\'s company. This spacious living room ensures that the family can enjoy time together in comfort with plenty of natural light.',
      image: '/stripeside/Stripeside-48.png'
    },
    {
      title: 'Four Generous Bedrooms',
      description: 'A master bedroom with spacious dressing room and ensuite, bedroom and ensuite, plus 2 further bedrooms.',
      image: '/stripeside/Stripeside-46.png'
    },
    {
      title: 'Four Luxurious Bathrooms',
      description: 'The Crossley style of home come with 4 fully fitted bathrooms.',
      image: '/stripeside/Stripeside-04.png'
    }
  ],
  images: [
    { src: '/stripeside/crossley-exterior.png', room: 'Coming Soon', featured: true },
    { src: '/stripeside/basic-lg.png', room: 'Coming Soon', featured: true }
  ]
}

const crynoch = {
  style: 'Crynoch',
  floorplans: [
    '/stripeside/crynoch/ground-floor.png',
    '/stripeside/crynoch/first-floor.png',
    '/stripeside/crynoch/second-floor.png',
    '/stripeside/crynoch/garage.png'
  ]

}
const plot1 = {
  ...allPlots,
  ...crynoch,
  status: 'Viewing Home',
  plot: '1',
  price: '£695,000',
  image: '/stripeside/Stripeside-27.png',
  brief: 'A striking 5 bedroom home with extremely spacious accommodation over three levels. Timeless architecture, modern kitchen, spacious living areas and a detached double garage.',
  images: [
    { src: '/stripeside/Stripeside-27.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-20.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-25.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-46.png', room: 'bedroom', featured: true },
    { src: '/stripeside/Stripeside-47.png', room: 'kitchen', featured: true },
    { src: '/stripeside/Stripeside-48.png', room: 'living', featured: true },
    { src: '/stripeside/Stripeside-03.png', room: 'view' },
    { src: '/stripeside/Stripeside-10.png', room: 'hall', featured: true },
    { src: '/stripeside/Stripeside-13.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-14.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-12.png', room: 'utility' },
    { src: '/stripeside/Stripeside-15.png', room: 'hall' },
    { src: '/stripeside/Stripeside-16.png', room: 'hall' },
    { src: '/stripeside/Stripeside-17.png', room: 'living' },
    { src: '/stripeside/Stripeside-18.png', room: 'living' },
    { src: '/stripeside/Stripeside-19.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-21.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-22.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-23.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-24.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-28.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-29.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-31.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-32.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-01.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-02.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-04.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-05.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-06.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-07.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-08.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-09.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-11.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-33.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-34.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-35.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-36.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-37.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-38.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-40.png', room: 'hall' },
    { src: '/stripeside/Stripeside-41.png', room: 'hall' },
    { src: '/stripeside/Stripeside-42.png', room: 'hall' },
    { src: '/stripeside/Stripeside-43.png', room: 'hall' },
    { src: '/stripeside/Stripeside-44.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-45.png', room: 'bedroom' }
  ]
}
const plot2 = {
  ...allPlots,
  ...crynoch,
  status: 'Available',
  plot: '2',
  price: '£695,000',
  brief: 'A striking 5 bedroom home with extremely spacious accommodation over three levels. Timeless architecture, modern kitchen, spacious living areas and a detached double garage.',
  floorplans: [
    '/stripeside/plot2/ground-floor.png',
    '/stripeside/plot2/first-floor.png',
    '/stripeside/plot2/second-floor.png',
    '/stripeside/plot2/garage.png'
  ],
  image: '/stripeside/plot-2-exterior.png',
  images: [
    { src: '/stripeside/plot-2-exterior.png', room: 'Exterior', featured: true },
    { src: '/stripeside/Stripeside-46.png', room: 'bedroom', featured: true },
    { src: '/stripeside/Stripeside-47.png', room: 'kitchen', featured: true },
    { src: '/stripeside/Stripeside-48.png', room: 'living', featured: true },
    { src: '/stripeside/Stripeside-03.png', room: 'view' },
    { src: '/stripeside/Stripeside-13.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-14.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-15.png', room: 'hall' },
    { src: '/stripeside/Stripeside-16.png', room: 'hall' },
    { src: '/stripeside/Stripeside-17.png', room: 'living' },
    { src: '/stripeside/Stripeside-18.png', room: 'living' }
  ]
}
const plot3 = {
  ...allPlots,
  ...crynoch,
  status: 'Sold',
  plot: '3',
  image: '/stripeside/Stripeside-42.png',
  brief: 'A striking 5 bedroom home with extremely spacious accommodation over three levels. Timeless architecture, modern kitchen, spacious living areas and a detached double garage.'
}
const plot3a = {
  ...allPlots,
  status: 'Future Release',
  plot: '3a'
}
const plot4 = {
  ...allPlots,
  status: 'Future Release',
  plot: '4'
}
const plot5 = {
  ...allPlots,
  ...crossley,
  status: 'Sold',
  plot: '5'
}
const plot6 = {
  ...allPlots,
  ...crossley,
  image: '/stripeside/crossley-exterior.png',
  status: 'Available',
  plot: '6',
  price: '£725,000'

}
const plot7 = {
  ...allPlots,
  ...crossley,
  status: 'Sold',
  plot: '7'
}
const plot8 = {
  ...allPlots,
  ...crossley,
  status: 'Sold',
  plot: '8'
}
const plot9 = {
  ...allPlots,
  status: 'Future Release',

  plot: '9'
}
const plot10 = {
  ...allPlots,
  status: 'Future Release',

  plot: '10'
}
const plot11 = {
  ...allPlots,
  status: 'Future Release',
  plot: '11'
}

export const stripeside = {
  development: 'Stripeside',
  city: 'Aberdeenshire',
  area: 'Netherley',
  type: 'New Build Homes',
  siteLayout: 'StripesideSiteLayout',
  logo: '/stripeside/StripesideLogoLight.png',
  backimage: '/stripeside/StripesideBackFar.png',
  brief: 'Stripeside’s 4 and 5-bedroom detached villas form part of a small exclusive development built by Forbes Homes, builders who know all about country living. Once completed, Stripeside will comprise three 5-bedroom properties and nine 4-bedroom homes',
  mainImages: [{ src: '/stripeside/Stripeside-27.png', room: 'exterior', featured: true }, { src: '/stripeside/Stripeside-25.png', room: 'exterior', featured: true }, { src: '/stripeside/Stripeside-20.png', room: 'exterior', featured: true }],
  images: [
    { src: '/stripeside/Stripeside-46.png', room: 'bedroom', featured: true },
    { src: '/stripeside/Stripeside-47.png', room: 'kitchen', featured: true },
    { src: '/stripeside/Stripeside-48.png', room: 'living', featured: true },
    { src: '/stripeside/Stripeside-03.png', room: 'view' },
    { src: '/stripeside/Stripeside-10.png', room: 'hall', featured: true },
    { src: '/stripeside/Stripeside-12.png', room: 'utility' },
    { src: '/stripeside/Stripeside-13.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-14.png', room: 'kitchen' },
    { src: '/stripeside/Stripeside-15.png', room: 'hall' },
    { src: '/stripeside/Stripeside-16.png', room: 'hall' },
    { src: '/stripeside/Stripeside-17.png', room: 'living' },
    { src: '/stripeside/Stripeside-18.png', room: 'living' },
    { src: '/stripeside/Stripeside-19.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-20.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-21.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-22.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-23.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-24.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-25.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-26.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-27.png', room: 'exterior', featured: true },
    { src: '/stripeside/Stripeside-28.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-29.png', room: 'exterior' },
    { src: '/stripeside/Stripeside-31.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-32.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-01.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-02.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-04.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-05.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-06.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-07.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-08.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-09.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-11.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-33.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-34.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-35.png', room: 'wardrobe' },
    { src: '/stripeside/Stripeside-36.png', room: 'bathroom' },
    { src: '/stripeside/Stripeside-37.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-38.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-41.png', room: 'hall' },
    { src: '/stripeside/Stripeside-42.png', room: 'hall' },
    { src: '/stripeside/Stripeside-43.png', room: 'hall' },
    { src: '/stripeside/Stripeside-44.png', room: 'bedroom' },
    { src: '/stripeside/Stripeside-45.png', room: 'bedroom' }
  ],

  houses: [
    plot1,
    plot2,
    plot3,
    plot3a,
    plot4,
    plot5,
    plot6,
    plot7,
    plot8,
    plot9,
    plot10,
    plot11
  ]

}
