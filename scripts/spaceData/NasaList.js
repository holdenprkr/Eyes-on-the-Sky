import { nasaComponent } from "./Nasa.js";
import { useNasaData } from "./NasaAllDataProvider.js";

const eventHub = document.querySelector("#bodyContent")
const photoMaster = document.querySelector("#masterPhotos")

export const NasaListComponent = () => {
  const allPhotos = useNasaData()

  eventHub.addEventListener("probeSelected", event => {
    const probePick = event.detail.probe
    const matchingProbes = allPhotos.filter(
      (probe) => {
      if (probe.rover.name === probePick) {
        return allPhotos
      }
    })
    render(matchingProbes)
  })

  const render = (photosOfNasa) => {
    photoMaster.innerHTML =`
    ${
      photosOfNasa.map(
        photo => nasaComponent(photo)
      ).join("")
    }`
  }
  render(allPhotos)
} 