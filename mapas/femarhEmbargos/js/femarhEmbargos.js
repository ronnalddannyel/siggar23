  
  // Embargos Emitidos pela FEMARH
/*
  var groupLay_femarhEmbargos = L.markerClusterGroup();

  function femarhEmbargos1(el){
  

      $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/femarhEmbargos/femarhEmbargos.geojson", function(data) {  
        var femarhEmbargos = L.geoJSON(data, {
            pointToLayer: function (geom, latlng) {
                return L.marker(latlng, {icon: redIcon});
            },
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

  */


  var groupLay_femarhEmbargos = L.markerClusterGroup();

  var femarhEmbargos = L.geoJSON(femarhEmbargos3, {
    pointToLayer: function (geom, latlng) {
      switch (geom.properties.ano) {
        case 2016: return L.marker(latlng, {icon: AmareloIcon});
        case 2017: return L.marker(latlng, {icon: Amarelo1Icon});
        case 2018: return L.marker(latlng, {icon: CinzaIcon});
        case 2019: return L.marker(latlng, {icon: Marrom1Icon});
        case 2020: return L.marker(latlng, {icon: RoxoIcon});
        case 2021: return L.marker(latlng, {icon: VerdeIcon});
        case 2022: return L.marker(latlng, {icon: Vermelho1Icon});
        case 2023: return L.marker(latlng, {icon: redIcon});
      }
    },
    onEachFeature: function (geom, layer) {
      if(geom.properties.valor_mult != null){
        var val_mult = "R$ "+geom.properties.valor_mult.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2});
      }else{
        var val_mult = geom.properties.valor_mult;
      }
        layer.bindPopup('<h6><b>Embargos e Autuações FEMARH</b></h6><p><b>Nome do Autuado:</b> '+geom.properties.nome_aut+'<br><b>Auto de Infração:</b> '+geom.properties.auto_infra+'<br><b>Número do Relatório:</b> '+geom.properties.n_relat+'<br><b>Número do Processo:</b> '+geom.properties.n_processo+'<br><b>Tipo do Crime Ambiental:</b> '+geom.properties.crime_amb+'<br><b>Valor da Multa:</b> '+val_mult+'<br><b>Data da Autuação:</b> '+geom.properties.data_aut+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>CPF/CNPJ:</b> '+geom.properties.cpf_cnpj+'<br><b>Latitude:</b> '+geom.properties.latitude+'<br><b>Longitude:</b> '+geom.properties.longitude+'<br><b>Ano:</b> '+geom.properties.ano+'<br><b>Observação:</b> '+geom.properties.obs+'</p>');
      }
});

    groupLay_femarhEmbargos.addLayer(femarhEmbargos);

  function femarhEmbargos1(el){
    if(map.hasLayer(groupLay_femarhEmbargos) || map.hasLayer(femarhEmbargos)){
    map.removeLayer(groupLay_femarhEmbargos);
    map.removeLayer(femarhEmbargos);
    document.getElementById('embAut').checked = false;
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
    legMostra();
  }


  function femarhEmbargos2(){
    if(map.hasLayer(groupLay_femarhEmbargos)){
    map.removeLayer(groupLay_femarhEmbargos);
    map.addLayer(femarhEmbargos);
    }
    else {
    map.addLayer(groupLay_femarhEmbargos);
    map.removeLayer(femarhEmbargos);
    }
  }