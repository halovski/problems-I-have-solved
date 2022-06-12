function solution() {
    let addButton = document.querySelectorAll(`button`)[0]
    
    // let listUL = document.createElement(`ul`)

    let listCard = document.getElementsByClassName(`card`)[1]
    
    let sentCard = document.getElementsByClassName(`card`)[2]

    let discardCard = document.getElementsByClassName(`card`)[3]

    console.log(sentCard,discardCard);

    addButton.addEventListener(`click`, () => {

        let addButtonText = document.querySelectorAll(`div`)[0].children[0].children[1].children[0].value

        document.querySelectorAll(`div`)[0].children[0].children[1].children[0].value = ``
        
        let nextGift = document.createElement(`li`)
        nextGift.textContent = addButtonText
        nextGift.className = `gift`
        listCard.children[1].appendChild(nextGift)
///////////////////
        let sendButton = document.createElement(`button`)
        sendButton.id = `sendButton`
        sendButton.textContent = `Send`
        nextGift.appendChild(sendButton)

        sendButton.addEventListener(`click`, () => {
            let nextSent = document.createElement(`li`)
            nextSent.textContent = addButtonText
            nextSent.className = `gift`
            //console.log(nextGift.textContent);
            sentCard.children[1].appendChild(nextSent)
            listCard.children[1].removeChild(nextGift)
        })

        let discardButton = document.createElement(`button`)
        discardButton.id = `discardButton`
        discardButton.textContent = `Discard`
        nextGift.appendChild(discardButton)

        discardButton.addEventListener(`click`, () => {
            let nextDiscard = document.createElement(`li`)
            nextDiscard.textContent = addButtonText
            nextDiscard.className = `gift`
            discardCard.children[1].appendChild(nextDiscard)
            listCard.children[1].removeChild(nextGift)
        })
///////////////////

       
        

        console.log(addButtonText);   
        // console.log(addButtonText);

        function sortList() {
            var i, switching, b, shouldSwitch;
      
            switching = true;
      
            while (switching) {
        
              switching = false;
              b = listCard.children[1].getElementsByTagName("li");
             
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
      
         sortList()})

    
}