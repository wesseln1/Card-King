
const cardForms = {

  myCardForm(card){
    let buildCard = `
    <div id="newCardDiv" class="p-2">
    <div class="cardHead>
    <h1>${card.name}</h1>
    <h2>${card.series}</h2>
  </div>
  <div class="cardURL">
  <a><img src=${card.imageUrl} alt=${card.name}></a>
  </div>
  <div id="cardButtonDiv" class="cardButtonDiv">
  <div>
  <input type="button" id=${card.id} class="btn btn-danger" value="Delete"/>
  </div>
  <div>
  <input type="button" id="deck_${card.id}" class="btn btn-primary" value="Add To Deck"/>
  </div>
  </div>
  </div>
  </div>
  `
  return buildCard
},

 cardForm(card) {
  let cards =  `
  <div id="card" class="p-2">
  <h1>${card.name}</h1>
  <div id="cardDiv" class="cardDiv">
    <a><img src=${card.imageUrl} alt=${card.name}></a>
    </div>
    <input type="button" id=add_${card.id} class="btn btn-primary" placeholder="Add To Collection" value="Add To Collection"/>
    <input type="button" id=${card.id} class="btn btn-danger" value="Delete" placeholder="Delete"/>
    </div>`
    return cards
  }
}
  export default cardForms