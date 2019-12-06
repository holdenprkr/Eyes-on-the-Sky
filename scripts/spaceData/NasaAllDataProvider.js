let nasaPhotoData = []

export const useNasaPhotoDayData = () => nasaData

// export const getNasaPhotoDayData = () => {
//   console.log("*****I AM THE NASA DATA COMPONENT*****")
//   return fetch("https://api.nasa.gov/planetary/apod?api_key=RD38aokcbHHcsbEjdZOo0CFfmShPd1DVCcETVXSN")
//     .then(response => response.json())
//     .then(
//       parsedNasaData => {
//         console.table(parsedNasaData)
//         nasaPhotoData = parsedNasaData.photos.slice()
//         console.log("*****I FOR SURE HAVE THAT NASA DATA*****")
//       }
//     )
// }