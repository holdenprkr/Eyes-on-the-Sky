// const eventHub = document.querySelector("#bodyContent")

// export const DateSelect = () => {

//   eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "masterPhotosDateSearch") {
//       const message = new CustomEvent("dateSearchClicked", {
//         detail: {
//           button: clickEvent.target.value
//         }
//       })
//       document.querySelector("#date_choice")
      
//     }
//   })
//   eventHub.addEventListener("change", changeEvent => {
//     if (changeEvent.target.id === "date_choice") {
//       console.log(changeEvent.target.value);
//       const message = new CustomEvent("dateSelected", {
//         detail: {
//           date: changeEvent.target.value
//         }
//       })
//       eventHub.dispatchEvent(message)
//     }
//   })

// }