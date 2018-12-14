// import cardAPIFetching from "../Cards/cardFetching"
import deckAPIFetching from "./deckFetching"
const decks = {

  newDeck() {
    // console.log("runnin")
    let myDeck = document.querySelector(".deckName")
    // console.log(myDeck, "my deck")
    let deck = {
      user_id: sessionStorage.user_id,
      name: myDeck.value
    }
    // console.log(deck, "deck")
    deckAPIFetching.postNewDeck(deck)
    .then(()=> {
      // console.log("it posted")
    })
      return (deck)
  },

  newCardToDeck(card) {
    console.log(card, "thsi card")
    deckAPIFetching.getDeck(card)
    .then(deck => deck)
    .then(console.log(card, "now card"))
    // cardAPIFetching.getCard(card)
    card.forEach(() => {
      let obj = {
        user_id: sessionStorage.user_id,
        card_id: card.id,
        deck_id: deck.id
      }
      deckAPIFetching.postCardToDeck(obj)
        .then(console.log(obj))
    }
    )
  }
}
export default decks