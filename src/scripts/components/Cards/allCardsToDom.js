import cardAPIFunctions from "./cardFetching"
import cardForms from "./newCardForm"
import deleteCard from "./cardListener"
import addCardDeck from "../Decks/cardsToDeckListener"


// let domEntry = document.querySelector(".domEntry")
function getAllCards() {
  $(".p-2").detach(),
  // $("#cardEntry").detach()
  cardAPIFunctions.getCards()
    .then(parsedCards => {
      parsedCards.forEach((card) => {
        let taskContents = cardForms.myCardForm(card)
        $("#cardEntry").append(taskContents)
        localStorage.setItem("card_id", card.id)
        deleteCard(card)
        addCardDeck(card)
      })

    })
    }
export default getAllCards