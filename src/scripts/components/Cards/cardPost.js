// const cardAPIFunctions= {
//   getCard(){
//     return fetch("http://localhost:8088/cards")
//     .then(card => card.json())
//     .then(parsedCard => parsedCard)
//   },
// }
 function postCard(card){
    return fetch("http://localhost:8088/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(post => post.json())
    .then(console.log("posted"))
  }
export default postCard