let port = 8086
const deckAPIFetching = {
// fetch to grab certain deck
  getDeck(deckName){
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
  }
}
  export default deckAPIFetching