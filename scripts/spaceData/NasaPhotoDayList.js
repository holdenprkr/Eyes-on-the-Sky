import { useNasaPhotoDayData } from "./NasaPhotoDayProvider.js"


const PhotoDayListComponent = () => {
  console.log("*****I AM THE PHOTO OF THE DAY LIST COMPONENT*****")
  const photoDay = document.querySelector(".photoOfTheDayDiv")
  console.log("line before the use invocation")
  const PhotoOfTheDayObject = useNasaPhotoDayData()
  console.log(PhotoOfTheDayObject, "this is the photo of the day after useNasa invocation")

  const render = photoOfTheDay => {
  photoDay.innerHTML = `
    ${`
      <img src="${photoOfTheDay.url}></img>
      <div>Copyright: ${photoOfTheDay.copyright}</div>`
    }
  `
  }
  render(PhotoOfTheDayObject)
}

export default PhotoDayListComponent