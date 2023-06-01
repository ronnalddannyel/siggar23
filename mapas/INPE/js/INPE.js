
// Focos de Queimadas - Código local


/*
  var queimada = L.geoJSON(queima, 
  {
    pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: fogo})
        },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Focos de Queimadas</b></h6><p><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Dias sem Chuva:</b> '+geom.properties.numero_dias_sem_chuva+'<br><b>Precipitação:</b> '+geom.properties.precipitacao+'<br><b>Risco de Fogo:</b> '+geom.properties.risco_fogo+'<br><b>Bioma:</b> '+geom.properties.bioma+'</p>');
    },
  });

  function queimadas(el){
        if(map.hasLayer(queimada)){
          map.removeLayer(queimada);
          }
          else {
          map.addLayer(queimada);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
        }

*/


// Focos de Queimadas - Código em tempo real

var groupLayQueimada = L.layerGroup([]);
function queimadas(el){
  groupLayQueimada.clearLayers();
  $.getJSON("https://queimadas.dgi.inpe.br/home/download?id=focos_brasil_rr&time=48h&outputFormat=json&utm_source=landing-page&utm_medium=landing-page&utm_campaign=dados-abertos&utm_content=focos_brasil_rr_48h", function(data) {  
  
  var queimada = L.geoJson(data, { 
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: fogo})
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Focos de Queimadas</b></h6><p><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Dias sem Chuva:</b> '+geom.properties.numero_dias_sem_chuva+'<br><b>Precipitação:</b> '+geom.properties.precipitacao+'<br><b>Risco de Fogo:</b> '+geom.properties.risco_fogo+'<br><b>Bioma:</b> '+geom.properties.bioma+'</p>');
    },
    });

    groupLayQueimada.addLayer(queimada);

    // Focos de Queimadas

    var quei12 = document.getElementById("teste25");
    if(quei12.style.display === "block"){
      queiHtml = '<img src="leaflet/images/fogo.png" style="max-width:20px;max-height:20px"> Focos de Queimadas ('+data.totalFeatures+')';
      quei12.innerHTML += queiHtml;
    }else{
      quei12.innerHTML = "";
    }
    
  })

  if(map.hasLayer(groupLayQueimada)){
    map.removeLayer(groupLayQueimada);
    }
    else {
    map.addLayer(groupLayQueimada);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    }
    
    
  }