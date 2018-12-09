function newCardForm(card){
let buildCard = `
  <div id="newCardDiv" class="newCard">
  <div class="cardHead>
  <h1>${card.name}</h1>
  <h2>${card.series}</h2>
  </div>
  <div class="cardUrl">
  <a><img src=${card.imageUrl} alt=${card.name}></a>
  </div>
  </div>
  `
  return buildCard
}
export default newCardForm

// function cardForm(card) {
//   let cards =  `
//   <div id="card" class="card">
//   <h1>${card.name}</h1>
//     <div id="cardDiv" class="cardDiv">
//     <a><img src=${card.imageUrl} alt=${card.name}></a>
//     </div>
//     <input type="button" id="deleteButton" class="deleteButton"/>
//     </div>`
//     return cards
//   }
// export default cardForm