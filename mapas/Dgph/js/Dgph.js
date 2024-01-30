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
      layer.bindPopup('<h6><b>Qualidade da Água</b></h6><p><b>Identificação:</b> '+geom.properties.Identifica+'<br><b>Código Estação:</b> '+geom.properties.cod_estac+'/ANA<br><b>UF:</b> '+geom.properties.uf+'<br><b>Código Estado:</b> '+geom.properties.cod_estad+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Altitude (Metros):</b> '+geom.properties.altitude+'<br><b>Tipo Estação Aquática:</b> '+geom.properties.tipo_et_aq+'<br><b>Tipo Rede Aquática:</b> '+geom.properties.tipo_rd_aq+'<br><b>Descrição do Ponto de Monitoramento:</b> '+geom.properties.desc_p_mon+'<br><b>Entedidade Responsável:</b> '+geom.properties.ent_resp+'<br><b>Corpo DÁgua:</b> '+geom.properties.corp_agua+'<br><b>Ambiente:</b> '+geom.properties.ambiental+'</p>');
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