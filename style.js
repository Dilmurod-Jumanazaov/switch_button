var elSwitchInput = document.querySelector(".switch-form__input")
elSwitchInput.addEventListener("change", function() {
  if (elSwitchInput.checked) {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }
  else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
})