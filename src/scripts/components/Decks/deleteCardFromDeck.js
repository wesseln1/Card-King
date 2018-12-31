import deckAPIFetching from "./deckFetching"

function deleteCards(card, deck){
  console.log(card.id, "this id")
  deckAPIFetching.deleteCardFromDeck(deck.id).then(
    $(`#card_${card.id}`).detach())
}
export default deleteCards