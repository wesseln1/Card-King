import loginUser from "./components/Login/loginUser"
import registerUser from "./components/Login/registerUser"


let login = document.querySelector("#loginButton")
let newUser = document.querySelector("#signUpButton")

login.addEventListener("click", ()=> {
  loginUser()
})

newUser.addEventListener("click", ()=> {
  registerUser()
})