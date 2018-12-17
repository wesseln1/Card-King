import deckForm from "./deckForm"
import decks from "./newDeck"
// let domEntry = document.querySelector(".domEntry")
function deckEventListener(){
  let myDeck = document.querySelector(".newDeck")
  myDeck.addEventListener("click", ()=>{
    decks.newDeck()
  })
}
function deckSearchForm(){
  let form = deckForm()
  $(".domEntry").append(form)
  deckEventListener()
}
export default deckSearchForm