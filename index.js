console.log(window.innerWidth);

const navBar = document.querySelector(".nav-bar");
let content = document.querySelector(".content");

content.src = "experience.html"

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

console.log('seen')