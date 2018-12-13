// import newCardForm from "./newCardForm"
// import newPostCard from "./cardPost"
// const pokemon = require("pokemontcgsdk")
// let cardDomEntry = document.querySelector(".output")

const cardAPIFetching = {

  getCards() {
    return fetch("http://localhost:8088/cards")
    .then(cards => cards.json())
    .then(parsedCards => parsedCards)
  },

  getCard(card){

    return fetch(`http://localhost:8088/cards?q=${card}`)
    .then(cards => cards.json())
    .then(parsedCard => parsedCard)
  },

  getAPICards(card) {
    return fetch(`https://api.pokemontcg.io/v1/cards?name=${card}`)
      .then(cards => cards.json())
      .then(parsedCards => parsedCards)
    // console.log(newCard, "after")
  },
  postCard(card){
    console.log(card, "card 44")
    return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(post => post.json())
  },
  deleteCard(id){
    console.log("deleted")
    return fetch(`http://localhost:8088/cards/${id}`, {
      method: "DELETE"
    }).then(r => r.json())
  }
}
export default cardAPIFetching