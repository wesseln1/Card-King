function deckForm() {
  let card = `
  <div id="deckDiv" class="deckDiv">
  <div>
      <input type="text" id="deckName" class="deckName" placeholder="Deck Name">
      <input type="button" id="newDeck" class="newDeck" value="New Deck" placeholder="New Deck">
   </div>
   <div>
      <input type="text" id="decksSearch" class="decksSerach" placeholder="Search For Deck"/>
      <input type="button" id="deckSearch" class="deckSearch" value="Search All Decks"/>
   </div>
  </div>
  `
  return card
}
export default deckForm