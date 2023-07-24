//console.log(window.innerWidth);

const navBar = document.querySelector(".nav-bar");
const proBar = document.querySelector(".pro-bar");
let content = document.querySelector(".content");


let siteIntroContainer = document.querySelector(".site-intro-container");
siteIntroContainer.style.backgroundImage = "url(images/lightning-giphy.gif)";
setTimeout(() => {
  siteIntroContainer.style.opacity = 0;
}, 3000);


content.src = "home.html";
//siteIntroContainer.style.display = "none"
navBar.onclick = (ev) => {
  let target = ev.target.className;
  siteIntroContainer.style.display = "none";
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
      content.src = "home.html";
      break;

    case "home":
      siteIntroContatiner.style.display = "block";
      content.src = "";
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
