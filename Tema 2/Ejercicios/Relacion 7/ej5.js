if (navigator.geolocation) {
    var map = L.map('map').setView([0, 0], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var coordinates = []; // Array para almacenar las coordenadas de los marcadores
        var polyline = L.polyline([], { color: 'red' }).addTo(map); // Crear la polilínea
    
    navigator.geolocation.watchPosition(function(position) {

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

         map.setView([lat, lng], 16);

        var marker = L.marker([lat, lng]).addTo(map);

        console.log(lat,lng);
        
        coordinates.push([lat, lng]);

        // Actualizar la polilínea con las nuevas coordenadas
        polyline.setLatLngs(coordinates);


    });
}
else {
    alert("La geolocalización no está soportada por este navegador");
}

