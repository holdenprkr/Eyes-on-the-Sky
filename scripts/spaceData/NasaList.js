import { nasaComponent } from "./Nasa.js";
import { useNasaData } from "./NasaAllDataProvider.js";

export const NasaListComponent = () => {
  const photoMaster = document.querySelector("#masterPhotos")
  const allPhotos = useNasaData()

  const render = () => {
    photoMaster.innerHTML =`
    ${
      allPhotos.map(
        photo => nasaComponent(photo)
      ).join("")
    }`
  }
  render()
} 