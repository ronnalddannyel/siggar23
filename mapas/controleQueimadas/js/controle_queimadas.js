// Focos de Queimadas - Código em tempo real

var groupLayControleQueimada = L.markerClusterGroup();

var groupLayControleQueimada1 = L.layerGroup([]);


function controleQueimadas(el){

  groupLayControleQueimada1.clearLayers();

  $.getJSON(UrlFemarh+"/siggarr/mapas/controleQueimadas/controle_queimadas.geojson", function(data) {  
  
  var controleQueimada = L.geoJson(data, { 
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: contFogo})
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Área Licenciada para Uso do Fogo</b></h6><p><b>Denominação:</b> '+geom.properties.denomina+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Instituição:</b> '+geom.properties.instituto+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Atividade da Queimada:</b> '+geom.properties.atividade+'<br><b>Área Licenciada:</b> '+geom.properties.area_lic.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Data Final:</b> '+geom.properties.data_f+'<br><b>N° do Processo (SEI):</b> '+geom.properties.proces_sei+'</p>');
    },
    });
    groupLayControleQueimada.clearLayers();
    groupLayControleQueimada.addLayer(controleQueimada);
    groupLayControleQueimada1.addLayer(controleQueimada);

    // Controle de Queimadas


    var quei12 = document.getElementById("teste59");

    if(quei12.style.display === "block"){
      var quei1Html = '<img src="leaflet/images/symbole-de-feu-rouge.png" style="max-width:20px;max-height:20px"> Área Licenciada para Uso do Fogo ('+data.totalFeatures+')';
      var quei2Html = '<div class="form-check form-switch" style="float: right;margin-left: 20px;">';
      var quei3Html = '<input type="checkbox" class="form-check-input" role="switch" value="l" onclick="controleQueimadas1()" id="ContrQueim">';
      var quei4Html = '</div>';
      var queiHtml = quei1Html+quei2Html+quei3Html+quei4Html;
      quei12.innerHTML += queiHtml;
    }else{
      quei12.innerHTML = "";
    }
  })

      if(map.hasLayer(groupLayControleQueimada) || map.hasLayer(groupLayControleQueimada1)){
        map.removeLayer(groupLayControleQueimada);
        map.removeLayer(groupLayControleQueimada1);
        document.getElementById('ContrQueim').checked = false;
        }
        else {
        map.addLayer(groupLayControleQueimada);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        }
        legMostra(); 



    
  }


  function controleQueimadas1(){


    if(map.hasLayer(groupLayControleQueimada)){
      map.removeLayer(groupLayControleQueimada);
      map.addLayer(groupLayControleQueimada1);
    }
    else {
      map.removeLayer(groupLayControleQueimada1);
      map.addLayer(groupLayControleQueimada);
    }
    
  }