function toggoleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag da img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    // se não tiver, manter a img normal
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
