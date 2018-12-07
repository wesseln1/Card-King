function newCardForm(card){
let buildCard = `
  <div id="newCardDiv" class="newCard">
  <ul>
  <li>${card[0].name}</li>
  <li>${card[0].series}</li>
  <a><img src=${card[0].imageUrl} alt=${card[0].name}><
  </ul>
  </div>
  `
  return buildCard
}
export default newCardForm