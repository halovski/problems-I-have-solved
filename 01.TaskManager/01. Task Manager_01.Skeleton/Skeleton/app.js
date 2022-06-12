function solve() {

    let addButton = document.getElementById(`add`)
//placeholders here
  
    addButton.addEventListener(`click`, () => {
        let taskButton = document.getElementById(`task`)
        let descriptionButton = document.getElementById(`description`)
        let dateButton = document.getElementById(`date`)
  

        if (taskButton.value.length !== 0 && descriptionButton.value.length !== 0 && dateButton.value.length !== 0) {

            let openField = document.querySelectorAll(`section`)[1].getElementsByTagName('div')[1]
            let openArticle = document.createElement(`article`)
            let openH3 = document.createElement(`h3`)
            openH3.textContent = `${taskButton.value}`
            let openP1 = document.createElement(`p`)
            openP1.textContent = `Description: ${descriptionButton.value}`
            let openP2 = document.createElement(`p`)
            openP2.textContent = `Due Date: ${dateButton.value}`

            let buttonDiv = document.createElement(`div`)
            buttonDiv.className = `flex`

            let openStart = document.createElement(`button`)
            openStart.className = `green`
            openStart.textContent = `Start`

            let openDelete = document.createElement(`button`)
            openDelete.className = `red`
            openDelete.textContent = `Delete`

            openArticle.appendChild(openH3)
            openArticle.appendChild(openP1)
            openArticle.appendChild(openP2)
            openArticle.appendChild(buttonDiv)
            openField.appendChild(openArticle)
            buttonDiv.appendChild(openStart)
            buttonDiv.appendChild(openDelete)


            let progressField = document.querySelectorAll(`section`)[2].getElementsByTagName(`div`)[1]
            openStart.addEventListener(`click`, () => {

                let progressDelete = document.createElement(`button`)
                progressDelete.className = `red`
                progressDelete.textContent = `Delete`
                progressDelete.addEventListener(`click`, () => {
                    progressField.removeChild(progressArticle)
                })
                let progressFinish = document.createElement(`button`)
                progressFinish.className = `orange`
                progressFinish.textContent = `Finish`
                progressFinish.addEventListener(`click`, () => {
                        let finishField = document.querySelectorAll(`section`)[3].getElementsByTagName(`div`)[1]
                        let finishArticle = document.createElement(`article`)
                        finishArticle.appendChild(openH3)
                        finishArticle.appendChild(openP1)
                        finishArticle.appendChild(openP2)
                        finishField.appendChild(finishArticle)

                        //progressField.removeChild(progressArticle)

                        progressField.removeChild(progressField.children[0])
                })
                let progressArticle = document.createElement(`article`)
                progressArticle.appendChild(openH3)
                progressArticle.appendChild(openP1)
                progressArticle.appendChild(openP2)

                let buttonDiv2 = document.createElement(`div`)
            buttonDiv2.className = `flex`

            buttonDiv2.appendChild(progressDelete)
            buttonDiv2.appendChild(progressFinish)
            progressArticle.appendChild(buttonDiv2)
                progressField.appendChild(progressArticle)
                openField.removeChild(openArticle)
                //fix buttons
            })

            openDelete.addEventListener(`click`, () => {
                openField.removeChild(openArticle)
            })


            // alert(openField.innerHTML)

        }
    })


}