// Qualidade da água

var groupLayQa = L.layerGroup([]);
function qa1(el){
  groupLayQa.clearLayers();
  $.getJSON(UrlFemarh+"/siggarr/mapas/Dgph/qa.geojson", function(data) {  
  var qa = L.geoJson(data, { 
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: blueIcon})
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Qualidade da Água</b></h6><p><b>Estação RR:</b> '+geom.properties.estacao_rr+'<br><b>Código Estação:</b> '+geom.properties.cd_estacao+'/ANA<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Nome da Estação:</b> '+geom.properties.est_nome+'<br><b>Latitude:</b> '+geom.properties.lat_dec+'<br><b>Longitude:</b> '+geom.properties.long_dec+'<br><b>Altitude (Metros):</b> '+geom.properties.altitude+'<br><b>Descrição do Ponto de Monitoramento:</b> '+geom.properties.descricao+'<br><b>Entedidade Responsável:</b> '+geom.properties.entid_resp+'<br><b>Corpo DÁgua:</b> '+geom.properties.corp_dagua+'<br><b>Ambiente:</b> '+geom.properties.ambiente+'</p>'+'<br><button type="button" onclick="test7('+geom.properties.cd_estacao+')" id="qaHist" value="" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" >Detalhes</button>');
    },
    });

    groupLayQa.addLayer(qa);

    // Qualidade da Água

    var Qa12 = document.getElementById("teste61");
    if(Qa12.style.display === "block"){
      QaHtml = '<img src="leaflet/images/pin-de-localizacao-azul.png" style="max-width:20px;max-height:20px;"> Qualidade da Água ('+data.totalFeatures+')';
      Qa12.innerHTML += QaHtml;
    }else{
      Qa12.innerHTML = "";
    }
    
  })

  if(map.hasLayer(groupLayQa)){
    map.removeLayer(groupLayQa);
    }
    else {
    map.addLayer(groupLayQa);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    }
    legMostra();
    
  }



  // Estações Telemétricas

var groupLayEstacao_met = L.layerGroup([]);
function Estacao_met1(el){
  groupLayEstacao_met.clearLayers();
  $.getJSON(UrlFemarh+"/siggarr/mapas/Dgph/estacao_met.geojson", function(data) {  
  var Estacao_met = L.geoJson(data, { 
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: redIcon})
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Estações Telemétricas</b></h6><p><b>Código Estação:</b> '+geom.properties.cod_est+'/ANA/CPRM<br><b>Nome da Estação Telemétrica:</b> '+geom.properties.est_tel+'<br><b>Estação de Alerta:</b> '+geom.properties.est_alert+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Estado:</b> '+geom.properties.estado+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'</p>');
    },
    });

    groupLayEstacao_met.addLayer(Estacao_met);

    // Estações Telemétricas

    var Estacao_met12 = document.getElementById("teste62");
    if(Estacao_met12.style.display === "block"){
      Estacao_metHtml = '<img src="leaflet/images/pin-de-localizacao-vermelho.png" style="max-width:20px;max-height:20px"> Estações Telemétricas ('+data.totalFeatures+')';
      Estacao_met12.innerHTML += Estacao_metHtml;
    }else{
      Estacao_met12.innerHTML = "";
    }
    
  })

  if(map.hasLayer(groupLayEstacao_met)){
    map.removeLayer(groupLayEstacao_met);
    }
    else {
    map.addLayer(groupLayEstacao_met);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    }
    legMostra();
    
  }