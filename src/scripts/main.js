import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"
import cardsToDom from "./components/Cards/cardInjection"


let login = document.querySelector("#loginButton")
let newUser = document.querySelector("#signUpButton")
let cardSearch = document.querySelector("#cardSearchButton")


login.addEventListener("click", ()=> {
  loginUser()
})

newUser.addEventListener("click", ()=> {
  registerUser()
})
cardSearch.addEventListener("click", () => {
  cardsToDom()
})