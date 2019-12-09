import { useNasaPhotoDayData } from "./NasaPhotoDayProvider.js"


const PhotoDayListComponent = () => {
  const photoDay = document.querySelector(".photoOfTheDayDiv")
  const PhotoOfTheDayObject = useNasaPhotoDayData()

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