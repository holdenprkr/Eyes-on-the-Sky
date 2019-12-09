let nasaPhotoOfTheDayData = {}

export const useNasaPhotoDayData = () => {
 return nasaPhotoOfTheDayData
}
export const getNasaPhotoDayData = () => {
  return fetch("https://api.nasa.gov/planetary/apod?api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
    .then(response => response.json())
    .then(
      NasaPhotoDayData => {
        nasaPhotoOfTheDayData = NasaPhotoDayData
        // console.log(nasaPhotoOfTheDayData)
      }
      )
    }
    
