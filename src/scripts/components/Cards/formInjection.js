import cardsToDom from "./cardInjection"
import cardSearchForm from "./cardInput"
import findMyCard from "./collectionSearch"
import postNewCard from "./selectCard"
// let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardSearchButton")
let cardFormManager = {
cardListening () {
let cards = document.querySelector(".cardSearchButton")
let card = document.querySelector(".cardName").value
console.log("at cardListening")
  cards.addEventListener("click", () => {
    findMyCard(card)
  })},
  addCard(){
    let card = document.querySelector(".cardName").value
    console.log("running", card)
      console.log("fired", card)
      postNewCard(card)
  },
  searchAll(){
    console.log("here")
    let cards= document.querySelector(".allCardSearch")
    let card = document.querySelector(".cardName").value
    cards.addEventListener("click", () => {
      cardsToDom(card)
  })
},
searchForm(){
//  $(".domEntry").empty()
  let form = cardSearchForm()
$(".domEntry").append(form)
}
}
export default cardFormManager