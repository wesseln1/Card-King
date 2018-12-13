import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
import postNewCard from "./components/Cards/selectCard"
import cardFormManager from "./components/Cards/formInjection"



let login = document.querySelector(".loginButton")
let newUser = document.querySelector(".signUpButton")
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
$(document).ready(function () {
  $("#cards").click(function () {
    cardFormManager.searchForm()
    cardFormManager.cardListening()
    cardFormManager.searchAll()

    // cardFormManager.addCard()
  })
})
// card.addEventListener("click", () => {
//   // findMyCard( )
//   cardsToDom()
// })

$(document).ready(function () {
    $("#addToCollection").click(function () {
      postNewCard()
    })
  })

// $(document).ready(function () {
//   $("#cardSearachButton").click(function () {
//     // findMyCard()
//   })
// })

$(document).ready(function () {
    $("#loginButton").click(function () {
      $("#loginBox").hide()
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
$(document).ready(function () {
  $("#addToFavorites").click(function () {
    postNewCard()
  })
})

newUser.addEventListener("click", () => {
  registerUser()
})

// homeNav.addEventListener("click", () => {
//   console.log("home")
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