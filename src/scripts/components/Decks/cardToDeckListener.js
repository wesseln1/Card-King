import deckForms from "./cardToDeckForm"
function cardToDeckListening(){
  // let add = document.querySelector(`#deck_${card.id}`)
  console.log("clicked")
  $(`#deck_${card.id}`).click( ()=>{
    deckForms.deckSearchForm()
    deckForms.cardToDeckEventListener()
})
}
export default cardToDeckListening