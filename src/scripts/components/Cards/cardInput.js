function cardSearchForm() {
  let card = `
  <section>
  <div id="cardSearchFormDiv" class="p-3">
  <div id="pageHeader" class="pageHeader">
  <h1>My Cards!</h1>
  </div>
  <div id="cardSearchDiv hide" class="cardSearchDiv"/>
      <input type="text" id="cardName" class="cardName" placeholder="Card Name"/>
      <input type="button" id="cardSearchButton" class="btn btn-primary" value="Search Pokedex" placeholder="Search Pokedex"/>
      <input type="button" id="allCardSearch" class="btn btn-primary" value="Search All Cards"/>
  </div>
  </div>
  </section>
  `
  return card
}
export default cardSearchForm