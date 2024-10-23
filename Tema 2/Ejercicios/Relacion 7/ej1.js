let latAnterior = null;
let lonAnterior = null;
let distanciaTotal = 0;

function localizacion(pos){
    if(navigator.geolocation){//1.1
        const latActual = pos.coords.latitude;
        const lonActual = pos.coords.longitude;
        document.write("Longitud: " + lonActual + "<br>") ;//1.2
        document.write("Latitud: " + latActual + "<br>");//1.2

        if (latAnterior !== null && lonAnterior !== null) {
            const distanciaRecorrida = calcularDistancia(latAnterior, lonAnterior, latActual, lonActual);
            
            document.write("Distancia recorrida: " + distanciaRecorrida.toFixed(2) + " km<br>");
        }

        latAnterior = latActual;
        lonAnterior = lonActual;
    }
}

function errores (error){//1.3
    switch(error.code){
        case error.TIMEOUT:
            document.write("Tiempo de carga excedido");
            break;
        case error.PERMISSION_DENIED:
            document.write("Permiso denegado");
            break;
        case error.POSITION_UNAVAILABLE:
            document.write("No se puede obtener la ubucación");
            break;
    }
}

//navigator.geolocation.getCurrentPosition(localizacion,errores);

//1.4
navigator.geolocation.watchPosition(localizacion,errores);

//1.5

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = gradosARadianes(lat2 - lat1);
    const dLon = gradosARadianes(lon2 - lon1);
    

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(gradosARadianes(lat1)) * Math.cos(gradosARadianes(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;
    return distancia;
}

function gradosARadianes(grados) {
    return grados * (Math.PI / 180);
}

