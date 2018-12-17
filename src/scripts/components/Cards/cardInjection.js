import cardForms from "./newCardForm"
import cardAPIFetching from "./cardFetching"
import cardFormManager from "./formInjection"
import deleteCard from "./cardListener"

// import postNewCard from "./selectCard";
// import searchCardCollection from "./cardInput"

// let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardName")
// function clearDom(){
// domEntry.innerHTML = ""
// }

function domCards(parsedCards) {
  // $(".domEntry").detch()
for(let card in parsedCards){
  let taskContents = parsedCards[card]
  taskContents.forEach(card => {
    taskContents = cardForms.cardForm(card)
    $("domEntry").append(taskContents)
    $(".addToCollection").click(
      cardFormManager.addCard(card),
      deleteCard()
      )
  })
}
}

let cardsToDom = (card) => {
  // $(".domEntry").detach()
  console.log("at fetch")
  cardAPIFetching.getAPICards(card.value)
  .then(parsedCards => parsedCards)
  .then(parsedCards =>
    domCards(parsedCards)
    )
}
export default cardsToDom