window.addEventListener('load', solution);

  function solution() {


    let submitButton = document.getElementById(`submitBTN`)

    submitButton.addEventListener(`click`, () => {


      
      submitButton.disabled = true
      console.log(`submitButtonClicked`);
      let nameSubmitContent = document.getElementById(`fname`)
      let emailSubmitContent = document.getElementById(`email`)
      let phoneSubmitContent = document.getElementById(`phone`)
      let addressSubmitContent = document.getElementById(`address`)//text?
      let codeSubmitContent = document.getElementById(`code`)

      
    if(nameSubmitContent.value.length !== 0 && emailSubmitContent.value.length !== 0){
      let editName = document.createElement(`li`)
      editName.textContent = `Full Name: ${nameSubmitContent.value}`
      let editEmail = document.createElement(`li`)
      editEmail.textContent = `Email: ${emailSubmitContent.value}`
      let editPhone = document.createElement(`li`)
      editPhone.textContent = `Phone Number: ${phoneSubmitContent.value}`
      let editAddress = document.createElement(`li`)
      editAddress.textContent = `Address: ${addressSubmitContent.value}`
      let editCode = document.createElement(`li`)
      editCode.textContent = `Postal Code: ${codeSubmitContent.value}`



      let editBullets = document.getElementById(`infoPreview`)


      editBullets.appendChild(editName)
      editBullets.appendChild(editEmail)
      editBullets.appendChild(editPhone)
      editBullets.appendChild(editAddress)
      editBullets.appendChild(editCode)
      //remove submit text

      let tempName = nameSubmitContent.value
      let tempEmail = emailSubmitContent.value
      let tempPhone = phoneSubmitContent.value
      let tempAddress = addressSubmitContent.value
      let tempCode = codeSubmitContent.value
      nameSubmitContent.value = ""
      emailSubmitContent.value = ""
      phoneSubmitContent.value = ""
      addressSubmitContent.value = ""
      codeSubmitContent.value = ""

      let editBtn = document.getElementById(`editBTN`)
      let continueBtn = document.getElementById(`continueBTN`)
      editBtn.disabled = false
      continueBtn.disabled = false
      editBtn.addEventListener(`click`, () => {
        // •	When the “Edit” button is clicked, all of the personal information of the user is loaded in the input fields from step 
        //I and both the “Edit” and “Continue” buttons are disabled while the “Submit” button is enabled again.
        //The list items must be removed from the “infoPreview”. 

        nameSubmitContent.value = tempName
        emailSubmitContent.value = tempEmail
        phoneSubmitContent.value = tempPhone
        addressSubmitContent.value = tempAddress
        codeSubmitContent.value = tempCode

        editBullets.innerText = ``
        editBtn.disabled = true
        continueBtn.disabled = true
        submitButton.disabled = false

      })
      continueBtn.addEventListener(`click`, () => {
        //"Thank you for your reservation!" 
        let block = document.getElementById(`block`)
        block.innerHTML = ``
        let h3 = document.createElement(`h3`)
        h3.textContent = "Thank you for your reservation!"
        block.appendChild(h3)
      })


    }


  // if(emailSubmitContent.value.length == 0){
  // return
  // }

      // if (nameSubmitContent.textContent.length == 0 || emailSubmitContent.textContent.length == 0) {

        //   console.log(`name or email empty`);
      //   return
      // }
      // //fill ul with lis

    })


  }
