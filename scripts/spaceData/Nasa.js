export const nasaComponent = (object) => {
  return `
  <img class="masterPhoto" src="${object.img_src}"></img>
  <div>Rover: ${object.rover.name}</div>
  <div>Date: ${new Date(object.earth_date).toLocaleDateString('en-US')}</div>
  <div>Camera: ${object.camera.name}</div>
  `
}

{/* <div class="masterPhotoCard"></div> */}