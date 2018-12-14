import deckForms from "./cardToDeckForm"
function cardToDeckListening(){
  let add = document.querySelector(".addToDeck")
  add.addEventListener("click", ()=>{
    deckForms.deckSearchForm()
    deckForms.cardToDeckEventListener()
})
}
export default cardToDeckListening