import deckForm from "./deckForm"
import decks from "./newDeck"
// let domEntry = document.querySelector(".domEntry")
function deckEventListener(){
  // let myDeck = document.querySelector(".newDeck")
  $("#newDeck").click( ()=>{
    // $("#cardEntry").detach()
    console.log("got here too")
    decks.newDeck()
  })
}
function deckSearchForm(){
  let form = deckForm()
  $(".p-2").detach()
  $(".domEntry").append(form)
  console.log("here")
  deckEventListener()
}
export default deckSearchForm