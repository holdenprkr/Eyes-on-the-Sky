import { nasaComponent } from "./Nasa.js";
import { useNasaData, GetAllData } from "./NasaAllDataProvider.js";

const eventHub = document.querySelector("#bodyContent")
const photoMaster = document.querySelector("#masterPhotos")

export const NasaListComponent = () => {

eventHub.addEventListener("click", e => {
  e.preventDefault()
  let datePicked = document.getElementById("date_choice").value
  if (e.target.id === "masterPhotosDateSearch") {
      console.log(datePicked)
      GetAllData(datePicked)
      .then(() => render(useNasaData()))
    }})



  const render = (photosOfNasa) => {
    photoMaster.innerHTML =`
    ${
      photosOfNasa.map(
        photo => nasaComponent(photo)
      ).join("")
    }`
  }
} 