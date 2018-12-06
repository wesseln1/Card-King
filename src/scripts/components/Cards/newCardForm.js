function newCardForm(card){
let buildCard = `
  <div id="newCardDiv" class="newCard">
  <ul>
  <li>${card.name}</li>
  <li>${card.series}</li>
  </ul>
  </div>

  `
  return buildCard
}
export default newCardForm