/*- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly */

  const emailInput = document.getElementById('email')

  emailInput.addEventListener('blur', validateEmail)

  function validateEmail(event) {
    console.log(event.target.value)
  }