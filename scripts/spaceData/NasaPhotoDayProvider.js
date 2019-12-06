let nasaPhotoOfTheDayData = {}

export const useNasaPhotoDayData = () => {
  console.log("in the use data fucntion")
 return nasaPhotoOfTheDayData
}
export const getNasaPhotoDayData = () => {
  console.log("*****I AM THE NASA DATA COMPONENT*****")
  return fetch("https://api.nasa.gov/planetary/apod?api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
    .then(response => response.json())
    .then(
      NasaPhotoDayData => {
        nasaPhotoOfTheDayData = NasaPhotoDayData
        console.log(nasaPhotoOfTheDayData)
      }
      )
    }
    
