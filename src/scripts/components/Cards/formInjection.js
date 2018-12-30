import cardsToDom from "./cardInjection"
import cardSearchForm from "./cardInput"
import findMyCard from "./collectionSearch"
import postNewCard from "./selectCard"
import getAllCards from "./allCardsToDom";
// let domEntry = document.querySelector(".domEntry")
// let card = document.querySelector(".cardSearchButton")
let cardFormManager = {
  cardListening() {
    // let cards = document.querySelector(".cardSearchButton")
    let card = document.querySelector(".cardName")
    console.log("at cardListening")
    $("#cardSearchButton").click( ()=>{
      console.log(card.value, "card value at cardListening")
      findMyCard(card.value)
    })
  },
  addCard(card) {
    $(`#add_${card.id}`).click(function () {
        console.log("running", card)
        postNewCard(card)
         return getAllCards()
    })
  },
  searchAll() {
    console.log("here")
    // let cards = document.querySelector(".allCardSearch")
    let card = document.querySelector(".cardName")
    $("#allCardSearch").click( () => {
      // console.log(card.value, "card value")
      cardsToDom(card.value)
    })
  },
  searchForm() {
    //  $(".domEntry").empty()
    let form = cardSearchForm()
    $("#searchEntry").append(form)
  }
}
export default cardFormManager