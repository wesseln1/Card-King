import loginAPIFunctions from "./fetching"
// import hideLoginDiv from "./hideDiv"
function loginUser(){
    console.log("login user running")
   sessionStorage.clear()
   let email= document.querySelector("#login").value
   console.log(loginAPIFunctions, "loginAPI")
   loginAPIFunctions.getUser(email)
   .then((user)=>{
       console.log(user, "user")
       let validated= validatePassword(user)
          if(validated){
              email = document.querySelector("#login")
               sessionStorage.setItem("user_id", user.id)
               sessionStorage.setItem("email", email.value)
            //    hideLoginDiv()
               alert("welcome")
           } else {
               alert("wrong password")
           }
       })
   }
   function validatePassword(user){
       console.log(user, "user")
    const passwordValue= document.querySelector("#password")
    if (user.password===passwordValue.value){
        return true
    } else {
        return false
    }
}
export default loginUser