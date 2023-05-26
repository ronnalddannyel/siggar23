  
  // Embargos Emitidos pela FEMARH

  var groupLay_femarhEmbargos = L.markerClusterGroup();

  function femarhEmbargos1(el){
  

      $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/femarhEmbargos/femarhEmbargos.geojson", function(data) {  
        var femarhEmbargos = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Embargos Emitidos pela FEMARH</b></h6><p><b>seq:</b> '+geom.properties.seq+'<br><b>nome_aut:</b> '+geom.properties.nome_aut+'<br><b>auto_infra:</b> '+geom.properties.auto_infra+'<br><b>n_relat:</b> '+geom.properties.n_relat+'<br><b>n_processo:</b> '+geom.properties.n_processo+'<br><b>crime_amb:</b> '+geom.properties.crime_amb+'<br><b>valor_mult:</b> '+geom.properties.valor_mult+'<br><b>data_aut:</b> '+geom.properties.data_aut+'<br><b>municipio:</b> '+geom.properties.municipio+'<br><b>cpf_cnpj:</b> '+geom.properties.cpf_cnpj+'<br><b>latitude:</b> '+geom.properties.latitude+'<br><b>longitude:</b> '+geom.properties.longitude+'<br><b>ano:</b> '+geom.properties.ano+'<br><b>obs:</b> '+geom.properties.obs+'</p>');
              }
        });
            groupLay_femarhEmbargos.clearLayers();
            groupLay_femarhEmbargos.addLayer(femarhEmbargos);
      })
  
  
  
      if(map.hasLayer(groupLay_femarhEmbargos)){
          map.removeLayer(groupLay_femarhEmbargos);
      }
      else {
          map.addLayer(groupLay_femarhEmbargos);
      }
  
      var display = document.getElementById(el).style.display;
  
      if(display == "block"){
          document.getElementById(el).style.display = 'none';
      }else{
          document.getElementById(el).style.display = 'block';
      }
  }