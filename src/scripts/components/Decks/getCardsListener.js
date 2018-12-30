import getDeckCards from "./getCards"

function deckCardsToDom(){
  $("#deckSearch").click(()=>{
    let deck = document.querySelector("#deckNameSearch")
    getDeckCards.getDeckCard(deck.value)
  })
}
export default deckCardsToDom