import deckAPIFetching from "./deckFetching"
import deckCardForms from "./cardDeckForm"
import deleteCards from "./deleteCardFromDeck"

let getDeckCards = {
  getDeckCard(deck) {
    deckAPIFetching.getDeckByName(deck)
    .then(parsedDeck =>  parsedDeck)
    .then(deck => {
      console.log("deckk", deck)
      getMyDeck(deck)
    })}}
    export default getDeckCards

function getMyDeck(deck){
  deckAPIFetching.getDeck(deck[0].id)
  .then(parsedDeck => parsedDeck)
  .then( parsedDeck => {
    console.log("parsed", parsedDeck)
    // for (let deck in parsedDeck) {
      // let taskContents = parsedDeck[deck]
      parsedDeck.forEach(deck=> {
        getCards(deck)
      })}
  )}

function getCards(deck) {
  deckAPIFetching.getCardFromDeck(deck.card_id)
  .then(parsedCard => parsedCard)
  .then(card => {
    card.forEach(card => {
      console.log("cardss", card)
      let taskContents = deckCardForms.myCardForm(card, deck)
      $("#cardEntry").append(taskContents)
      // let cards = document.querySelector(`#add_${card.id}`)
      console.log("cards", card)
      $(`#${deck.id}`).click(function (){
        deleteCards(card, deck)
      })

      // cardFormManager.addCard(card)
    }
  )})}

// function domCards(parsedCards) {
//   // $(".domEntry").empty()
//   for (let card in parsedCards) {
//     let taskContents = parsedCards[card]
//     taskContents.forEach(card => {
//       taskContents = cardForms.cardForm(card)
//       $("#cardEntry").append(taskContents)
//       // let cards = document.querySelector(`#add_${card.id}`)
//       console.log("cards", card)
//       cardFormManager.addCard(card)
//     })
//   }
// }