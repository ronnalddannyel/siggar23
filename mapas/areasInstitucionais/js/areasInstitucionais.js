
// Áreas Inalienáveis

var areaInalienaveis = L.geoJSON(areaInalienaveis1, {
    color: "#808080",
    weight: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Áreas Inalienáveis</b></h6><p><b>Nome:</b> Área Inalienável<br><b>Método:</b> '+geom.properties.metodo+'<br><b>Imagem: </b> '+geom.properties.imagem+'<br><b>Data: </b>'+geom.properties.data+'<br><b>Rio: </b> '+geom.properties.rio+'<br><b>Município: </b> '+geom.properties.municipio+'<br><b>Gleba: </b>'+geom.properties.gleba+'<br><b>Categoria: </b> '+geom.properties.categoria+'<br><b>Nup: </b> '+geom.properties.nup+'</p>');
    }
  });

  function areaIna(el){
      if(map.hasLayer(areaInalienaveis)){
      map.removeLayer(areaInalienaveis);
      }
      else {
      map.addLayer(areaInalienaveis);
      }
      var display = document.getElementById(el).style.display;
      if(display == "block"){
        document.getElementById(el).style.display = 'none';
      }else{
        document.getElementById(el).style.display = 'block';
      } 
      legMostra();
      }


// Áreas Militares

  var areaMilit = L.geoJSON(arMilit, {
    color: "#FF8C00",
    weight: 2,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Áreas Militares</b></h6><p><b>Nome:</b> Área Militar<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    } 
  });

  function areaMil(el){
    if(map.hasLayer(areaMilit)){
    map.removeLayer(areaMilit);
    }
    else {
    map.addLayer(areaMilit);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


// Terras Indígenas

  var limiteTerraIndigena = L.geoJSON(limiteTerraIndigena1, {
    color: "red",
    weight: 2,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Terras Indígenas</b></h6><p><b>Nome: </b> '+geom.properties.nomeabrev+'<br><b>Etnia: </b> '+geom.properties.etnia_nome+'<br><b>Municípios: </b> '+geom.properties.municipio_+'<br><b>Estados: </b> '+geom.properties.uf_sigla+'<br><b>Fase: </b> '+geom.properties.fase_ti+'<br><b>Modalidade: </b> '+geom.properties.modalidade+'<br><b>Unidade Administrativa: </b> '+geom.properties.undadm_nom+'<br><b>Sigla Unid. Administrativa: </b> '+geom.properties.undadm_sig+'<br><b>Faixa de Fronteira: </b> '+geom.properties.faixa_fron+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Data Atualização: </b> '+geom.properties.data_atual+'</p>');
    }
  });

  function TerraInd(el){
    if(map.hasLayer(limiteTerraIndigena)){
    map.removeLayer(limiteTerraIndigena);
    }
    else {
    map.addLayer(limiteTerraIndigena);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


// Unidades de Conservação Estadual

  var undConserEst = L.geoJSON(ucsEst, {
      color: "#32CD32",
      weight: 2,
      onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Unidade de Conservação Estadual</b></h6><p><b>Nome:</b> '+geom.properties.nomeabrev+'<br><b>Sigla:</b> '+geom.properties.sigla+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>Situação:</b> '+geom.properties.situacao+'<br><b>Decreto:</b> '+geom.properties.decreto+'<br><b>Ano:</b> '+geom.properties.ano+'<br><b>Lei:</b> '+geom.properties.lei+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
      }
    });
    
    function undConEst(el){
      if(map.hasLayer(undConserEst)){
      map.removeLayer(undConserEst);
      }
      else {
      map.addLayer(undConserEst);
      }
      var display = document.getElementById(el).style.display;
      if(display == "block"){
        document.getElementById(el).style.display = 'none';
      }else{
        document.getElementById(el).style.display = 'block';
      } 
      legMostra();
    }


// Unidades de Conservação Federal

    var undConserFed = L.geoJSON(ucsFed, {
      color: "#006400",
      weight: 2,
      onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Unidade de Conservação Federal</b></h6><p><b>Nome:</b> '+geom.properties.nome_area+'<br><b>Tipo:</b> '+geom.properties.natureza+'<br><b>Detentor:</b> '+geom.properties.detentor_n+'<br><b>Transcrição:</b> '+geom.properties.transcrica+'<br><b>Área Hectares:</b> '+geom.properties.area_hecta.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
      }
    });

    function undConFed(el){
      if(map.hasLayer(undConserFed)){
      map.removeLayer(undConserFed);
      }
      else {
      map.addLayer(undConserFed);
      }
      var display = document.getElementById(el).style.display;
      if(display == "block"){
        document.getElementById(el).style.display = 'none';
      }else{
        document.getElementById(el).style.display = 'block';
      } 
      legMostra();
    }