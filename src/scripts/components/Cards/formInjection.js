import cardsToDom from "./cardInjection"
import cardSearchForm from "./cardInput"
import findMyCard from "./collectionSearch"
import postNewCard from "./selectCard"
let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardSearchButton")
let cardFormManager = {
cardListening () {
let cards = document.querySelector(".cardSearchButton")
let card = document.querySelector(".cardName")
console.log("at cardListening")
  cards.addEventListener("click", () => {
    findMyCard(card)
  })},
  addCard(card){
    console.log("running", card)
    // let card = document.querySelector(".cardName")
    let cards = document.querySelector(".addToCollection")
    cards.addEventListener("click", () => {
      console.log("fired", card)
      postNewCard(card)
      // .then("posted", card)
    })
  },
  searchAll(){
    console.log("here")
    let cards= document.querySelector(".allCardSearch")
    let card = document.querySelector(".cardName")
    cards.addEventListener("click", () => {
      cardsToDom(card)
  })
},
searchForm(){
  let form = cardSearchForm()
  domEntry.innerHTML = form
}
}
export default cardFormManager