import cardAPIFetching from "./cardFetching"
// import cardsToDom from "./cardInjection";
import getAllCards from "./allCardsToDom";

function deleteCards(id){
  console.log(id, "this id")
  cardAPIFetching.deleteCard(id).then(
    getAllCards
    )
}
export default deleteCards