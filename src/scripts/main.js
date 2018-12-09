import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
// import whenClicked from "./components/Cards/card";
import cardsToDom from "./components/Cards/cardInjection";
// import cardsToDom from "./components/Cards/cardInjection"
// // import cardsToDom from "./components/Cards/cardInjection"
import cardAPIFunctions from "./components/Cards/cardFetching"

let login = document.querySelector(".loginButton")
let newUser = document.querySelector(".signUpButton")

// let homeNav = document.querySelector(".home")
// let cardNav = document.querySelector("#cards")
// let deckNav = document.querySelector(".decks")
// let favoritesNav = document.querySelector(".favorites")
// let logoutNav = document.querySelector(".logout")
let card = document.querySelector(".cardSearchButton")

login.addEventListener("click", ()=> {
  console.log("clicked")
  loginUser()
})

newUser.addEventListener("click", ()=> {
  registerUser()
})

// homeNav.addEventListener("click", () => {
//   console.log("home")
// })

 card.addEventListener("click", () =>{
  cardAPIFunctions.findCard()
  cardsToDom()
  console.log("cards")
})

// deckNav.addEventListener("click", () =>{
//   console.log("decks")
// })

// favoritesNav.addEventListener("click", () =>{
//   console.log("favs")
// })

// logoutNav.addEventListener("click", () =>{
//   console.log("logout")
// })

// $(".navBarList").on("click", ".tab", function(e) {
// 	e.preventDefault();
//   $(".tab").removeClass("active");
// 	$(".tab-content").removeClass("show");
// 	$(this).addClass("active");
// 	$($(this).attr("href")).addClass("show");
// });