let nasaAllPhotoData = []

export const useNasaData = () => {
  console.log("use nasa called", nasaAllPhotoData)
 return nasaAllPhotoData.slice()
}

const getNasaCuriosityData = (day) => {
  console.log('this is curiosity arg', day)
  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${day}&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN`)
    .then(response => response.json())
    .then(
      NasaCuriosity => {
        NasaCuriosity.photos.forEach(element => {
          nasaAllPhotoData.push(element)
        })
      })
    }

const getNasaOpportunityData = (day) => {
  console.log('this is opportunity arg', day)

  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${day}&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN`)
    .then(response => response.json())
    .then(
      NasaOpportunity => {
        NasaOpportunity.photos.forEach(element => {
          nasaAllPhotoData.push(element)
        })
      })
    }

const getNasaSpiritData = (day) => {
  console.log('this is spirit arg', day)

  return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${day}&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN`)
    .then(response => response.json())
    .then(
      NasaSpirit => {
        NasaSpirit.photos.forEach(element => {
          nasaAllPhotoData.push(element)
          // console.table(nasaAllPhotoData)
        });
      })
    }

export const GetAllData = (date) => {
  nasaAllPhotoData = []
  return getNasaCuriosityData(date)
          .then(getNasaOpportunityData(date))
          .then(getNasaSpiritData(date))
}
    