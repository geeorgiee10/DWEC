

function posRaton(e) {
  console.log("Posicion x: " + e.x);
  console.log("Posicion y: " + e.y);
}

document.addEventListener("mousemove", posRaton);