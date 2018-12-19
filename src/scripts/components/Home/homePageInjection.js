import home from "./homePage"
// let domEntry = document.querySelector(".domEntry")
function homePageInjection(){
  let homeForm = home()
  $(".domEntry").append(homeForm)
}
export default homePageInjection