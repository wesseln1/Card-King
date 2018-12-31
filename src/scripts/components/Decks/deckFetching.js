let port = 8086
const deckAPIFetching = {
// fetch to grab certain deck
  getDeckByName(deckName){
    return fetch(`http://localhost:${port}/decks?q=${deckName}`)
    .then(deck => deck.json())
    .then(parsedDeck => parsedDeck)
  },
// fetch to post new deck
  postNewDeck(deck){
    console.log(deck, "decksssssssss")
    return fetch(`http://localhost:${port}/decks`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deck)
    }).then(deck => deck.json())
  },
// fetch to post new card to deck
  postCardToDeck(card){
    return fetch(`http://localhost:${port}/deckCards`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(deck => deck.json())
  },
  getDeck(deck){
    console.log(deck,"deck name")
    return fetch(`http://localhost:${port}/deckCards?deck_id=${deck}`)
    .then(deck =>  deck.json())
    .then(parsedDeck => parsedDeck)
  },
  getCardFromDeck(deck){
    console.log(deck,"card id")
    return fetch(`http://localhost:${port}/cards?q=${deck}`)
    .then(card => card.json())
    .then(parsedCard => parsedCard)
  },
  deleteCardFromDeck(id){
    return fetch(`http://localhost:${port}/deckCards/${id}`, {
      method: "DELETE"
    }).then(r => r.json())
  }
}
  export default deckAPIFetching