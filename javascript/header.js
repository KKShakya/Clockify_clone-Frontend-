

let loggeduser = JSON.parse(localStorage.getItem("loggedInUser")) ||[];
console.log(loggeduser)
if(loggeduser.length !== 0){
 
  document.querySelector(".right-row").style.display = "none";

  let img = document.createElement("img");
  img.src = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"

  let li = document.createElement("li");
  li.innerText = loggeduser.name + " !";

  let user = document.querySelector(".user-name")
  user.append(img,li);
  user.style.display="flex";

}
console.log()