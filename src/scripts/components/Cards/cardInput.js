function cardSearchForm() {
  let card = `
  <section>
  <div id="pageHeader" class="pageHeader">
  <h1>My Cards!</h1>
  </div>
  <div id="cardSearchDiv hide" class="cardSearchDiv">
      <input type="text" id="cardName" class="cardName" placeholder="Card Name">
      <input type="button" id="cardSearchButton" class="cardSearchButton " value="Search Pokedex" placeholder="Search Pokedex">
      <input type="button" id="allCardSearch" class="allCardSearch" value="Search All Cards"/>
  </div>
  </section>
  `
  return card
}
export default cardSearchForm