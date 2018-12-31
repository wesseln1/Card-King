import addToDeckForm from "./cardToDeckForm"

function addCardDeck(card){
  // console.log(card,"card")
  // let cardId = document.getElementById(`deck_${card.id}`)
  // console.log("cardid", cardId)
  $(`#deck_${card.id}`).click(()=> {
    addToDeckForm(card)
  })
  }
  export default addCardDeck