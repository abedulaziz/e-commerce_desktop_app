
const form = document.getElementById("loginUserForm");
const loginBut = document.getElementById("login");

loginBut.addEventListener("click", function() {
  let inputs =form.querySelectorAll("input")

  for (let i =0; i< inputs.length; i++) {


    if (inputs[i].value === "") {

      alert("Please input all fields.")
      return
    }

  }

  const userData = new FormData(form);

  axios.post("http://127.0.0.1:8000/api/login", userData)
  .then(function(res) {
    console.log(res);
    localStorage.setItem("access_token", res.data.access_token);
    window.location.href = "./../index.html"
  })
  .catch(err => {
    console.log(err);
    alert(err.message)
  })

})