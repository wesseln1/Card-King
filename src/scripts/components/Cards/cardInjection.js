import newCardForm from "./newCardForm"
import cardAPIFunctions from "./cardFetching"

// let domEntry = document.querySelector(".domEntry")
let cardDomEntry = document.querySelector(".output")
function domCards(parsedCards) {
  parsedCards.forEach(card => {
    let taskContents = newCardForm(card)
    cardDomEntry.innerHTML += taskContents
  })
}

let cardsToDom = () => {
  cardDomEntry.innerHTML = ""
  cardAPIFunctions.getCards()
    .then(parsedCards => domCards(parsedCards))
    .then(() => {
      cardDomEntry.innerHTML += newCardForm()
      console.log("this card")
    })
}
export default cardsToDom