import userAPIFunctions from "./fetching"
import loginUser from "./loginUser"
   function registerUser(){
       let login = document.querySelector("#login")
       let password = document.querySelector("#password")
   let obj={
       email:"",
       password:""
   }
   obj.email = (login.value)
   obj.password = (password.value)
   userAPIFunctions.postUser(obj)
   .then((response)=>response.json()
   .then((user)=> loginUser(user))
   )
}
export default registerUser