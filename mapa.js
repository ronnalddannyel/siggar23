  // Icones 

  var whiteIcon = new L.Icon({
    iconSize: [35, 35],
    iconAnchor: [18, 27],
    popupAnchor:  [1, -24],
    iconUrl: 'leaflet/images/pin-de-localizacao.png'
  });

  var fogo = new L.Icon({
    iconSize: [17, 17],
    iconAnchor: [9, 14],
    popupAnchor:  [1, -24],
    iconUrl: '././leaflet/images/fogo.png'
  });

  var contFogo = new L.Icon({
    iconSize: [27, 27],
    iconAnchor: [12, 20],
    popupAnchor:  [1, -24],
    iconUrl: '././leaflet/images/symbole-de-feu-rouge.png'
  });

var redIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-vermelho.png'
});

var blueIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-azul.png'
});

var blueIcon1 = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-azul1.png'
});

var blueIcon2 = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-azul3.png'
});

var MarromIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-marrom.png'
});

var AmareloIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-amarelo.png'
});

var Amarelo1Icon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-amarelo1.png'
});

var CinzaIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-cinza.png'
});

var Marrom1Icon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-marrom1.png'
});

var RoxoIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-roxo.png'
});

var VerdeIcon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-verde.png'
});

var Vermelho1Icon = new L.Icon({
  iconSize: [35, 35],
  iconAnchor: [18, 27],
  popupAnchor:  [1, -24],
  iconUrl: '././leaflet/images/pin-de-localizacao-vermelho1.png'
});

if(window.screen.width > "500"){

  var latit = 1.80054;
  var long = -61.4714;
  var zm = 7;
  var map = L.map(document.getElementById('map'), {
    center: [latit, long],
    zoom: zm,
    zoomControl: false,
    layers: [googleTerrain]
  });

  // Latitude e Longitude

  var coordDIV = document.createElement('div');
  coordDIV.id = 'mapCoordDIV';
  coordDIV.style.position = 'absolute';
  coordDIV.style.bottom = '2%';
  coordDIV.style.left = '45%';
  coordDIV.style.zIndex = '900';
  coordDIV.style.backgroundColor = '#fff';
  coordDIV.style.fontSize = '15px';
  coordDIV.style.width = '310px';
  coordDIV.style.textAlign = 'center';
  coordDIV.style.borderRadius = '7px';

  document.getElementById('map').appendChild(coordDIV);


  map.on('mousemove', function(e){
    var lat = e.latlng.lat.toFixed(6);
    var lon = e.latlng.lng.toFixed(6);
    document.getElementById('mapCoordDIV').innerHTML ='Latitude: ' + lat + ' / Longitude: ' + lon;
  });

  // Controlador do zoom

  var zoom_bar = new L.Control.ZoomBar({position: 'topright'}).addTo(map);

}else{

  var latit = -0.50;
  var long = -61.4714;
  var zm = 6;
  var map = L.map(document.getElementById('map'), {
    center: [latit, long],
    zoom: zm,
    zoomControl: false,
    layers: [googleTerrain]
  });

  L.control.zoom({
    position: 'topright'
  }).addTo(map);

    // Latitude e Longitude

    var coordDIV = document.createElement('div');
    coordDIV.id = 'mapCoordDIV';
    coordDIV.style.position = 'absolute';
    coordDIV.style.bottom = '2%';
    coordDIV.style.left = '25%';
    coordDIV.style.zIndex = '900';
    coordDIV.style.backgroundColor = '#fff';
    coordDIV.style.fontSize = '10px';
    coordDIV.style.width = '210px';
    coordDIV.style.textAlign = 'center';
    coordDIV.style.borderRadius = '7px';
  
    document.getElementById('map').appendChild(coordDIV);
  
  
    map.on('mousemove', function(e){
      var lat = e.latlng.lat.toFixed(6);
      var lon = e.latlng.lng.toFixed(6);
      document.getElementById('mapCoordDIV').innerHTML ='Latitude: ' + lat + ' / Longitude: ' + lon;
    });

}

// Barra de escala

var graphicScale = L.control.graphicScale({
position: 'bottomright',
doubleLine: false,
fill: 'fill',
    showSubunits: false
}).addTo(map);

map.attributionControl.addAttribution('©<a href="https://www.planet.com/" target="_blank"> Planet</a>');


// Barra de opções

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  position: 'topright',
  draw: {
    polygon: {
      shapeOptions: {
        color: 'purple'
      },
      allowIntersection: false,
      drawError: {
        color: 'orange',
        timeout: 1000
      },
      showArea: true,
      metric: true,
      repeatMode: true
    },
    polyline: {
      shapeOptions: {
        color: '#4B0082'
      },
    },
    rectangle: {
      shapeOptions: {
        color: 'green'
      },
    },
    circle: {
      shapeOptions: {
        color: 'steelblue'
      },
    },
    marker: {
      icon: blueIcon
    },
  },
  edit: {
    featureGroup: drawnItems
  }
});
map.addControl(drawControl);

map.on('draw:created', function (e) {
  var type = e.layerType,
    layer = e.layer;


// Use $.when() para esperar o carregamento de todas as requisições AJAX
$.when(
      
  $.getJSON(UrlFemarh + "/siggarr/mapas/zonas/zona20n.geojson", function(data) {
    zona20N = data.features[0];
  }),

  $.getJSON(UrlFemarh+"/siggarr/mapas/zonas/zona21n.geojson", function(data) {  
    zona21N = data.features[0];
  }),

  $.getJSON(UrlFemarh+"/siggarr/mapas/zonas/zona20s.geojson", function(data) {  
    zona20S = data.features[0];
  })



).then(function() {

var centroid = turf.centroid(layer.toGeoJSON());
  
  var zone20N = turf.booleanWithin(centroid, zona20N);
  var zone21N = turf.booleanWithin(centroid, zona21N);
  var zone20S = turf.booleanWithin(centroid, zona20S);


    proj4.defs('EPSG:31974', '+proj=utm +zone=20 +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
    proj4.defs('EPSG:31975', '+proj=utm +zone=21 +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
    proj4.defs('EPSG:31980', '+proj=utm +zone=20+south +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
  
    if(zone20N == true){

      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31974", coord);
      });

      console.log('Zona: 20N');

    }else if(zone21N == true){

      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31975", coord);
      });

      console.log('Zona: 21N');

    }else if(zone20S == true){

      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31980", coord);
      });

      console.log('Zona: 20S');

    }

    // Calcular a área
    var area6 = calculateArea(utmCoords)/10000;

    console.log(area6);





    if (type === 'marker') {
      layer.bindPopup('Latitude/Longitude: ' + layer.getLatLng()).openPopup();
    }else if (type === 'polygon') {
      layer.bindPopup('Área: ' + area6.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " ha.");
    }else if (type === 'polyline') {
      var distancia = turf.length(layer.toGeoJSON());
      layer.bindPopup('Comprimento: ' + distancia.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " km");
    }else if (type === 'rectangle') {
      var area1 = turf.area(layer.toGeoJSON()) / 10000;
      layer.bindPopup('Área: ' + area1.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " ha.");
    }

  drawnItems.addLayer(layer);

  layer.on("edit", function(event) {


    if(zone20N == true){
  
      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31974", coord);
      });

      console.log('Zona: 20N');

    }else if(zone21N == true){

      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31975", coord);
      });

      console.log('Zona: 21N');

    }else if(zone20S == true){

      // Faça a conversão das coordenadas para UTM.
      var utmCoords = layer.toGeoJSON().geometry.coordinates[0].map(function(coord) {
        return proj4("EPSG:4326", "EPSG:31980", coord);
      });

      console.log('Zona: 20S');

    }

    var area6 = calculateArea(utmCoords)/10000;

    if (type === 'polygon') {
      layer.bindPopup('Área: ' + area6.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " ha.");
    }else if (type === 'polyline') {
      var distancia = turf.length(layer.toGeoJSON());
      layer.bindPopup('Comprimento: ' + distancia.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " km");
    }else if (type === 'rectangle') {
      var area1 = turf.area(layer.toGeoJSON()) / 10000;
      layer.bindPopup('Área: ' + area1.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4}) + " ha.");
    }
  });

  layer.on("move", function(event) {
    if (type === 'marker') {
      layer.bindPopup('Latitude/Longitude: ' + layer.getLatLng());
    }
  });

})
});






// Função para calcular a área de um polígono usando o método de Shoelace
function calculateArea(coordinates) {
  var area = 0;
  var length = coordinates.length;

  for (var i = 0; i < length; i++) {
      var j = (i + 1) % length;
      area += coordinates[i][0] * coordinates[j][1];
      area -= coordinates[j][0] * coordinates[i][1];
  }

  area = Math.abs(area) / 2;
  return area;
}





var stateChangingButton = L.easyButton({
  states: [{
          stateName: 'zoom-to-forest',        // name the state
          icon:      'bi bi-save',               // and define its properties
          title:     'Salvar (Json)',
          // like its title
          onClick: function(btn, map) {       // and its callback
            salvar();
          }
      }]
}).addTo(map);

var printMap = L.easyPrint({
  tileLayer: googleTerrain,
  sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
  filename: 'myMap',
  exportOnly: true,
  hideControlContainer: true,
  position: 'topright'
}).addTo(map);


var overlayMaps = {};
var layerControl = L.control.layers(null, overlayMaps, {collapsed: false}).addTo(map);


function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}