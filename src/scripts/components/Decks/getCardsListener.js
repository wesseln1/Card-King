import getDeckCards from "./getCards"

function deckCardsToDom(){
  $("#deckSearch").click(()=>{
    $(".p-2").detach()
    let deck = document.querySelector("#deckNameSearch")
    getDeckCards.getDeckCard(deck.value)
  })
}
export default deckCardsToDom