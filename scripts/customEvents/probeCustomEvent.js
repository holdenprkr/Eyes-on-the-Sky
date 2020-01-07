// import { useProbes } from "./probeProvider.js"

// const eventHub = document.querySelector("#bodyContent")
// const contentTarget = document.querySelector("#probe_content_target")

// const ProbeSelect = () => {
//   const allProbes = useProbes()

//   eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.id === "probe_choice") {
//       const message = new CustomEvent("probeSelected", {
//         detail: {
//           probe: changeEvent.target.value
//         }
//       })
//       eventHub.dispatchEvent(message)
//     }
//   })

//   const render = probeCollection => {
//     contentTarget.innerHTML = `
//         <select class="dropdown" id="probe_choice">
//         <option selected disabled hidden value="0">Select a probe...</option>
//                 ${
//       probeCollection.sort().map(
//         probe => `<option class="probe_select">${probe}</option>`
//       )}
//         </select>`
//   }
//   render(allProbes)
// }

// export default ProbeSelect