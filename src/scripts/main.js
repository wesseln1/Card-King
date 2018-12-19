import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
import postNewCard from "./components/Cards/selectCard"
import cardFormManager from "./components/Cards/formInjection"
import getAllCards from "./components/Cards/allCardsToDom"
import deckSearchForm from "./components/Decks/formInjection"
import homePageInjection from "./components/Home/homePageInjection"
// import cardToDeckListening from "./components/Decks/cardToDeckListener";


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
$("#home").click(function () {
  homePageInjection()
  console.log("clicked home")
})

$("#cards").click(function () {
  $(".domEntry").detach()
  cardFormManager.searchForm()
  getAllCards()
  cardFormManager.cardListening()
  cardFormManager.searchAll()
 })

  $("#addToCollection").click(function () {
    console.log("clicked add")
    postNewCard()
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