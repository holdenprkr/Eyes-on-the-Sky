import { useNasaPhotoDayData } from "./NasaPhotoDayProvider.js"

const eventHub = document.querySelector("#bodyContent")

const PhotoDayListComponent = () => {
  const photoDay = document.querySelector(".photoOfTheDayDiv")
  const PhotoOfTheDayObject = useNasaPhotoDayData()

  const render = photoOfTheDay => {
    if (photoOfTheDay.media_type === "image") {
      photoDay.innerHTML = `
    ${`
      <img class="PhotoOfDay" src="${photoOfTheDay.url}"></img>
      <p class="explanation">${photoOfTheDay.explanation}<br>Copyright: ${photoOfTheDay.copyright}</p>
      `
        }
  `
    } else if (photoOfTheDay.media_type === "video") {
      photoDay.innerHTML = `
    ${`
      <iframe width="420" height="315" src=${photoOfTheDay.url}>
      </iframe>
      <p>${photoOfTheDay.explanation}</p>`
        }
  `
    }
  }
  render(PhotoOfTheDayObject)
}

export default PhotoDayListComponent
