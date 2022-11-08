console.log(window.innerWidth)

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");

box1.onclick = () => {
    console.log("box seen")
    window.location.href = "my-interest.html"
}

box2.onclick = () => {
    console.log("box seen")
    window.location.href = "my-ability.html"
}



