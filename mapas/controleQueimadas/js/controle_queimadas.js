// Focos de Queimadas - Código em tempo real

var groupLayControleQueimada = L.markerClusterGroup();

var groupLayControleQueimada1 = L.layerGroup([]);


function controleQueimadas(el){

  groupLayControleQueimada1.clearLayers();

  $.getJSON(UrlFemarh+"/siggarr/mapas/controleQueimadas/controle_queimadas.geojson", function(data) {  

    var cont = 0;
  
  var controleQueimada = L.geoJson(data, {
    filter: function (features) {
      var date = new Date(features.properties.data_i);
      
        if(date.getUTCFullYear() == '2023'){
          cont++;
          return true;
        }
    },
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: contFogo})
    },
    onEachFeature: function (geom, layer) {

      if(geom.properties.fk_municip == 1){
        var Municipio = 'ALTO ALEGRE';
      }else if(geom.properties.fk_municip == 2){
        var Municipio = 'AMAJARI';
      }else if(geom.properties.fk_municip == 3){
        var Municipio = 'BOA VISTA';
      }else if(geom.properties.fk_municip == 4){
        var Municipio = 'BONFIM';
      }else if(geom.properties.fk_municip == 5){
        var Municipio = 'CANTÁ';
      }else if(geom.properties.fk_municip == 6){
        var Municipio = 'CARACARAÍ';
      }else if(geom.properties.fk_municip == 7){
        var Municipio = 'CAROEBE';
      }else if(geom.properties.fk_municip == 8){
        var Municipio = 'IRACEMA';
      }else if(geom.properties.fk_municip == 9){
        var Municipio = 'MUCAJAÍ';
      }else if(geom.properties.fk_municip == 10){
        var Municipio = 'NORMANDIA';
      }else if(geom.properties.fk_municip == 11){
        var Municipio = 'PACARAIMA';
      }else if(geom.properties.fk_municip == 12){
        var Municipio = 'RORAINÓPOLIS';
      }else if(geom.properties.fk_municip == 13){
        var Municipio = 'SÃO JOÃO DA BALIZA';
      }else if(geom.properties.fk_municip == 14){
        var Municipio = 'SÃO LUIZ';
      }else if(geom.properties.fk_municip == 15){
        var Municipio = 'UIRAMUTÃ';
      }else{
          var Municipio = geom.properties.fk_municip;
      }


      layer.bindPopup('<h6><b>Área Licenciada para Uso do Fogo - 2023</b></h6><p><b>Denominação:</b> '+geom.properties.denomina+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Município:</b> '+Municipio+'<br><b>Instituição:</b> '+geom.properties.instituto+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Atividade da Queimada:</b> '+geom.properties.atividade+'<br><b>Área Licenciada:</b> '+geom.properties.area_lic.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Data Final:</b> '+geom.properties.data_f+'<br><b>Data Início:</b> '+geom.properties.data_i+'<br><b>Número de Autorização:</b> '+geom.properties.n_auto+'<br><b>N° do Processo (SEI):</b> '+geom.properties.proces_sei+'</p>');
    },
    });
    groupLayControleQueimada.clearLayers();
    groupLayControleQueimada.addLayer(controleQueimada);
    groupLayControleQueimada1.addLayer(controleQueimada);

    // Controle de Queimadas


    var quei12 = document.getElementById("teste59");

    if(quei12.style.display === "block"){
      var quei1Html = '<img src="leaflet/images/symbole-de-feu-rouge.png" style="max-width:20px;max-height:20px"> Área Licenciada para Uso do Fogo - 2023 ('+cont+')';
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




  // Focos de Queimadas - Código em tempo real

var groupLayControleQueimada2 = L.markerClusterGroup();

var groupLayControleQueimada3 = L.layerGroup([]);


function controleQueimadas2(el){

  groupLayControleQueimada3.clearLayers();

  $.getJSON(UrlFemarh+"/siggarr/mapas/controleQueimadas/controle_queimadas.geojson", function(data) {  

    var cont = 0;
  
  var controleQueimada = L.geoJson(data, {
    filter: function (features) {
      var date = new Date(features.properties.data_i);
      
        if(date.getUTCFullYear() == '2024'){
          cont++;
          return true;
        }
    },
    pointToLayer: function (geom, latlng) {
      return L.marker(latlng, {icon: contFogo})
    },
    onEachFeature: function (geom, layer) {

      if(geom.properties.fk_municip == 1){
        var Municipio = 'ALTO ALEGRE';
      }else if(geom.properties.fk_municip == 2){
        var Municipio = 'AMAJARI';
      }else if(geom.properties.fk_municip == 3){
        var Municipio = 'BOA VISTA';
      }else if(geom.properties.fk_municip == 4){
        var Municipio = 'BONFIM';
      }else if(geom.properties.fk_municip == 5){
        var Municipio = 'CANTÁ';
      }else if(geom.properties.fk_municip == 6){
        var Municipio = 'CARACARAÍ';
      }else if(geom.properties.fk_municip == 7){
        var Municipio = 'CAROEBE';
      }else if(geom.properties.fk_municip == 8){
        var Municipio = 'IRACEMA';
      }else if(geom.properties.fk_municip == 9){
        var Municipio = 'MUCAJAÍ';
      }else if(geom.properties.fk_municip == 10){
        var Municipio = 'NORMANDIA';
      }else if(geom.properties.fk_municip == 11){
        var Municipio = 'PACARAIMA';
      }else if(geom.properties.fk_municip == 12){
        var Municipio = 'RORAINÓPOLIS';
      }else if(geom.properties.fk_municip == 13){
        var Municipio = 'SÃO JOÃO DA BALIZA';
      }else if(geom.properties.fk_municip == 14){
        var Municipio = 'SÃO LUIZ';
      }else if(geom.properties.fk_municip == 15){
        var Municipio = 'UIRAMUTÃ';
      }else{
          var Municipio = geom.properties.fk_municip;
      }





      layer.bindPopup('<h6><b>Área Licenciada para Uso do Fogo - 2024</b></h6><p><b>Denominação:</b> '+geom.properties.denomina+'<br><b>Endereço:</b> '+geom.properties.endereco+'<br><b>Município:</b> '+Municipio+'<br><b>Instituição:</b> '+geom.properties.instituto+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Atividade da Queimada:</b> '+geom.properties.atividade+'<br><b>Área Licenciada:</b> '+geom.properties.area_lic.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Data Final:</b> '+geom.properties.data_f+'<br><b>Data Início:</b> '+geom.properties.data_i+'<br><b>Número de Autorização:</b> '+geom.properties.n_auto+'<br><b>N° do Processo (SEI):</b> '+geom.properties.proces_sei+'</p>');
    },
    });
    groupLayControleQueimada2.clearLayers();
    groupLayControleQueimada2.addLayer(controleQueimada);
    groupLayControleQueimada3.addLayer(controleQueimada);

    // Controle de Queimadas


    var quei12 = document.getElementById("teste63");

    if(quei12.style.display === "block"){
      var quei1Html = '<img src="leaflet/images/symbole-de-feu-rouge.png" style="max-width:20px;max-height:20px"> Área Licenciada para Uso do Fogo - 2024 ('+cont+')';
      var quei2Html = '<div class="form-check form-switch" style="float: right;margin-left: 20px;">';
      var quei3Html = '<input type="checkbox" class="form-check-input" role="switch" value="l" onclick="controleQueimadas3()" id="ContrQueim">';
      var quei4Html = '</div>';
      var queiHtml = quei1Html+quei2Html+quei3Html+quei4Html;
      quei12.innerHTML += queiHtml;
    }else{
      quei12.innerHTML = "";
    }
  })

      if(map.hasLayer(groupLayControleQueimada2) || map.hasLayer(groupLayControleQueimada3)){
        map.removeLayer(groupLayControleQueimada2);
        map.removeLayer(groupLayControleQueimada3);
        document.getElementById('ContrQueim').checked = false;
        }
        else {
        map.addLayer(groupLayControleQueimada2);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        }
        legMostra(); 



    
  }


  function controleQueimadas3(){


    if(map.hasLayer(groupLayControleQueimada2)){
      map.removeLayer(groupLayControleQueimada2);
      map.addLayer(groupLayControleQueimada3);
    }
    else {
      map.removeLayer(groupLayControleQueimada3);
      map.addLayer(groupLayControleQueimada2);
    }
    
  }