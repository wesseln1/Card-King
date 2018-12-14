
const cardForms = {


  myCardForm(card){
    let buildCard = `
    <div id="newCardDiv" class="newCard">
    <div class="cardHead>
    <h1>${card.name}</h1>
    <h2>${card.series}</h2>
  </div>
  <div class="cardUrl">
  <a><img src=${card.imageUrl} alt=${card.name}></a>
  </div>
  <div id="cardButtonDiv" class="cardButtonDiv">
  <div>
  <input type="button" id="deleteButton" class=${card.id} value="Delete" placeholder="Delete"/>
  </div>
  </div>
  </div>
  `
  return buildCard
},

 cardForm(card) {
  let cards =  `
  <div id="card" class="card">
  <h1>${card.name}</h1>
  <div id="cardDiv" class="cardDiv">
    <a><img src=${card.imageUrl} alt=${card.name}></a>
    </div>
    <input type="button" id="addToCollection" class="addToCollection" placeholder="Add To Collection" value="Add To Collection"/>
    <input type="button" id="deleteButton" class=${card.id} value="Delete" placeholder="Delete"/>
    </div>`
    return cards
  }
}
  export default cardForms