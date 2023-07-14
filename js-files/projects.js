
/*--------demo reel carousel code-----------*/
const clips = document.getElementById("carousel");
const clipNames = document.querySelector(".clip-names");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// Images are from unsplash
let reels = [
  "videos/spor_original.mp4",
  "videos/sunday_skate_video.mp4 ",
  "videos/wivb_pkg.mp4 "
];
let clipList = [
  "Sweet Plans of Revenge",
  "Sunday Skate Movie",
  "WIVB Sabres Package"
] 

clipNames.textContent = clipList[0]
clips.src = reels[0];
let position = 0;


const moveRight = () => {
  if (position >= reels.length - 1 && position >= clipList.length - 1) {
    position = 0;
    clips.src = reels[position];
    clipNames.textContent = clipList[position]
 
    return;
  }
  clips.src = reels[position + 1];
  clipNames.textContent = clipList[position + 1]
  position++;
};

const moveLeft = () => {
  if (position < 1 ) {
    position = reels.length - 1;
    clips.src = reels[position];
    clipNames.textContent = clipList[position]
    return;
  }
  clips.src = reels[position - 1];
  clipNames.textContent = clipList[position -1]
  position--;
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

/*--------demo reel carousel code-----------*/

/*--------rap quiz code -----------*/
let recordGif = document.querySelector(".record-gif");
let rapQuizInfo = document.querySelector(".rap-quiz-info");
let rapQuizEntry = document.querySelector(".rap-quiz-entry");
let exitRapEntry = document.querySelector(".exit-rap-entry");
recordGif .onclick = function() {
 window.open("https://c-lew-on-truth.github.io/real-rap-fans/");
}

rapQuizInfo.onclick = function() {
  rapQuizEntry.style.transition = ".5s"
  setTimeout(() => {
    rapQuizEntry.style.display = "flex";
  
  }, 100)
 
  setTimeout(() => {
    rapQuizEntry.style.opacity = ".5s";
  }, 500)

}

exitRapEntry.onclick = function() {
  rapQuizEntry.style.transition = "1s"
  setTimeout(() => {
    rapQuizEntry.style.display = "none";
  }, 1000)
  setTimeout(() => {
    rapQuizEntry.style.opacity = 0;
  }, 500)
}


/*--------rap quiz code -----------*/