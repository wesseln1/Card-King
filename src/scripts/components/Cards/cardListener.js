import deleteCards from "./deleteCard"
// import cardsToDom from "./cardInjection";

 function deleteCard(card){
   console.log("delete")
    $(`#${card.id}`).click((e)=>{
      if(e.target && e.target.id === `${e.target.id}`){
      let cardIdNumber = e.target.id
      deleteCards(cardIdNumber)
    }})
  }
// }
export default deleteCard