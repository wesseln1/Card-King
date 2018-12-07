import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
// import cardsToDom from "./components/Cards/cardInjection"
// import cardsToDom from "./components/Cards/cardInjection"
// import findCard from "./components/Cards/cardFetching"

let login = document.querySelector(".loginButton")
let newUser = document.querySelector(".signUpButton")
// let newCard = document.querySelector(".cardSearchButton")
let homeNav = document.querySelector(".home")
let cardNav = document.querySelector(".cards")
let deckNav = document.querySelector(".decks")
let favoritesNav = document.querySelector(".favorites")
let logoutNav = document.querySelector(".logout")


login.addEventListener("click", ()=> {
  console.log("clicked")
  loginUser()
})

newUser.addEventListener("click", ()=> {
  registerUser()
})

homeNav.addEventListener("click", () => {
  console.log("home")
})

cardNav.addEventListener("click", () =>{
  console.log("cards")
})

deckNav.addEventListener("click", () =>{
  console.log("decks")
})

favoritesNav.addEventListener("click", () =>{
  console.log("favs")
})

logoutNav.addEventListener("click", () =>{
  console.log("logout")
})

// newCard.addEventListener("click",() => {
//   findCard()
//   console.log("pokeClicked")
// })