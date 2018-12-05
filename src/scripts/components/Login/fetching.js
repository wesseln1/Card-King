const loginAPIFunctions = {
  getUsers() {
    return fetch("http://localhost:8088/users")
    .then(users => users.json())
    .then(parsedUsers => parsedUsers)
    // .then(console.log(parsedUsers, "user"))
  },
  getUser(email){
    return fetch(`http://localhost:8088/users?username=${email}`)
    .then(user => user.json())
    .then(parsedUser => parsedUser[0])
  },
  postUser(obj){
    return fetch("http://localhost:8088/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
  }
}
export default loginAPIFunctions