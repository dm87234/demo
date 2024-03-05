;(() => {
  "use strict"
  const ghost = document.querySelector(".ghost")
  let scrollTimer = null
  let flag = true
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimer)
    if (flag) {
      let n = document.documentElement.scrollTop
      scrollTimer = setTimeout(() => {
        console.log(n)
        if (n > 100 && n < 200) {
          ghost.style.left = 0
          ghost.style.opacity = 1
        } else if (n > 200) {
          ghost.style.left = "100vw"
          ghost.style.opacity = 0
          flag = false
        }
      }, 10)
    }
  })
})()
