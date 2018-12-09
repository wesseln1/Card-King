// import newCardForm from "./newCardForm"
import postCard from "./cardPost"
const pokemon = require("pokemontcgsdk")
// let cardDomEntry = document.querySelector(".output")
const cardAPIFetching = {

  findCard(cards){
    cards = document.querySelector(".cardName").value
    pokemon.card.where({ name: `${cards}` })
    .then(card => {
      let newCard = {
        user_id: sessionStorage.user_id,
        name: card[0].name,
        id: card[0].id,
        type: card[0].types,
        hp: card[0].hp,
        pokedex_number: card[0].nationalPokedexNumber,
        img: card[0].imgageURL,
        series: card[0].series,
        rarity: card[0].rarity,
        ability: card[0].ability,
        attacks: card[0].attacks,
        weaknesses: card[0].weaknesses,
        resistances: card[0].resistances,
      }
      return postCard(newCard)
      // console.log(newCard, "after")
    }
    )
  },
  getCards(){
    return fetch("http://localhost:8088/cards")
    .then(cards => cards.json())
    .then(parsedCards => parsedCards)
  }

}
  export default cardAPIFetching