const imagenes = document.getElementsByTagName("img");
  

  for(let i = 0; i < imagen.length; i++){
    let arrastrando = false;
    let imagen = imagenes[i];
    
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
}