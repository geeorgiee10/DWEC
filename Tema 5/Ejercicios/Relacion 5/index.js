let listaNotas = [];

window.onload = function () {
    let crear = document.getElementById("crearNota");
    let contenedor = document.getElementById("notaContainer");

    crear.addEventListener("click", () => {
        crearNota();
    });

    const notasGuardadas = JSON.parse(localStorage.getItem('listaNotas')) || [];
    notasGuardadas.forEach(notaGuardada => {
        crearNota(notaGuardada); 
    });

    function crearNota(datos = null) {
        const nota = document.createElement('div');
        nota.classList.add('nota');
        nota.setAttribute('draggable', true);

        const notaID = datos?.id || 'nota_' + new Date().getTime();
        const fechaCreacion = datos?.fechaCreacion || new Date().getTime();
        nota.setAttribute('id', notaID);

        // Aplicar las posiciones guardadas
        if (datos) {
            nota.style.position = 'absolute';
            nota.style.top = `${datos.top}px`;
            nota.style.left = `${datos.left}px`;
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('borrar');

        const titulo = document.createElement('input');
        titulo.placeholder = 'Escribe aquí el título';
        titulo.classList.add('tituloNota');
        titulo.value = datos?.titulo || '';

        const texto = document.createElement('textarea');
        texto.placeholder = 'Escribe aquí la nota';
        texto.classList.add('textoNota');
        texto.value = datos?.texto || '';

        const tiempoTranscurrido = document.createElement('div');
        tiempoTranscurrido.classList.add('tiempoTranscurrido');

        const intervalo = setInterval(() => {
            const ahora = new Date();
            const diferencia = Math.floor((ahora - fechaCreacion) / 1000);
            tiempoTranscurrido.textContent = calcularTiempo(diferencia);
        }, 1000);

        deleteButton.addEventListener('click', () => {
            clearInterval(intervalo);
            deleteItem(nota);
        });

        nota.appendChild(deleteButton);
        nota.appendChild(titulo);
        nota.appendChild(texto);
        nota.appendChild(tiempoTranscurrido);

        contenedor.appendChild(nota);

        if (!datos) {
            listaNotas.push({
                id: notaID,
                titulo: titulo.value,
                texto: texto.value,
                top: 0,
                left: 0,
                fechaCreacion: fechaCreacion
            });
            almacenar();
        }

        titulo.addEventListener('input', () => {
            const notaIndex = listaNotas.findIndex(nota => nota.id === notaID);
            if (notaIndex !== -1) {
                listaNotas[notaIndex].titulo = titulo.value;
                almacenar();
            }
        });

        texto.addEventListener('input', () => {
            const notaIndex = listaNotas.findIndex(nota => nota.id === notaID);
            if (notaIndex !== -1) {
                listaNotas[notaIndex].texto = texto.value;
                almacenar();
            }
        });

        nota.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', notaID);
        });

        contenedor.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        contenedor.addEventListener('drop', (event) => {
            event.preventDefault();
            const elementoMoverID = event.dataTransfer.getData('text');
            const elementoMover = document.getElementById(elementoMoverID);

            const left = event.clientX - elementoMover.offsetWidth / 2;
            const top = event.clientY - elementoMover.offsetHeight / 2;

            elementoMover.style.position = 'absolute';
            elementoMover.style.left = `${left}px`;
            elementoMover.style.top = `${top}px`;

            const notaIndex = listaNotas.findIndex(nota => nota.id === elementoMoverID);
            if (notaIndex !== -1) {
                listaNotas[notaIndex].top = top;
                listaNotas[notaIndex].left = left;
            }
            almacenar();
        });
    }

    function calcularTiempo(diferencia) {
        if (diferencia < 60) {
            return `Creado hace ${diferencia} segundos`;
        } 
        else if (diferencia < 3600) {
            const minutos = Math.floor(diferencia / 60);
            const segundos = diferencia % 60;
            return `Creado hace ${minutos} minutos y ${segundos} segundos`;
        } 
        else if (diferencia < 86400) {
            const horas = Math.floor(diferencia / 3600);
            const minutos = Math.floor((diferencia % 3600) / 60);
            return `Creado hace ${horas} horas y ${minutos} minutos`;
        } 
        else {
            const dias = Math.floor(diferencia / 86400);
            const horas = Math.floor((diferencia % 86400) / 3600);
            return `Creado hace ${dias} días y ${horas} horas`;
        }
    }

    function deleteItem(nota) {
        const notaID = nota.id;
        listaNotas = listaNotas.filter(nota => nota.id !== notaID);
        contenedor.removeChild(nota);
        almacenar();
    }

    function almacenar() {
        localStorage.setItem('listaNotas', JSON.stringify(listaNotas));
    }
};
