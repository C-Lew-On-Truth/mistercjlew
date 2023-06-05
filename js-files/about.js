const about = document.querySelector(".about")
about.onclick = () => {
  setTimeout(() => {
    about.style.color = "red"
  }, 1000)
}