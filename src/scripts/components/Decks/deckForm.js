function deckForm() {
  let card = `
  <div id="deckDiv" class="p-2">
  <div>
  <h1>Make new deck</h1>
      <input type="text" id="deckName" placeholder="Deck Name"/>
      <input type="button" id="newDeck" class="btn btn-primary" value="New Deck"/>
   </div>
   <div class="p-2">
   <h2>Find deck</h2>
      <input type="text" id="deckNameSearch" class="" placeholder="Search For Deck"/>
      <input type="button" id="deckSearch" class="btn btn-primary" value="Search All Decks"/>
   </div>
  </div>
  `
  return card
}
export default deckForm