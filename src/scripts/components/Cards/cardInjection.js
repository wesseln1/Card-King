import cardForms from "./newCardForm"
import cardAPIFetching from "./cardFetching"
import cardFormManager from "./formInjection"


// import postNewCard from "./selectCard";
// import searchCardCollection from "./cardInput"

// let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardName")
// function clearDom(){
// domEntry.innerHTML = ""
// }

function domCards(parsedCards) {
  // $(".domEntry").empty()
  for (let card in parsedCards) {
    let taskContents = parsedCards[card]
    taskContents.forEach(card => {
      taskContents = cardForms.cardForm(card)
      $("#cardEntry").append(taskContents)
      // let cards = document.querySelector(`#add_${card.id}`)
      console.log("cards", card)
      cardFormManager.addCard(card)
    })
  }
}

let cardsToDom = (card) => {
  $(".p-2").detach()
  console.log("at fetch")
  cardAPIFetching.getAPICards(card)
  .then(parsedCards => parsedCards)
    .then(parsedCards =>
      domCards(parsedCards)
    )
}
export default cardsToDom