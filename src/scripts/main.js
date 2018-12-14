import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
import postNewCard from "./components/Cards/selectCard"
import cardFormManager from "./components/Cards/formInjection"
import getAllCards from "./components/Cards/allCardsToDom"
import deckSearchForm from "./components/Decks/formInjection"
import homePageInjection from "./components/Home/homePageInjection"


let login = document.querySelector("#loginButton")
let newUser = document.querySelector("#signUpButton")
// let card = document.querySelector(".cardSearchButton")

// let homeNav = document.querySelector(".home")
// let cardNav = document.querySelector("#cards")
// let deckNav = document.querySelector(".decks")
// let favoritesNav = document.querySelector(".favorites")
// let logoutNav = document.querySelector(".logout")
// let addFav =  document.querySelector(".addToFavorites")

login.addEventListener("click", () => {
  loginUser()
})

newUser.addEventListener("click", () => {
  registerUser()
})

$(document).ready(function () {
  $("#decks").click(function () {
    deckSearchForm()
    console.log("clicked decks")
  })
})

$(document).ready(function (){
  $("#home").click(function (){
    homePageInjection()
    console.log("clicked home")
  })
})

$(document).ready(function (){
  $("#cards").click(function () {
    cardFormManager.searchForm()
    console.log("clicked cards")
    cardFormManager.cardListening()
    cardFormManager.searchAll()
    getAllCards()
  })
})

$(document).ready(function () {
  $("#addToCollection").click(function () {
    console.log("clicked add")
    postNewCard()
  })
})

$(document).ready(function () {
  $("#loginButton").click(function () {
    $("#loginBox").hide()
    homePageInjection()
  });
})

$(document).ready(function () {
  $("#loginButton").click(function () {
    $("#cardSearchDiv").show()
  })
})
$(document).ready(function () {
  $("#loginButton").click(function () {
  });
});
// $(document).ready(function () {
//   $("#addToFavorites").click(function () {
//     postNewCard()
//   })
// })
// homeNav.addEventListener("click", () => {
//   console.log("home")
//   homePageInjection()
// })



//  cardNav.addEventListener("click", () =>{
//   // cardAPIFunctions.findCard()
//    cardsToDom()
//   cardTasks.deleteCard()
//   console.log("cards")
// })

// card.addEventListener("click", () => {

//   console.log("clicky clicky ")
// })
// addFav.addEventListener("click", () => {
// })
// deckNav.addEventListener("click", () =>{
//   console.log("decks")
// })

// favoritesNav.addEventListener("click", () =>{
//   console.log("favs")
// })

// logoutNav.addEventListener("click", () =>{
//   console.log("logout")