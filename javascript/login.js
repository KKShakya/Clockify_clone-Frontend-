let userArr = JSON.parse(localStorage.getItem("userList")) || [];

console.log(userArr)
let form = document.querySelector("form");
form.addEventListener("submit",function(e){
  e.preventDefault();
 
  if(userArr.length === 0){
    alert("No Active User");
    return;
  }

  let userDetails = {
    name:form.name.value,
    pwd:form.password.value
  }
  console.log(userDetails.name,userDetails.pwd);
  let flag = false;
  userArr.forEach(function (ele) {
    if(userDetails.name === ele.name && userDetails.pwd === ele.pwd){
      //setting up logged in user so that he 
      //can perform his work in his account
      flag = true;
      localStorage.setItem("loggedInUser",JSON.stringify(ele));
      alert("Logged in Sucessfully");
      window.location.href="/HTML/index.html";
    }
  });
  if(flag == false){
    alert("user does not exist");
  }
  
})