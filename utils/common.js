export function randomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function availableHouses (array) {
  return array.filter(x => x.status === 'Available' || x.status === 'Future Release' || x.status === 'Viewing Home').sort((a, b) => {
    if (a.status === 'Available' && b.status === 'Future Release') {
      return -1
    }
    if (a.status === 'Future Release' && b.status === 'Available') {
      return 1
    }
    return 0
  })
}

export function amountAvailableNow (array) {
  return array.filter(x => x.status === 'Available' || x.status === 'Viewing Home').length
}

export function propertyLink (property) {
  return String(`/developments/${property.city}/${property.area}/${property.development}/plot${property.plot}`).toLowerCase()
}
