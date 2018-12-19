function addToDeck(){
  let deckSelector = `
  <div id="selectDeck" class="p-2">
    <input type="text" id="chooseDeck" class="chooseDeck" placeholder="Deck Name"/>
    <input type="button" id="cardToDeck" class="sendToDeck" placeholder="Add" value="Add"/>
  </div>
  `
  return deckSelector
}
export default addToDeck