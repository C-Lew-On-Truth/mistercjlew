let pic = document.querySelector(".pic");
let thankYouHolder = document.querySelector(".thank-message");
let thankMessage = document.querySelector(".thank-message p");
let intro = document.querySelector(".intro");

setTimeout(() => {
  intro.style.transition = "1s";
  intro.style.opacity = 0;
}, 1500);

setTimeout(() => {
  intro.style.transition = "2s";
  intro.style.opacity = 1;
  intro.textContent = "I'm Clayton Lewis";
}, 3000);
/*
setTimeout(() => {
  thankMessage.style.opacity = 1;
}, 1000);
*/
setTimeout(() => {
  thankYouHolder.style.top = "-500px";
  pic.style.bottom = "-2px";
}, 3000);
