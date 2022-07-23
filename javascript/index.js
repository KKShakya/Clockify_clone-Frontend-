let chat_btn = document.querySelector("#chat-bot-sign");
let chat_wind = document.querySelector(".chat-box-window");
let chat_sbmt = document.querySelector(".sbmt-msg>button");
let chat_close = document.querySelector(".chat-header-cont>button");

chat_btn.addEventListener("click",function(e){
  chat_btn.style.display = "none";
  chat_wind.style.display = "block";
})

chat_sbmt.addEventListener("click",function(e){
  chat_btn.style.display = "inline";
  chat_wind.style.display = "none";
})

chat_close.addEventListener("click",function(e){
  chat_btn.style.display = "inline";
  chat_wind.style.display = "none";
})

// function loads
$(function(){
  $("#header").load("header.html");  
});
$(function(){
  $(".go-to-signup").load("createAccount.html");  
});
$(function(){
  $("footer").load("footer.html");
});

