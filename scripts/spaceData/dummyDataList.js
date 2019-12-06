import { useDummyData } from "./dummyData.js";
import photoHTML from "./dummyDataPhotos.js";

const PhotoListComponent = () => {

  const photoContent = document.querySelector("#masterPhotos")
  const photos = useDummyData()

  photoContent.innerHTML += `
    ${
      photos.map(
        (photo) => {
          return photoHTML(photo)
        }).join(" ")
    }
  `
}


export default PhotoListComponent