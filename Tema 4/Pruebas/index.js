function randomizar(n){
    return Math.floor(Math.random() * (n +1));
}
const boton = document.querySelector("button");

boton.addEventListener("click" , () => {
    const colorFondo = `rgb(${randomizar(255)} ${randomizar(255)} ${randomizar(255)})`;
    document.body.style.backgroundColor = colorFondo;

});