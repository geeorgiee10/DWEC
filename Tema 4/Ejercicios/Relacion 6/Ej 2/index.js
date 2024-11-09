window.onload = function () {

    let nombUsu = document.getElementById("usuario");
    let contenedor = document.getElementById("container");
    let validar = document.getElementById("validacion");
    let mensaje = document.getElementById("mensaje");
    let btnCrear = document.getElementById("crear");
    let btnBorrar = document.getElementById("borrar");

    let colorFondo = document.getElementById("colorFondo");
    let colorTexto = document.getElementById("colorTexto");
    let tamanoLetra = document.getElementById("tamanoLetra");

    function getCookie(name) {
        let cookieArr = document.cookie.split("; ");
        let cookie = cookieArr.find(row => row.startsWith(name));
        return cookie ? cookie.split("=")[1] : null;
    }

    if (document.cookie === "") {
        contenedor.style.display = "flex";

        function usuarios(string) {
            return string.match(/^[\wÀ-ÿÑñ\s]+$/) ? true : false;
        }

        nombUsu.addEventListener("blur", () => {
            if (!usuarios(nombUsu.value)) {
                validar.innerHTML = "El nombre de usuario tiene un formato incorrecto";
            } else {
                validar.innerHTML = "";
            }
        });

        btnCrear.addEventListener("click", () => {
            if (usuarios(nombUsu.value)) {
                let nombreUsuario = nombUsu.value;
                let caduca = new Date();
                caduca.setTime(caduca.getTime() + (5 * 60 * 1000));  // Expira en 5 minutos
                let expiracion = "expires=" + caduca.toUTCString();

                document.cookie = `nombreUsuario=${encodeURIComponent(nombreUsuario)}; ${expiracion}; path=/`;

                let config = {
                    colorFondo: colorFondo.value,
                    colorTexto: colorTexto.value,
                    tamanoLetra: tamanoLetra.value
                };
                document.cookie = `configuracion=${encodeURIComponent(JSON.stringify(config))}; ${expiracion}; path=/`;

                contenedor.style.display = "none";
                mensaje.innerHTML = `Buenas: ${decodeURIComponent(nombreUsuario)}`;

                applyStyles();
            }
        });

        btnBorrar.addEventListener("click", () => {
            document.cookie = `nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            document.cookie = `configuracion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            mensaje.innerHTML = "La cookie ha sido borrada.";

            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            document.body.style.fontSize = "16px";
        });

    } else {
        let usuarioCookie = getCookie("nombreUsuario");
        if (usuarioCookie) {
            mensaje.innerHTML = `Buenas: ${decodeURIComponent(usuarioCookie)}`;
            applyStyles();
        }

        btnBorrar.addEventListener("click", () => {
            document.cookie = `nombreUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            document.cookie = `configuracion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            mensaje.innerHTML = "La cookie ha sido borrada.";

            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            document.body.style.fontSize = "16px";
        });
    }

    function applyStyles() {
        let configCookie = getCookie("configuracion");
        if (configCookie) {
            let config = JSON.parse(decodeURIComponent(configCookie));

            document.body.style.backgroundColor = config.colorFondo || "#ffffff";
            document.body.style.color = config.colorTexto || "#000000";
            document.body.style.fontSize = config.tamanoLetra + "px";

            colorFondo.value = config.colorFondo || "#ffffff";
            colorTexto.value = config.colorTexto || "#000000";
            tamanoLetra.value = config.tamanoLetra || "16";
        }

        colorFondo.addEventListener("input", updateConfig);
        colorTexto.addEventListener("input", updateConfig);
        tamanoLetra.addEventListener("input", updateConfig);

        function updateConfig() {
            let config = {
                colorFondo: colorFondo.value,
                colorTexto: colorTexto.value,
                tamanoLetra: tamanoLetra.value
            };
            let caduca = new Date();
            caduca.setTime(caduca.getTime() + (5 * 60 * 1000));
            let expiracion = "expires=" + caduca.toUTCString();
            document.cookie = `configuracion=${encodeURIComponent(JSON.stringify(config))}; ${expiracion}; path=/`;
        }
    }
}
