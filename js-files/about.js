let pic = document.querySelector(".pic")
let thankYouHolder = document.querySelector(".thank-message")
let thankMessage= document.querySelector(".thank-message p")
let intro = document.querySelector(".intro")

/*
setTimeout(() => {
  aboutHeader.innerHTML= "Im Clayton Lewis"
  aboutHeader.style.opacity = 1;

},1500)
*/

setTimeout(() => {
  thankMessage.style.opacity =  1
}, 1000)

  setTimeout(() => {
    thankYouHolder.style.top =  "-500px"
    pic.style.bottom = "-2px"
  }, 3000)
  
