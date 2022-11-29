console.log(window.innerWidth)

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const goHome = document.querySelector(".go-home")

box1.onclick = () => {
    window.location.href = "my-interest.html"
}

box2.onclick = () => {
    window.location.href = "my-ability.html"
}

box3.onclick = () => {
    window.location.href = "contact-me.html"
}

box4.onclick = () => {
    window.location.href = "videos.html"
}

box5.onclick = () => {
    window.location.href = "web-projects.html"
}

goHome.onclick = () => {
    console.log("box seen")
    window.location.href = "index.html"
}






