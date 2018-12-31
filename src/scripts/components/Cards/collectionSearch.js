// import searchCardCollection from "./cardInput"
import cardAPIFetching from "./cardFetching"
import cardForms from "./newCardForm"
import deleteCard from "./cardListener"
import cardToDeckListening from "../Decks/cardToDeckListener"


// let domEntry = document.querySelector(".domEntry")
function searchForCard(parsedCard){
  console.log("parsedCard", parsedCard)
    parsedCard.forEach(card => {
      let taskContents = cardForms.myCardForm(card)
      $(".domEntry").append(taskContents)
      deleteCard()
      console.log("card", card)
    })
    cardToDeckListening(parsedCard)
  }

let findMyCard = (card) => {
  console.log(card, "heres my card")
 cardAPIFetching.getCard(card)
  .then(parsedCard => searchForCard(parsedCard))
  .then((parsedCard) =>
      console.log("My card", parsedCard)
    )
}
  export default findMyCard