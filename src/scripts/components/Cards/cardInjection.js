import cardForms from "./newCardForm"
import cardAPIFetching from "./cardFetching"
import cardFormManager from "./formInjection"
import deleteCard from "./components/Cards/cardListener"
// import postNewCard from "./selectCard";
// import searchCardCollection from "./cardInput"

let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardName")
function clearDom(){
domEntry.innerHTML = ""
}

function domCards(parsedCards) {
  clearDom()
for(let card in parsedCards){
  // console.log(parsedCards, "parsedCards")
  let taskContents = parsedCards[card]
  // console.log(taskContents, "task")
  taskContents.forEach(card => {
    taskContents = cardForms.cardForm(card)
    domEntry.innerHTML += taskContents
    // console.log(card, "cards")
    cardFormManager.addCard(card)
    deleteCard()
    console.log(card, "card")
  })
}
}

let cardsToDom = (card) => {
clearDom()
cardAPIFetching.getAPICards(card.value)
.then(parsedCards => parsedCards)
.then(parsedCards =>
  domCards(parsedCards)
  // console.log("my card", parsedCards)
  )
}
export default cardsToDom