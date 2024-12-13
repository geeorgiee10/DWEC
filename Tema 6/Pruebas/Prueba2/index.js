var contenedor;
var buscador;

window.onload = function () {
    contenedor = document.getElementById("container");
    buscador = document.getElementById("buscar");

    let btnBuscar = document.getElementById("btnBuscar");

    btnBuscar.addEventListener("click", peticionModerna);
}

function peticionModerna() {
    fetch("https://api.escuelajs.co/api/v1/products/" + buscador.value, { method: "GET" })
    .then((res) => res.json())
    .then((producto) => {
        contenedor.innerHTML = "";

        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.textContent = producto.title;

        let li2;
        producto.images.forEach((image) => {
            li2 = document.createElement("img");
            li2.src = image;
            li2.alt = producto.title || "Imagen del producto";
            li2.style.maxWidth = "200px"; 
            ul.appendChild(li2);
        });

        ul.appendChild(li);
        contenedor.appendChild(ul);
    })
    .catch((err) => {
        console.log("error:", err);
        contenedor.innerHTML = "Hubo un error al cargar el producto.";
    });
}

