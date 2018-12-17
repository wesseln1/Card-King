import cardAPIFunctions from "./cardFetching"
import cardForms from "./newCardForm"

// let domEntry = document.querySelector(".domEntry")
function getAllCards(){
  cardAPIFunctions.getCards()
  .then(parsedCards => {
    parsedCards.forEach((card) => {
      let taskContents = cardForms.myCardForm(card)
      $(".domEntry").append(taskContents)
    })
  })
}
export default getAllCards