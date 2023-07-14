//console.log(window.innerWidth);

const navBar = document.querySelector(".nav-bar");
const proBar = document.querySelector(".pro-bar");
let content = document.querySelector(".content");

let bodyContainer = document.querySelector(".body-container")
let siteIntroContatiner = document.querySelector(".site-intro-contatiner")
bodyContainer.style.backgroundImage = "url(images/lightning-giphy.gif)"
setTimeout(() => {
  bodyContainer.style.backgroundImage = "none"
  siteIntroContatiner.style.transition = "1s"
  siteIntroContatiner.style.opacity = 1
},3000)

/*
let about = document.querySelector(".about");
let experience = document.querySelector(".nav-bar .experience");
let contact = document.querySelector(".nav-bar .contact");
let projects = document.querySelector(".nav-bar .projects");
*/

navBar.onclick = (ev) => {
  let target = ev.target.className;
  siteIntroContatiner.style.display = "none";
  switch (target) {
    case "about":
      content.src = "about.html";
      break;
    case "experience":
      content.src = "experience.html";
      break;
    case "contact":
      content.src = "contact.html";
      break;
    case "projects":
      content.src = "projects.html";
      break;
      
      case "home":
        siteIntroContatiner.style.display = "block";
        content.src = ""
        break;
  }
};

proBar.onclick = (ev) => {
  let target = ev.target.className;
  switch (target) {
    case "github":
      window.open("https://github.com/C-Lew-On-Truth", "_blank");
      break;
    case "linkedin":
      window.open(
        "https://www.linkedin.com/in/clayton-lewis-1a604b92/",
        "_blank"
      );
      break;
    case "codepen":
      window.open("https://codepen.io/c-lew-on-truth", "_blank");
      break;
  }
};
