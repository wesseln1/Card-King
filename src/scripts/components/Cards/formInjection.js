import cardsToDom from "./cardInjection"
import cardSearchForm from "./cardInput"
import findMyCard from "./collectionSearch"
import postMyNewCard from "./cardPost"
let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardSearchButton")
let cardFormManager = {
cardListening () {
let cards = document.querySelector(".cardSearchButton")
let card = document.querySelector(".cardName")
  cards.addEventListener("click", () => {
    // console.log("clicked")
    // console.log(card, "carddddddd")
    findMyCard(card)
  })},
  addCard(card){
    console.log("running", card)
    // let card = document.querySelector(".cardName")
    let cards = document.querySelector(".addToCollection")
    cards.addEventListener("click", () => {
      console.log("fired", card)
      postMyNewCard(card)
      // .then("posted", card)
    })
  },
  searchAll(){
    let cards= document.querySelector(".allCardSearch")
    let card = document.querySelector(".cardName")
    cards.addEventListener("click", () => {
      console.log("here")
      cardsToDom(card)
  })
},
searchForm(){
  let form = cardSearchForm()
  domEntry.innerHTML = form
}
}
export default cardFormManager