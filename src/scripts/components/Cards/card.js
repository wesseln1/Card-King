function cardForm(card) {
 card =  `
   <div id="card" class="card">
   <h1>${card.name}</h1>
   <div id="cardDiv" class="cardDiv">
   <a><img src=${card.imageUrl} alt=${card.name}></a>
   </div>
   <input type="button" id="deleteButton" class="deleteButton"/>
   </div>`
   return card
}
export default cardForm