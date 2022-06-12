function addDestination(){

    let input = document.getElementById(`input`)
    let cityInput = input.children[1].value
    let countryInput = input.children[3].value
    let seasonInput = input.children[5].options[input.children[5].selectedIndex].textContent
 
  // if(cityInput.length !== 0 && countryInput.length !== 0){
        //if(!cityInput && !countryInput){    
            console.log(!cityInput);
            console.log(!countryInput);
            
            if(cityInput !== `` && countryInput !== ``){  


    let nextTr = document.createElement(`tr`)
    let nextDestination = document.createElement(`td`)
    let nextSeason = document.createElement(`td`)

    nextDestination.textContent = `${cityInput}, ${countryInput}`
    nextSeason.textContent = seasonInput

        let springCounter = document.getElementById(`spring`)
        let summerCounter = document.getElementById(`summer`)
        let autumnCounter = document.getElementById(`autumn`)
        let winterCounter = document.getElementById(`winter`)

    if(seasonInput == `Spring`){
        springCounter.value++
    }else if(seasonInput == `Summer`){
        summerCounter.value++
    }else if(seasonInput == `Autumn`){
        autumnCounter.value++
    }else if(seasonInput == `Winter`){
        winterCounter.value++
    }


    nextTr.appendChild(nextDestination)
    nextTr.appendChild(nextSeason)

    let table = document.getElementById(`destinationsList`)
    table.appendChild(nextTr)

    input.children[1].value = ``
    input.children[3].value = ``
}
}