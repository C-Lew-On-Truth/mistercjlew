let home = document.querySelector(".home");
let name = document.querySelector(".name");
let introStatement = document.querySelector(".intro-statement");
let bitmoji = document.querySelector(".bitmoji");
let introImage = document.querySelector(".intro-image ");
let pic = document.querySelector(".pic ");

setTimeout(() => {
  home.style.opacity = 1;
}, 1000);


setTimeout(() => {
  name.style.opacity = 1;
  name.style.transition = "1s"
}, 1500);

setTimeout(() => {
  introStatement.style.opacity = 1;
  introStatement.style.transition = "1s"
  bitmoji.style.opacity = 1;
}, 1800);

setTimeout(() => {
  introImage.style.opacity = ".7"
  pic.style.bottom = "0"
  pic.style.transition = "1s"
  introImage.style.transition = "1s"
}, 2000);

//export { home, name, introStatement, bitmoji, introImage, pic };