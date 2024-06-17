
// Outorgas Emitidas pela ANA
      
    var markers3 = L.markerClusterGroup();
      console.log(ana3);
      var ana = L.geoJSON(ana3, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: blueIcon1});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Emitidas pela ANA</b></h6><p><b>Dominio: </b>'+features.properties.TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude:</b> '+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Tipo da Finalidade:</b> '+features.properties.TFN_DS+'</p>');
        }
      });
      markers3.addLayer(ana);

      function ana1(el){
        if(map.hasLayer(markers3) || map.hasLayer(ana)){
        map.removeLayer(markers3);
        map.removeLayer(ana);
        document.getElementById('ana').checked = false;
        }
        else {
        map.addLayer(markers3);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
        legMostra();
      }

      function ana2(){
        if(map.hasLayer(markers3)){
          map.removeLayer(markers3);
          map.addLayer(ana);
        }
        else {
          map.removeLayer(ana);
          map.addLayer(markers3);
        }
      }


// Outorgas Superficiais

      var markers4 = L.markerClusterGroup();
      console.log(outSuper3);
      var outSuper = L.geoJSON(outSuper3, {
        pointToLayer: function (geom, latlng) {
          switch (geom.properties.FIN_TFN_DS) {
            case 'Abastecimento Público': return L.marker(latlng, {icon: Icon_ffff73});
            case 'Esgotamento Sanitário': return L.marker(latlng, {icon: Icon_ffff73});
            case 'Aproveitamento do Potencial Hidrelétrico': return L.marker(latlng, {icon: Icon_bee8ff});
            case 'Aquicultura em Tanque Escavado': return L.marker(latlng, {icon: Icon_00c5ff});
            case 'Aquicultura em Tanque Rede': return L.marker(latlng, {icon: Icon_002673});
            case 'Consumo Humano': return L.marker(latlng, {icon: Icon_f0566b});
            case 'Criaçăo Animal': return L.marker(latlng, {icon: Icon_38a800});
            case 'Indústria': return L.marker(latlng, {icon: Icon_e60000});
            case 'Irrigação': return L.marker(latlng, {icon: Icon_f57ab6});
            case 'Mineração - Extração de AreiaCascalho em Leito de Rio': return L.marker(latlng, {icon: Icon_a83800});
            case 'Mineração - Outros Processos Extrativos': return L.marker(latlng, {icon: Icon_a83800});
            case 'Obras Hidráulicas': return L.marker(latlng, {icon: Icon_005ce6});
            case 'Outras': return L.marker(latlng, {icon: Icon_59f0c0});
            case 'ReservatórioBarramentoRegularização de Vazões para Usos Múltiplos': return L.marker(latlng, {icon: Icon_59f769});
            case 'Sem Finalidade': return L.marker(latlng, {icon: Icon_8f6b42});
            case 'Serviços': return L.marker(latlng, {icon: Icon_8c3849});
            case 'Termoelétrica': return L.marker(latlng, {icon: Icon_e69800});
            case 'Transposição': return L.marker(latlng, {icon: Icon_308a3f});
            default: return L.marker(latlng, {icon: CinzaIcon});
        }
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Superficiais</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');   
        }
      });
      markers4.addLayer(outSuper);
      
      function outSuper1(el){
        if(map.hasLayer(markers4) || map.hasLayer(outSuper)){
        map.removeLayer(markers4);
        map.removeLayer(outSuper);
        document.getElementById('outSup').checked = false;
        }
        else {
        map.addLayer(markers4);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
        legMostra();
      }


      function outSuper2(){
        if(map.hasLayer(markers4)){
          map.removeLayer(markers4);
          map.addLayer(outSuper);
        }
        else {
          map.removeLayer(outSuper);
          map.addLayer(markers4);
        }
      }


      // Outorgas Subterrâneas

      var markers5 = L.markerClusterGroup();
      console.log(outSub3);
      var outSub = L.geoJSON(outSub3, {
        pointToLayer: function (geom, latlng) {
          switch (geom.properties.FIN_TFN_DS) {
            case 'Abastecimento Público': return L.marker(latlng, {icon: Icon_ffff73});
            case 'Esgotamento Sanitário': return L.marker(latlng, {icon: Icon_ffff73});
            case 'Aproveitamento do Potencial Hidrelétrico': return L.marker(latlng, {icon: Icon_bee8ff});
            case 'Aquicultura em Tanque Escavado': return L.marker(latlng, {icon: Icon_00c5ff});
            case 'Aquicultura em Tanque Rede': return L.marker(latlng, {icon: Icon_002673});
            case 'Consumo Humano': return L.marker(latlng, {icon: Icon_f0566b});
            case 'Criação Animal': return L.marker(latlng, {icon: Icon_38a800});
            case 'Indústria': return L.marker(latlng, {icon: Icon_e60000});
            case 'Irrigação': return L.marker(latlng, {icon: Icon_f57ab6});
            case 'Mineração - Extração de AreiaCascalho em Leito de Rio': return L.marker(latlng, {icon: Icon_a83800});
            case 'Mineração - Outros Processos Extrativos': return L.marker(latlng, {icon: Icon_a83800});
            case 'Obras Hidráulicas': return L.marker(latlng, {icon: Icon_005ce6});
            case 'Outras': return L.marker(latlng, {icon: Icon_59f0c0});
            case 'ReservatórioBarramentoRegularização de Vazões para Usos Múltiplos': return L.marker(latlng, {icon: Icon_59f769});
            case 'Sem Finalidade': return L.marker(latlng, {icon: Icon_8f6b42});
            case 'Serviços': return L.marker(latlng, {icon: Icon_8c3849});
            case 'Termoelétrica': return L.marker(latlng, {icon: Icon_e69800});
            case 'Transposição': return L.marker(latlng, {icon: Icon_308a3f});
            default: return L.marker(latlng, {icon: CinzaIcon});
        }
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Subterrâneas</b></h6><p><b>Tipo de Interferência: </b>'+features.properties.INT_TIN_DS+'<br><b>Subtipo de Interferência: </b>'+features.properties.INT_TSU_DS+'<br><b>Tipo de Corpo Hídrico:</b> '+features.properties.INT_TCH_DS+'<br><b>Situação da Interferência:</b> '+features.properties.INT_TSI_DS+'<br><b>Domínio:</b> '+features.properties.INT_TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LAT+'<br><b>Longitude: </b>'+features.properties.INT_NU_LON+'<br><b>Município:</b> '+features.properties.ING_NM_MUN+'<br><b>Nome do Corpo Hídrico:</b> '+features.properties.INT_NM_COR+'<br><b>Nome do Corpo Hídrico Alterado:</b> '+features.properties.INT_NM_C_1+'<br><b>Nome do Empreendimento:</b> '+features.properties.EMP_NM_EMP+'<br><b>Situação da Outorga:</b> '+features.properties.OUT_TP_SIT+'<br><b>Data de Vencimento:</b> '+features.properties.OUT_DT_OUT+'<br><b>Data de Início:</b> '+features.properties.OUT_DT_O_1+'<br><b>Número do Processo: </b>'+features.properties.OUT_NU_PRO+'<br><b>Tipo do Ato:</b> '+features.properties.OUT_TP_ATO+'<br><b>Número do Ato:</b> '+features.properties.OUT_NU_ATO+'<br><b>Vazão Máxima:</b> '+features.properties.INT_QT_VAZ+'<br><b>Vazão Média:</b> '+features.properties.INT_QT_V_1+'<br><b>Volume Anual:</b> '+features.properties.INT_QT_VOL+'<br><b>Finalidade:</b> '+features.properties.FIN_TFN_DS+'</p>');        
        }
      });
      markers5.addLayer(outSub);

      function outSub1(el){
        if(map.hasLayer(markers5) || map.hasLayer(outSub)){
        map.removeLayer(markers5);
        map.removeLayer(outSub);
        document.getElementById('outSub').checked = false;
        }
        else {
        map.addLayer(markers5);
        }
        var display = document.getElementById(el).style.display;
        if(display == "block"){
          document.getElementById(el).style.display = 'none';
        }else{
          document.getElementById(el).style.display = 'block';
        } 
        legMostra();
      }


      function outSub2(){
        if(map.hasLayer(markers5)){
          map.removeLayer(markers5);
          map.addLayer(outSub);
        }
        else {
          map.removeLayer(outSub);
          map.addLayer(markers5);
        }
      }

      
// Teste em tempo real

      /*
      var markers3 = L.markerClusterGroup();

      function ana1(el){
        markers3.clearLayers();
        $.getJSON("https://opendata.arcgis.com/api/v3/datasets/2cfab409c9ee4592aa4c404ec556807b_1/downloads/data?format=geojson&spatialRefId=4326&where=1=1", function(data) {  
        var ana = L.geoJson(data, {
          filter: picnicFilter,
          pointToLayer: function (features, latlng) {
            return L.marker(latlng, {icon: blueIcon1});
          },
          onEachFeature: function (features, layer) {
            layer.bindPopup('<h6><b>Outorgas Emitidas pela ANA</b></h6><p><b>Dominio: </b>'+features.properties.TDM_DS+'<br><b>Latitude:</b> '+features.properties.INT_NU_LATITUDE+'<br><b>Longitude:</b> '+features.properties.INT_NU_LONGITUDE+'<br><b>Município:</b> '+features.properties.ING_NM_MUNICIPIO+'<br><b>Tipo da Finalidade:</b> '+features.properties.TFN_DS+'</p>');
          }
        });

          markers3.addLayer(ana);
        })

        if(map.hasLayer(markers3)){
          map.removeLayer(markers3);
          }
          else {
          map.addLayer(markers3);
          }
          var display = document.getElementById(el).style.display;
          if(display == "block"){
            document.getElementById(el).style.display = 'none';
          }else{
            document.getElementById(el).style.display = 'block';
          } 
        }

        function picnicFilter(features) {
          if (features.properties.ING_SG_UFMUNICIPIO === "RR") return true
        }
        */