import cardsToDom from "./cardInjection"
import cardAPIFetching from "./cardFetching"

function postNewCard(card) {
  let newCard = {
    user_id: sessionStorage.user_id,
    name: card.name,
    id: card.id,
    type: card.types,
    hp: card.hp,
    pokedex_number: card.nationalPokedexNumber,
    imageUrl: card.imageUrl,
    series: card.series,
    rarity: card.rarity,
    ability: card.ability,
    attacks: card.attacks,
    weaknesses: card.weaknesses,
    resistances: card.resistances,
    favorite: false
  }
  cardAPIFetching.postCard(newCard)
    .then(() => {
      cardsToDom(newCard)
    })
  return (newCard)
}
export default postNewCard