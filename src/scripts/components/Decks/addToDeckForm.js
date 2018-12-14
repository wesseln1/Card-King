function addToDeck(){
  let deckSelector = `
  <div id="selectDeck" class="selectDeck">
    <input type="text" id="chooseDeck" class="chooseDeck" placeholder="Deck Name"/>
    <input type="button" id="sendToDeck" class="sendToDeck" placeholder="Add" value="Add"/>
  </div>
  `
  return deckSelector
}
export default addToDeck