let port = 8086
const loginAPIFunctions = {
  getUsers() {
    return fetch(`http://localhost:${port}/users`)
    .then(users => users.json())
    .then(parsedUsers => parsedUsers)
    // .then(console.log(parsedUsers, "user"))
  },
  getUser(email){
    console.log(email, "email")
    return fetch(`http://localhost:${port}/users?email=${email}`)
    .then(user => user.json())
    .then(parsedUser => parsedUser[0])
  },
  postUser(obj){
    return fetch(`http://localhost:${port}/users`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  }
}
export default loginAPIFunctions