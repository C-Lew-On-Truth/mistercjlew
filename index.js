console.log(window.innerWidth);

const navBar = document.querySelector(".nav-bar");
const proBar = document.querySelector(".pro-bar");
let content = document.querySelector(".content");

content.src = "about.html"

navBar.onclick = (ev) => {
  let target = ev.target.textContent;
  switch (target) {
    case "ABOUT":
      content.src = "about.html";
      break;
    case "EXPERIENCE":
      content.src = "experience.html";
      break;
    case "CONTACT":
      content.src = "contact.html";
      break;
  }
};

proBar.onclick = (ev) => {
  let target = ev.target.textContent;
  switch (target) {
    case "GitHub":
      window.open('https://github.com/C-Lew-On-Truth', '_blank');
      break;
    case "Linkedin":
      window.open('https://www.linkedin.com/in/clayton-lewis-1a604b92/', '_blank');
      break;
    case "CodePen":
      window.open('https://codepen.io/c-lew-on-truth', '_blank');
      break;
  }
};

