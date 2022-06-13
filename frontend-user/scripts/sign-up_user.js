
const form = document.getElementById("registerUserForm");
const registerBut = document.getElementById("register");

var passwords = document.querySelectorAll(".password, .password_confirmation")
passwords.forEach(password => {
  password.addEventListener("change", () => {

  })
})

registerBut.addEventListener("click", function() {
  let inputs =form.querySelectorAll("input:not([id='register']), select")

  for (let i =0; i< inputs.length; i++) {


    if (inputs[i].value === "") {

      alert("Please input all fields.")
      return
    }
    let passValue = document.querySelector(".password input").value
    let passConfirmValue = document.querySelector(".password_confirmation input").value
    
    if (passValue !== passConfirmValue || passValue.length < 6) {
      alert("Password and passwrod confirmation should be identical and contain more than 5 characters.")
      return
    }
  }

  const userData = new FormData(form);

  axios.post("http://127.0.0.1:8000/api/register", userData)
  .then(function(res) {
    console.log(res.data.token);
    localStorage.setItem("access_token", res.data.token.original.access_token);
  })
  .catch(err => {
    console.log(err);
    alert(err.response.data.email[0])
  })

})

