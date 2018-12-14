import addToDeck from "./addToDeckForm"
import decks from "./newDeck"
let domEntry = document.querySelector(".domEntry")
const deckForms = {

  deckSearchForm() {
    let form = addToDeck()
    domEntry.innerHTML = form
  },
  cardToDeckEventListener() {
    let addCard = document.querySelector(".sendToDeck")
    addCard.addEventListener("click", () => {
      let card = document.querySelector(".chooseDeck").value
      decks.newCardToDeck(card)
    })
  }
}
export default deckForms