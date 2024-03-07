// Focos de Queimadas - Código em tempo real

var groupLayJufari = L.markerClusterGroup();

var groupLayJufari1 = L.layerGroup([]);


function outJufari(el){

  groupLayJufari1.clearLayers();

  var test;

  $.getJSON(UrlFemarh+"/siggarr/mapas/zee/hidrografia_ottobacias.geojson", function(data) {  
  
  var Jufari = L.geoJson(data, {
    filter: function (features) {      
        if(features.properties.regiao48 == 'RIO JUFARI'){
            test = features;
            return true;
        }
    }
    });

    $.getJSON(UrlFemarh+"/siggarr/mapas/ANA/outorgas.geojson", function(data) {
        var cont = 0;

        console.log(test);

        var pol = [];

        var pol6 = data.features;

        for(i=0; i < pol6.length; i++){
            
            var pol7 = pol6[i];
            var intersection2 = turf.booleanWithin(pol7, test);
            //turf.booleanWithin(theMarker.toGeoJSON(), layer.toGeoJSON())
            
            if(intersection2 == true){

                pol.push(pol7);
                cont++;
             

            }
           }

           var outSuper = L.geoJSON(pol, {
            pointToLayer: function (geom, latlng) {
                  return L.marker(latlng, {icon: Icon_005ce6});
            },
            onEachFeature: function (features, layer) {
              layer.bindPopup('<h6><b>Outorgas - Bacia Rio Jufari</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');   
            }
          });

          groupLayJufari.clearLayers();
          groupLayJufari.addLayer(outSuper);

          groupLayJufari1.addLayer(outSuper);

    // Controle de Queimadas


    var quei12 = document.getElementById("teste69");

    if(quei12.style.display === "block"){
      var quei1Html = '<img src="./imagens/outorga/pin-de-localizacao-005ce6.png" style="max-width:20px;max-height:20px;"> Outorgas - Bacia Rio Jufari ('+cont+')';
      var quei2Html = '<div class="form-check form-switch" style="float: right;margin-left: 20px;">';
      var quei3Html = '<input type="checkbox" class="form-check-input" role="switch" value="l" onclick="outJufari1()" id="outJufari">';
      var quei4Html = '</div>';
      var queiHtml = quei1Html+quei2Html+quei3Html+quei4Html;
      quei12.innerHTML += queiHtml;
    }else{
      quei12.innerHTML = "";
    }


    })  

  })

      if(map.hasLayer(groupLayJufari) || map.hasLayer(groupLayJufari1)){
        map.removeLayer(groupLayJufari);
        map.removeLayer(groupLayJufari1);
        document.getElementById('outJufari').checked = false;
        }
        else {
        map.addLayer(groupLayJufari);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        }
        legMostra(); 



    
  }


  function outJufari1(){


    if(map.hasLayer(groupLayJufari)){
      map.removeLayer(groupLayJufari);
      map.addLayer(groupLayJufari1);
    }
    else {
      map.removeLayer(groupLayJufari1);
      map.addLayer(groupLayJufari);
    }
    
  }