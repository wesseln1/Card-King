import cardsToDom from "./cardInjection"
import cardAPIFetching from "./cardFetching"

function postNewCard(card){
    let newCard = {
      user_id: sessionStorage.user_id,
      name: card[0].name,
      id: card[0].id,
      type: card[0].types,
      hp: card[0].hp,
      pokedex_number: card[0].nationalPokedexNumber,
      imgageURL: card[0].imgageUrl,
      series: card[0].series,
      rarity: card[0].rarity,
      ability: card[0].ability,
      attacks: card[0].attacks,
      weaknesses: card[0].weaknesses,
      resistances: card[0].resistances,
      favorite: false
    }
    cardAPIFetching.postCard(newCard)
    .then(() => {
      cardsToDom(newCard)
    })
    return (newCard)
}
export default postNewCard