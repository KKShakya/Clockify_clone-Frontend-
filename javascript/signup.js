let userArr = JSON.parse(localStorage.getItem("userList")) || [];

let form = document.querySelector("form");
form.addEventListener("submit",function(e){
  e.preventDefault();
  let userDetails = {
    name:form.name.value,
    pwd:form.password.value
  }
  userArr.push(userDetails);
  localStorage.setItem("userList",JSON.stringify(userArr));
  alert("Successfully Signed up");
  window.location.href="/HTML/login.html"
})

// console.log(userArr);