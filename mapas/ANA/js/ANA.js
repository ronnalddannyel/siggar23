
// Outorgas Emitidas pela ANA

    var markers3 = L.markerClusterGroup();

      var ana = L.geoJSON(ana, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: blueIcon1});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Emitidas pela ANA</b></h6><p><b>Dominio: </b>'+features.properties.tdm_ds+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
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
      }

      function ana2(){
        if(map.hasLayer(markers3)){
          map.removeLayer(markers3);
          map.addLayer(ana);
        }
        else {
          map.addLayer(markers3);
          map.removeLayer(ana);
        }
      }


// Outorgas Superficiais

      var markers4 = L.markerClusterGroup();

      var outSuper = L.geoJSON(outSuper, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: blueIcon2});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Superficiais</b></h6><p><b>Situação: </b>'+features.properties.tsp_ds+'<br><b>Domínio:</b> '+features.properties.tdm_ds+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
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
      }


      function outSuper2(){
        if(map.hasLayer(markers4)){
          map.removeLayer(markers4);
          map.addLayer(outSuper);
        }
        else {
          map.addLayer(markers4);
          map.removeLayer(outSuper);
        }
      }


      // Outorgas Subterrâneas

      var markers5 = L.markerClusterGroup();

      var outSub = L.geoJSON(outSub, {
        pointToLayer: function (geom, latlng) {
            return L.marker(latlng, {icon: MarromIcon});
        },
        onEachFeature: function (features, layer) {
          layer.bindPopup('<h6><b>Outorgas Subterrâneas</b></h6><p><b>Situação: </b>'+features.properties.tsp_ds+'<br><b>Domínio:</b> Estadual'+'<br><b>Latitude:</b> '+features.properties.int_nu_lat+'<br><b>Longitude:</b> '+features.properties.int_nu_lon+'<br><b>Município:</b> '+features.properties.ing_nm_mun+'<br><b>Tipo da Finalidade:</b> '+features.properties.tfn_ds+'</p>');
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
      }


      function outSub2(){
        if(map.hasLayer(markers5)){
          map.removeLayer(markers5);
          map.addLayer(outSub);
        }
        else {
          map.addLayer(markers5);
          map.removeLayer(outSub);
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