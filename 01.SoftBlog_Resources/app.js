//  <button class="btn create" type = "button!!!!!!!!!!!!">Create</button>   default submit resends/button doesnt
function solve(){
    let createBtn = document.getElementsByClassName(`btn create`)[0]

   createBtn.addEventListener(`click`, () => {

let inputSection = document.querySelectorAll(`section`)[2]
let inputArea = inputSection.children[1]

let outputArea = document.querySelectorAll(`section`)[1]

let post = document.createElement(`article`)



let author = inputArea.children[0].children[1].value
let title = inputArea.children[1].children[1].value
let category = inputArea.children[2].children[1].value
let content = inputArea.children[3].children[1].value

let titleElement = document.createElement(`h1`)
titleElement.textContent = title

let categoryElement = document.createElement(`p`)
categoryElement.textContent = `Category: `
let categoryStrong = document.createElement(`strong`)
categoryStrong.textContent = category
categoryElement.appendChild(categoryStrong)
 
let authorElement = document.createElement(`p`)
authorElement.textContent = `Creator: `
let authorStrong = document.createElement(`strong`)
authorStrong.textContent = author
authorElement.appendChild(authorStrong)

let contentElement = document.createElement(`p`)
contentElement.textContent = content

post.appendChild(titleElement)
post.appendChild(categoryElement)
post.appendChild(authorElement)
post.appendChild(contentElement)

let buttonDiv = document.createElement(`div`)
buttonDiv.className = `buttons`
let deleteButton = document.createElement(`button`)
deleteButton.className = `btn delete`
deleteButton.textContent = `Delete`

deleteButton.addEventListener(`click`, () => {
   outputArea.removeChild(post)  //!!!!
})

let archiveButton = document.createElement(`button`)
archiveButton.className = `btn archive`
archiveButton.textContent = `Archive`

archiveButton.addEventListener(`click`, () => {
   let nextBullet = document.createElement(`li`)

   nextBullet.textContent = title

   let orderedList = document.querySelectorAll(`ol`)[0]
   orderedList.appendChild(nextBullet)
   outputArea.removeChild(post)

   function sortList() {
      var i, switching, b, shouldSwitch;

      switching = true;

      while (switching) {
  
        switching = false;
        b = orderedList.getElementsByTagName("li");
       
        for (i = 0; i < (b.length - 1); i++) {
    
          shouldSwitch = false;
 
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {

          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
   
   }/////

   sortList()
})

buttonDiv.appendChild(deleteButton)
buttonDiv.appendChild(archiveButton)

post.appendChild(buttonDiv)
outputArea.appendChild(post)
// alert(JSON.stringify(contentElement.textContent))
   })

  }


 // Unexpected error: expected '<h2>Archive</h2><ol><li>MyArticle</li><li>Arrays</li></ol>' to equal '<h2>Archive</h2><ol><li>Arrays</li><li>MyArticle</li></ol>'
