import cardForm from "./card"
import cardAPIFuntions from "./cardFetching"
import newCardForm from "./newCardForm"



const pokemon = require("pokemontcgsdk")

// Get all cards
let cardEntry = document.querySelector(".output")
let pokeCard = document.querySelector("#cardName")
pokemon.card.find({name: pokeCard.value})
.on("data", function (card) {
  let cardContents = cardForm(card)
  cardEntry.innerHTML += cardContents
  console.log(card.name)
});


//  function newCard (parsedCards) {
//   parsedCards.forEach(card => {
//     let cardContents = cardForm(card)
//     cardEntry.innerHTML += cardContents
//   })
// }

let cardsToDom = (pokeCard) => {
  cardEntry.innerHTML=""
  cardAPIFuntions.getCard(pokeCard)
  .then(card => pokemon.card.find({name: pokeCard.value})
  .then(() => {
    cardEntry.innerHTML += newCardForm(card)
  }))}
export default cardsToDom