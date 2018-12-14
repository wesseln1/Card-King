import deleteCards from "./deleteCard"

 function deleteCard(){
   console.log("delete")
    document.addEventListener("click", function (e){
      if(e.target && e.target.id === "deleteButton"){
      let cardIdNumber = e.target.className
      deleteCards(cardIdNumber)
    }})
  }
// }
export default deleteCard