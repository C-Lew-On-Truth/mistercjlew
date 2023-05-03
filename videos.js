//import { info } from "./video-info.js";

const vidOptions = document.querySelectorAll(".vid-option");
const videoPlayer = document.querySelector(".video-player");
const videoList = [
  "media/spor_original.mp4",
  "media/sunday_skate_video.mp4",
  "media/slow_clouds.mp4",
];

const videoOptions = document.querySelector(".video-options");
let vidSource = document.querySelector(".current-video video");
let vidName = document.querySelector(".current-video h1")

vidSource.src = "";
vidSource.controls = false;

videoPlayer.onmouseleave = (ev) => {
  vidSource.controls = false;
  vidSource.src = "";
  vidName.textContent ="HOVER OVER WHICH VIDEO TO CHOOSE BELOW!"
};

videoOptions.onmouseover = (ev) => {
  let target = ev.target.className;

  switch (target) {
    case "recon":
      vidSource.src = videoList[0];
      vidSource.controls = true;
      vidSource.style.display = "block";
      vidName.textContent ="SWEET PLANS OF REVENGE"
      break;
    case "sunday":
      vidSource.src = videoList[1];
      vidSource.controls = true;
      vidSource.style.display = "block";
      vidName.textContent ="SUNDAY"
      break;
    case "slow":
      vidSource.src = videoList[2];
      vidSource.controls = true;
      vidSource.style.display = "block";
      vidName.textContent ="DEMO DUMMY"
      break;
  }
};
//console.log('height is ' + window.innerHeight);
//console.log('width is ' + window.innerWidth);
