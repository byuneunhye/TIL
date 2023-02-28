const backColor = document.querySelector("body");

function handleCol() {
  if (innerWidth < 500) backColor.style.backgroundColor = "blue";
  else if (innerWidth >= 500 && innerWidth <= 800)
    backColor.style.backgroundColor = "purple";
  else backColor.style.backgroundColor = "yellow";
}

window.addEventListener("resize", handleCol);
