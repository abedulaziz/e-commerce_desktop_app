const axios = require("axios");

const adminLogin = axios({
  method: "post",
  url: "http://127.0.0.1:8000/api/login",
  data: {
    email: "john.doe@gmail.com",
    password: "123"
  }
})

console.log("haha");

const loginRes = adminLogin.then(res => 
  JSON.parse(res)

).then(result => {
  console.log(result);
})

loginRes.catch(e => {
  console.log(e);
})