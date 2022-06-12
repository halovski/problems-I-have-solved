window.addEventListener('load', solve)



function solve() {
    let likes = 0
    // let urlParams = new URL(document.URL).searchParams



    document.getElementById(`add-btn`).addEventListener(`click`, () => {

        let genre = document.getElementById(`genre`).value
        let name = document.getElementById(`name`).value
        let author = document.getElementById(`author`).value
        let date = document.getElementById(`date`).value
            
        
    if (genre == `` || name == `` || author == `` || date == ``) {
        return;
    }

    let div = document.createElement(`div`)
    div.className = `hits-info`

    let divImage = document.createElement(`img`)
    divImage.src = `./static/img/img.png`

    let genreHeading = document.createElement(`h2`)
    genreHeading.textContent = `Genre: ${genre}`

    let nameHeading = document.createElement(`h2`)
    nameHeading.textContent = `Name: ${name}`

    let authorHeading = document.createElement(`h2`)
    authorHeading.textContent = `Author: ${author}`

    let dateHeading = document.createElement(`h3`)
    dateHeading.textContent = `Date: ${date}`


    let saveBtn = document.createElement(`button`)
    saveBtn.textContent = `Save song`
    saveBtn.className = `save-btn`
    let likeBtn = document.createElement(`button`)
    likeBtn.textContent = `Like song`
    likeBtn.className = `like-btn`
    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `Delete`
    deleteBtn.className = `delete-btn`

    div.appendChild(divImage)
    div.appendChild(genreHeading)
    div.appendChild(nameHeading)
    div.appendChild(authorHeading)
    div.appendChild(dateHeading)

    div.appendChild(saveBtn)
    div.appendChild(likeBtn)
    div.appendChild(deleteBtn)

    likeBtn.addEventListener(`click`, function () {
        let likeTxt = document.getElementsByClassName(`likes`)[0]
        likes += 1
        likeTxt.children[0].textContent = `Total Likes: ${likes}` //??
        likeBtn.disabled = true 
        
    })

    let bigDiv = document.getElementsByClassName(`all-hits-container`)

    saveBtn.addEventListener(`click`, function () {



        let img = document.createElement(`img`)
        img.src = `./static/img/img.png`
        let savedDiv = document.getElementsByClassName(`saved-container`)
        let genreSave = document.createElement(`h2`)
        let nameSave = document.createElement(`h2`)
        let authorSave = document.createElement(`h2`)
        let dateSave = document.createElement(`h3`)

        genreSave.textContent = `Genre: ${genre}`
        nameSave.textContent = `Name: ${name}`
        authorSave.textContent = `Author: ${author}`
        dateSave.textContent = `Date: ${date}`

        let deleteBtnSave = document.createElement(`button`)
        deleteBtnSave.textContent = `Delete`
        deleteBtnSave.className = `delete-btn`

        let hitsDiv = document.createElement(`div`)

        hitsDiv.appendChild(img)
        hitsDiv.appendChild(genreSave)
        hitsDiv.appendChild(nameSave)
        hitsDiv.appendChild(authorSave)
        hitsDiv.appendChild(dateSave)
        hitsDiv.appendChild(deleteBtnSave)

        hitsDiv.className = `hits-info`

        savedDiv[0].appendChild(hitsDiv)


        deleteBtnSave.addEventListener(`click`, function () {
            savedDiv[0].removeChild(hitsDiv)
        })


        bigDiv[0].removeChild(div)



    })

    deleteBtn.addEventListener(`click`, function () {
        bigDiv[0].removeChild(div)
    })

    // console.log(bigDiv);
    bigDiv[0].appendChild(div)



    })

    // console.log(getParams(`file:///C:/SoftUni/JSexam/MusicSite/Resources/index.html?genre=44&name=&author=&date=`));

    // function addToCollections(){

    // let genre = urlParams.get(`genre`)
    // let name = urlParams.get(`name`)
    // let author = urlParams.get(`author`)
    // let date = urlParams.get(`date`)

}
//second song probably no
//searching by inner html








