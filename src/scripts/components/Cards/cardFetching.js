// import newCardForm from "./newCardForm"
// import newPostCard from "./cardPost"
// const pokemon = require("pokemontcgsdk")
// let cardDomEntry = document.querySelector(".output")
let port = 8086
const cardAPIFetching = {

  getMyCards() {
    return fetch(`http://localhost:${port}/cards`)
    .then(cards => cards.json())
    .then(parsedCards => parsedCards)
  },
  getCard(card){
    console.log("fired")
    return fetch(`http://localhost:${port}/cards?q=${card}`)
    .then(cards => cards.json())
    .then(parsedCard => parsedCard)
  },
  getAPICards(card) {
    return fetch(`https://api.pokemontcg.io/v1/cards?name=${card}`)
      .then(cards => cards.json())
      .then(parsedCards => parsedCards)
  },
  postCard(card){
    return fetch(`http://localhost:${port}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(post => post.json())
  },
  deleteCard(id){
    return fetch(`http://localhost:${port}/cards/${id}`, {
      method: "DELETE"
    }).then(r => r.json())
  }
}
export default cardAPIFetching