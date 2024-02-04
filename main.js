
let capch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let clickMe=document.querySelector("button.click")
let divCaptcha=document.querySelector("div.captcha")
let capt=document.querySelector("input#capt")
let captBtn=document.querySelector("button.captBtn")
clickMe.addEventListener("click",function(){
    generateData()
})
captBtn.addEventListener("click",function(){
   if(capt.value===generate){
       console.log("ok");
   }else{
       console.log("err");
       generateData()
   }
})
function generateData(){
    generate=capch.charAt(Math.random()*62)+
    capch.charAt(Math.random()*62)+
    capch.charAt(Math.random()*62)+
    capch.charAt(Math.random()*62)+
    capch.charAt(Math.random()*62)
    divCaptcha.innerText=generate
}