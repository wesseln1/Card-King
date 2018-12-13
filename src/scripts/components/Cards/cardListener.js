import deleteCards from "./deleteCard"
// import addToFavorites from "./patchCard"

// const cardTasks = {

//   // addToFavorites(){
//   //   console.log("added to favorites")
//   //   document.addEventListener("click", (e) => {
//   //     if(e.target && e.target.id === "addToFavorites"){
//   //       let Id = e.target.className
//   //       let userId = sessionStorage.user_id
//   //       console.log(userId, "user")
//   //       let obj = {
//   //         favorite: true,
//   //         user_id: userId
//   //       }
//   //       console.log(obj, "favorites")
//   //       addToFavorites(obj, Id)
//   //     }
//   //   })
  // },

 function deleteCard(){
    document.addEventListener("click", function (e){
      console.log(e, "e")
      if(e.target && e.target.id === "deleteButton"){
      let cardIdNumber = e.target.className
      deleteCards(cardIdNumber)
    }})
  }
// }
export default deleteCard