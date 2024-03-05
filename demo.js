(() => {
  "use strict"
  const ghost = document.querySelector(".ghost")
  let flag = true
  window.addEventListener("scroll", () => {
    let n = document.documentElement.scrollTop
    if (flag) {
      if (n > 80 && n < 400) {
        ghost.style.left = 0
        ghost.style.opacity = 1
      } else if (n > 200) {
        ghost.style.left = "100vw"
        ghost.style.opacity = 0
        flag = false
      }
    }
  })
})()
