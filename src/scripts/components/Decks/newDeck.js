// import cardAPIFetching from "../Cards/cardFetching"
import deckAPIFetching from "./deckFetching"
const decks = {

  newDeck() {
    // console.log("runnin")
    let myDeck = document.querySelector("#deckName")
    // console.log(myDeck, "my deck")
    console.log(myDeck, "myDeck")
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

  newCardToDeck(card, deck) {
    deckAPIFetching.getDeckByName(deck)
    .then(deck => deck)
    .then(function newDeck(deck){
      console.log("this card", deck, card, )
      let obj = {
        user_id: sessionStorage.user_id,
        deck_id: deck[0].id,
        card_id: card.id,
      }
      console.log("obj", obj)
      deckAPIFetching.postCardToDeck(obj)
    })
    }
}
export default decks