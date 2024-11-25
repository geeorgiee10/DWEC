window.onload = function () { 
    google.charts.load('current', {'packages': ['bar']});
    google.charts.setOnLoadCallback(drawChart);

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(sectores);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Partido", "Escaños", { role: "style" }],
            ["PP", 137, "#1E88E5"],
            ["PSOE", 122, "#E53935"],
            ["Vox", 33, "#43A047"], 
            ["SUMAR", 31, "#FB8C00"],
            ["ERC", 7, "#8E24AA"], 
            ["Junts", 7, "#3949AB"],
            ["EH Bildu", 6, "#6D4C41"], 
            ["PNV", 5, "#26C6DA"],
            ["Otros", 12, "gray"] 
        ]);
        
        var options = {
            chart: {
                title: 'Resultados de las Elecciones Generales',
                subtitle: 'Distribución de escaños por partido político',
            },
            bars: 'vertical'
        };
        
        var chart = new google.charts.Bar(document.getElementById('barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    function sectores() {
        var datos = new google.visualization.DataTable();
        datos.addColumn('string', 'Partido');
        datos.addColumn('number', 'Escaños');
        var opciones = {
            title: 'Distribución de Escaños en el Congreso de los Diputados',
            width: 400,
            height: 300,
            slices: {
                0: { color: '#E53935' }, // PSOE - Rojo
                1: { color: '#1E88E5' }, // PP - Azul
                2: { color: '#43A047' }, // Vox - Verde
                3: { color: '#FB8C00' }, // Sumar - Naranja
                4: { color: '#8E24AA' }, // ERC - Morado claro
                5: { color: '#3949AB' }, // Junts - Azul oscuro
                6: { color: '#6D4C41' }, // Bildu - Marrón
                7: { color: '#26C6DA' }, // PNV - Turquesa
                8: { color: 'gray' } // Otros - Gris
            },
            animation: {
                duration: 1000, // Duración de la animación en ms
                easing: 'out' // Efecto de animación
            }
        };

        var grafico = new google.visualization.PieChart(document.getElementById('chart_div'));

        var escañosIniciales = [
            ['PSOE', 122],
            ['PP', 137],
            ['Vox', 33],
            ['Sumar', 31],
            ['ERC', 7],
            ['Junts', 7],
            ['Bildu', 6],
            ['PNV', 5],
            ['Otros', 12]
        ];

        var escañosAlternativos = [
            ['PSOE', 130],
            ['PP', 120],
            ['Vox', 40],
            ['Sumar', 20],
            ['ERC', 10],
            ['Junts', 5],
            ['Bildu', 8],
            ['PNV', 4],
            ['Otros', 10]
        ];

        var alternar = false;

        function actualizarDatos() {
            alternar = !alternar; 
            var nuevosDatos = alternar ? escañosAlternativos : escañosIniciales;
            datos.removeRows(0, datos.getNumberOfRows()); 
            datos.addRows(nuevosDatos); 
            grafico.draw(datos, opciones); 
        }

        datos.addRows(escañosIniciales);
        grafico.draw(datos, opciones);

        setInterval(actualizarDatos, 10000);
    }
};
