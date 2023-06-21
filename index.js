//console.log(window.innerWidth);

const navBar = document.querySelector(".nav-bar");
const proBar = document.querySelector(".pro-bar");
let content = document.querySelector(".content");

content.src = "about.html"

navBar.onclick = (ev) => {
  let target = ev.target.className;
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
  }
};

proBar.onclick = (ev) => {
  let target = ev.target.className;
  switch (target) {
    case "github":
      window.open('https://github.com/C-Lew-On-Truth', '_blank');
      break;
    case "linkedin":
      window.open('https://www.linkedin.com/in/clayton-lewis-1a604b92/', '_blank');
      break;
    case "codepen":

      window.open('https://codepen.io/c-lew-on-truth', '_blank');
      break;
  }
};

