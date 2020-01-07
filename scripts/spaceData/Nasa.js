export const nasaComponent = (object) => {
  return `
  <div class="masterPhoto">
  <img class="probeImage" src="${object.img_src}"></img>
  <div>Rover: ${object.rover.name}</div>
  <div>Date: ${object.earth_date}</div>
  <div>Camera: ${object.camera.name}</div>
  </div>
  `
}


// ${new Date(object.earth_date).toLocaleDateString('en-US')}