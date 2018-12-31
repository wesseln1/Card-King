
let deckCardForms = {



  myCardForm(card, deck){
    let buildCard = `
    <div id=card_${card.id} class="p-2">
  <div class="cardHead>
  <h1>${card.name}</h1>
  <h2>${card.series}</h2>
  </div>
  <div class="cardURL">
  <a><img src=${card.imageUrl} alt=${card.name}></a>
  </div>
  <div id="cardButtonDiv" class="cardButtonDiv">
  <div>
  <input type="button" id=${deck.id} class="btn btn-danger" value="Delete"/>
</div>
</div>
</div>
</div>
`
return buildCard
}
}
export default deckCardForms