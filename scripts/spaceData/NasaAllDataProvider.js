let nasaAllPhotoData = []

export const useNasaData = () => {
 return nasaAllPhotoData
}
export const getNasaCuriosityData = () => {
  console.log("*****I AM THE NASA DATA COMPONENT*****")
  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
    .then(response => response.json())
    .then(
      NasaCuriosity => {
        NasaCuriosity.photos.forEach(element => {
          nasaAllPhotoData.push(element)
        })
      })
    }

export const getNasaOpportunityData = () => {
  console.log("*****I AM THE NASA DATA COMPONENT*****")
  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
    .then(response => response.json())
    .then(
      NasaOpportunity => {
        NasaOpportunity.photos.forEach(element => {
          nasaAllPhotoData.push(element)
        })
      })
    }

export const getNasaSpiritData = () => {
  console.log("*****I AM THE NASA DATA COMPONENT*****")
  return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
    .then(response => response.json())
    .then(
      NasaSpirit => {
        NasaSpirit.photos.forEach(element => {
          nasaAllPhotoData.push(element)
          // console.table(nasaAllPhotoData)
        });
      })
    }
    