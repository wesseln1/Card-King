import addToDeck from "./addToDeckForm"
import decks from "./newDeck"
import getAllCards from "../Cards/allCardsToDom";
// let domEntry = document.querySelector(".domEntry")
let addToDeckForm =(card)=>{
  console.log("here at form")
    let form = addToDeck()
    // $("#deckFormEntry").detach()
    $(".p-2").detach()
    $("#deckFormEntry").prepend(form)
    cardToDeckEventListener(card)
  }
 function cardToDeckEventListener(card) {
    // let addCard = document.querySelector(".sendToDeck")
    $("#cardToDeck").on("click", () => {
      let deck = document.querySelector(".chooseDeck").value
      decks.newCardToDeck(card, deck)
      return getAllCards()
    })
  }
export default addToDeckForm