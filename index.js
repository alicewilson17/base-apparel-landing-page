/*- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly */

  const emailInput = document.getElementById('email')
  const emailError = document.getElementById('emailError')
  const successMsg = document.getElementById('successMessage')
 const form = document.querySelector('form')
 const submitBtn = document.querySelector('.signup-submit')

  emailInput.addEventListener('blur', validateEmail)

function isEmailValid(emailInput){
    const validEmail = /^[\w\d.%+-_]+@+[\w\d.%+-_]+\.+[\w]{2,}$/g
    return validEmail.test(emailInput)
}

  function validateEmail(event) {
    const input = event.target.value
    const isValidEmail=isEmailValid(input)
    if (!isValidEmail) {
        emailError.innerText = "Please enter a valid email"
        emailInput.classList.add('red-border')
        emailInput.classList.remove('green-border')

    }
    else {
        emailInput.classList.remove('red-border')
        emailInput.classList.add('green-border')
        emailError.innerText = ""
    }
}
form.addEventListener('submit', handleSubmit)
submitBtn.addEventListener('click', handleSubmit)

  function handleSubmit(event) {

const inputValue = emailInput.value
const inputValueIsValid = isEmailValid(inputValue)
if (!inputValueIsValid) {
    event.preventDefault()
    successMsg.innerText=""
}
else {
    event.preventDefault()
    successMsg.innerText="Sign-up success!"
    form.classList.add("hidden")
}

  }