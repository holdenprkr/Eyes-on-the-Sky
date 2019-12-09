export const nasaComponent = (object) => {
  return `
  <div class="masterPhoto">
  <img class="probeImage" src="${object.img_src}"></img>
  <div>Rover: ${object.rover.name}</div>
  <div>Date: ${new Date(object.earth_date).toLocaleDateString('en-US')}</div>
  <div>Camera: ${object.camera.name}</div>
  </div>
  `
}