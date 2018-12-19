// import cardsToDom from "./cardInjection"
import cardAPIFetching from "./cardFetching"
import getAllCards from "./allCardsToDom";
import cardFormManager from "./formInjection";

function postMyNewCard(card){
    let newCard = {
      user_id: sessionStorage.user_id,
      name: card[0].name,
      id: card[0].id,
      type: card[0].types,
      hp: card[0].hp,
      pokedex_number: card[0].nationalPokedexNumber,
      imageUrl: card[0].imageUrl,
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
      $("#cardEntry").detach()
      cardFormManager.searchForm()
      getAllCards()
      cardFormManager.cardListening()
      cardFormManager.searchAll()
    })
    return (newCard)
}
export default postMyNewCard