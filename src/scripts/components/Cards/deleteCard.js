import cardAPIFetching from "./cardFetching"
import cardsToDom from "./cardInjection";

function deleteCards(id){
  console.log(id, "this id")
  cardAPIFetching.deleteCard(id)
  .then(cardsToDom)
}
export default deleteCards