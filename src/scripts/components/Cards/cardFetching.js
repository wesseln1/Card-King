const cardAPIFuntions = {

  getCards(){
    return fetch("https://api.pokemontcg.io/v1/cards")
    .then(cards => cards.json())
    .then(parsedCards => parsedCards)
  },
  getCard(card){
    return fetch(`https://api.pokemontcg.io/v1/cards/name?${card}`)
    .then(card => card.json())
    .then(parsedCard => parsedCard[0])
  }
}
export default cardAPIFuntions