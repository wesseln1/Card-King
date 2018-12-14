import cardAPIFunctions from "./cardFetching"
import cardForms from "./newCardForm"

function getAllCards(){
  cardAPIFunctions.getCards()
  .then(parsedCards => {
    parsedCards.forEach((card) => {
      let taskContents = cardForms.myCardForm(card)
      domEntry.innerHTML += taskContents
    })
  })
}
export default getAllCards