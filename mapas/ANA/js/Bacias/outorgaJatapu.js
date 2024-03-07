// Focos de Queimadas - Código em tempo real

var groupLayJatapu = L.markerClusterGroup();

var groupLayJatapu1 = L.layerGroup([]);


function outJatapu(el){

  groupLayJatapu1.clearLayers();

  var test;

  $.getJSON(UrlFemarh+"/siggarr/mapas/zee/hidrografia_ottobacias.geojson", function(data) {  
  
  var Jatapu = L.geoJson(data, {
    filter: function (features) {      
        if(features.properties.regiao48 == 'RIO JATAPU'){
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
                  return L.marker(latlng, {icon: Icon_38a800});
            },
            onEachFeature: function (features, layer) {
              layer.bindPopup('<h6><b>Outorgas - Bacia Rio Jatapu</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');   
            }
          });

          groupLayJatapu.clearLayers();
          groupLayJatapu.addLayer(outSuper);

          groupLayJatapu1.addLayer(outSuper);

    // Controle de Queimadas


    var quei12 = document.getElementById("teste67");

    if(quei12.style.display === "block"){
      var quei1Html = '<img src="./imagens/outorga/pin-de-localizacao-e60000.png" style="max-width:20px;max-height:20px;margin-left:15px;"> Outorgas - Bacia Rio Jatapu ('+cont+')';
      var quei2Html = '<div class="form-check form-switch" style="float: right;margin-left: 20px;">';
      var quei3Html = '<input type="checkbox" class="form-check-input" role="switch" value="l" onclick="outJatapu1()" id="outJatapu">';
      var quei4Html = '</div>';
      var queiHtml = quei1Html+quei2Html+quei3Html+quei4Html;
      quei12.innerHTML += queiHtml;
    }else{
      quei12.innerHTML = "";
    }


    })  

  })

      if(map.hasLayer(groupLayJatapu) || map.hasLayer(groupLayJatapu1)){
        map.removeLayer(groupLayJatapu);
        map.removeLayer(groupLayJatapu1);
        document.getElementById('outJatapu').checked = false;
        }
        else {
        map.addLayer(groupLayJatapu);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        }
        legMostra(); 



    
  }


  function outJatapu1(){


    if(map.hasLayer(groupLayJatapu)){
      map.removeLayer(groupLayJatapu);
      map.addLayer(groupLayJatapu1);
    }
    else {
      map.removeLayer(groupLayJatapu1);
      map.addLayer(groupLayJatapu);
    }
    
  }