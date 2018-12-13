// import searchCardCollection from "./cardInput"
import cardAPIFetching from "./cardFetching"
import cardForms from "./newCardForm"
import deleteCard from "./cardListener"

let domEntry = document.querySelector(".domEntry")
function searchForCard(parsedCard){
    parsedCard.forEach(card => {
      let taskContents = cardForms.myCardForm(card)
      domEntry.innerHTML += taskContents
      deleteCard()
    })
  }
function clearDom(){
    domEntry.innerHTML = ""
  }

let findMyCard = (card) => {
  clearDom()
 cardAPIFetching.getCard(card.value)
  .then(parsedCard => searchForCard(parsedCard))
  .then((parsedCard) =>
      console.log("My card", parsedCard)
    )
}
  export default findMyCard