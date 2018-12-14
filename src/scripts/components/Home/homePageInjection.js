import home from "./homePage"
let domEntry = document.querySelector(".domEntry")
function homePageInjection(){
  let homeForm = home()
  domEntry.innerHTML = homeForm
}
export default homePageInjection