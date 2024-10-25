const imagen = document.querySelector("img");
  let arrastrando = false;

  
  imagen.addEventListener("click", (e) => {
    arrastrando = !arrastrando;
    mouseX = e.clientX - imagen.getBoundingClientRect().left;
    mouseY = e.clientY - imagen.getBoundingClientRect().top;
    if (arrastrando) {
        document.addEventListener("mousemove", moverImagen); 
    } 
    else {
      document.removeEventListener("mousemove", moverImagen); 
    }
  });

  function moverImagen(evento) {
    imagen.style.left = (evento.clientX - mouseX) + "px";
    imagen.style.top = (evento.clientY - mouseY) + "px";
  }