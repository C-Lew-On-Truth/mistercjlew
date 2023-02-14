//gimport "./interest-content";

console.log(window.innerWidth);


const interest = document.querySelector(".interest");
let gifHolder = document.querySelector(".gif-holder");
let content = document.querySelector(".content")

interest.onmouseover = function (ev) {
  let target = ev.target.textContent;
  switch (target) {
    case "Family":
      gifHolder.style.backgroundImage = "none";
      gifHolder.textContent = `FAMILY`;
      break;
    case "Coaching":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Coaching`;
      break;
    case "Hockey":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Hockey`;
      break;
    case "Skating":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Skate or die!`;
      break;
    case "Music":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Music`;
      break;
    case "Coding":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Coding`;
      break;
    case "Cooking":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Cooking`;
      break;
    case "Delicious Cusine":
      console.log(target);
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `FOOD!!!`;
      break;
    case "Basketball":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Balling!`;
      break;
    case "Good Company":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Do it for your dawgs!!!`;
      break;
    case "Comedy":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `I'm rolling dawg!`;
      break;
    case "Peace and Love":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `The only way to save the world`;
      break;
  }
};

interest.onmouseleave = function (ev) {
  gifHolder.innerHTML = "";
  gifHolder.style.backgroundImage = "url(media/muppet.gif)";
  content.style.display = "none"
};

interest.onclick = function (ev) {
  let target = ev.target.textContent;
 content.style.display = "block"
  switch (target) {
    case "Family":
      gifHolder.style.backgroundImage = "none";
      gifHolder.textContent = `FAMILY`;
      content.textContent = entries[family]
      break;
    case "Coaching":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Coaching`;
      break;
    case "Hockey":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Hockey`;
      break;
    case "Skating":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Skate or die!`;
      break;
    case "Music":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Music`;
      break;
    case "Coding":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Coding`;
      break;
    case "Cooking":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Cooking`;
      break;
    case "Delicious Cusine":
      console.log(target);
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `FOOD!!!`;
      break;
    case "Basketball":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Balling!`;
      break;
    case "Good Company":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `Do it for your dawgs!!!`;
      break;
    case "Comedy":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `I'm rolling dawg!`;
      break;
    case "Peace and Love":
      gifHolder.style.backgroundImage = "none";
      gifHolder.innerHTML = `The only way to save the world`;
      break;
  }
};
