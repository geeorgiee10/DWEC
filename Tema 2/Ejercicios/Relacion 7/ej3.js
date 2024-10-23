const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]), 
      zoom: 2, // Zoom inicial
    })
  });

  const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      src: 'https://openlayers.org/en/latest/examples/data/icon.png',
    }),
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const coords = [position.coords.longitude, position.coords.latitude];
      const projectedCoords = ol.proj.fromLonLat(coords);


      const markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            new ol.Feature({
              geometry: new ol.geom.Point(projectedCoords),
            })
          ]
        }),
        style: markerStyle
      });


      map.addLayer(markerLayer);


      map.getView().setCenter(projectedCoords);
    }, function(error) {
      console.error('Error al obtener la geolocalización: ', error);
    });
  } else {
    console.error('Geolocation no es soportada por este navegador.');
  }