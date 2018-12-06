import userAPIFunctions from "./fetching"
import hideLoginDiv from "./hideDiv"
function loginUser(){
   sessionStorage.clear()
   let email= document.querySelector("#login").value
   userAPIFunctions.getUser(email)
   .then((user)=>{
       let validated= validatePassword(user)
          if(validated){
              email = document.querySelector("#login")
               sessionStorage.setItem("user_id", user.id)
               sessionStorage.setItem("email", email.value)
               hideLoginDiv()
               alert("welcome")
           } else {
               alert("wrong password")
           }
       })
   }
   function validatePassword(user){
    const passwordValue= document.querySelector("#password")
    if (user.password===passwordValue.value){
        return true
    } else {
        return false
    }
}
export default loginUser