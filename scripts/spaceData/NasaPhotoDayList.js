import { useNasaPhotoDayData } from "./NasaPhotoDayProvider.js"


const PhotoDayListComponent = () => {
  console.log("*****I AM THE PHOTO OF THE DAY LIST COMPONENT*****")
  const photoDay = document.querySelector(".photoOfTheDayDiv")
  console.log("line before the use invocation")
  const PhotoOfTheDayObject = useNasaPhotoDayData()
  console.log(PhotoOfTheDayObject)

  const render = photoOfTheDay => {
  photoDay.innerHTML = `
    ${`
      <img src="${photoOfTheDay.url}"></img>
      <div>Copyright: ${photoOfTheDay.copyright}</div>
      <p>${photoOfTheDay.explanation}</p>`
    }
  `
  }
  render(PhotoOfTheDayObject)
}

export default PhotoDayListComponent