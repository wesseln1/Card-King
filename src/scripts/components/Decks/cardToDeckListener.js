import deckForms from "./cardToDeckForm"
function cardToDeckListening(){
  let add = document.querySelector(`#deck_${card.id}`)
  console.log("clicked", add)
  add.addEventListener("click", ()=>{
    deckForms.deckSearchForm()
    deckForms.cardToDeckEventListener()
})
}
export default cardToDeckListening