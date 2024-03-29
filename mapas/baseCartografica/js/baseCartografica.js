
// Sedes Municipais

var sedesMunic = L.geoJSON(sedesMunic1, {
    pointToLayer: function (geom, latlng) {
      if (geom.properties.nome == 'Boa Vista') {
        return L.marker(latlng, {icon: redIcon});
      }
      else {
        return L.marker(latlng, {icon: blueIcon});
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Sedes Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Tipo:</b> '+geom.properties.tipocidade+'</p>');
    }
  });

  function sedMunic(el){
    if(map.hasLayer(sedesMunic)){
    map.removeLayer(sedesMunic);
    }
    else {
    map.addLayer(sedesMunic);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Localidades

  var markers1 = L.markerClusterGroup();

  var localidade = L.geoJSON(localidade1, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: whiteIcon});
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Localidades</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Fonte:</b> '+geom.properties.fonte+'<br><b>Latitude:</b> '+geom.properties.lat+'<br><b>Longitude:</b> '+geom.properties.longit+'</p>');
    }
  });

  markers1.addLayer(localidade);

  function loc(el){
    if(map.hasLayer(markers1) || map.hasLayer(localidade)){
    map.removeLayer(markers1);
    map.removeLayer(localidade);
    document.getElementById('local').checked = false;
    }
    else {
    map.addLayer(markers1);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }

  function loc1(){
    if(map.hasLayer(markers1)){
      map.removeLayer(markers1);
      map.addLayer(localidade);
    }
    else {
      map.removeLayer(localidade);
      map.addLayer(markers1);
    }
  }


  // Limites Municipais

  var limitesMunic = L.geoJSON(limitesMunic1, {
    color: "black",
    opacity: "1.0",
    fillOpacity: "0",
    weight: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Limites Municipais</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    }
  });

  function limMunic(el){
    if(map.hasLayer(limitesMunic)){
    map.removeLayer(limitesMunic);
    }
    else {
    map.addLayer(limitesMunic);
    }
    var display = document.getElementById(el).style.display;
    if(display == "none"){
      document.getElementById(el).style.display = 'block';
    }else{
      document.getElementById(el).style.display = 'none';
    } 
    legMostra();
  }
  map.addLayer(limitesMunic);


  // Rodovias

  var rodovia = L.geoJSON(rodovia1, {
    style: function(feature) {
      switch (feature.properties.administra) {
          case 'Federal': return {color: "red", weight: 2};
          case 'Estadual': return {color: "#32CD32", weight: 2};
          case 'Municipal': return {color: "black", weight: 1.2, dashArray: "6 4 6"};
      }
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Rodovias</b></h6><p><b>Nome:</b> '+geom.properties.codtrechor+'<br><b>Jurisdição:</b> '+geom.properties.jurisdicao+'<br><b>Administração:</b> '+geom.properties.administra+'<br><b>Revestimento:</b> '+geom.properties.revestimen+'<br><b>Operacional:</b> '+geom.properties.operaciona+'<br><b>Situação:</b> '+geom.properties.situacaofi+'<br><b>Tráfego:</b> '+geom.properties.trafego+'</p>');
    }
  });

  function rod(el){
    if(map.hasLayer(rodovia)){
    map.removeLayer(rodovia);
    }
    else {
    map.addLayer(rodovia);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Trecho de Drenagem (1:100.000)

  var hidrografia = L.geoJSON(hidrografia1, {
    color: "#00BFFF",
    weight: 1,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Trecho de Drenagem (1:100.000)</b></h6><p><b>Nome:</b> '+geom.properties.nome+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Navegabilidade:</b> '+geom.properties.navegabili+'</p>');
    }
  });

  function hidrog(el){
    if(map.hasLayer(hidrografia)){
    map.removeLayer(hidrografia);
    }
    else {
    map.addLayer(hidrografia);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Trecho de Massa D'Água

  var hidroMasDagua = L.geoJSON(hidroMasDagua1, {
    color: "#00BFFF",
    weight: 2,
    onEachFeature: function (geom, layer) {
      layer.bindPopup("<h6><b>Trecho de Massa D'Água</b></h6><p><b>Nome:</b> "+geom.properties.nome+'<br><b>Nome Abreviado:</b> '+geom.properties.nomeabrev+'<br><b>Tipo:</b> '+geom.properties.tipotrecho+'<br><b>Salinidade:</b> '+geom.properties.salinidade+'</p>');
    }
  });

  function hidMasDagua(el){
    if(map.hasLayer(hidroMasDagua)){
    map.removeLayer(hidroMasDagua);
    }
    else {
    map.addLayer(hidroMasDagua);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Projeto de Assentamento

  var projAssent = L.geoJSON(projAssent1, {
    color: "#FFD700",
    weight: 2,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Projetos de Assentamento</b></h6><p><b>Nome:</b> '+geom.properties.nome_area+'<br><b>Detentor:</b> '+geom.properties.detentor_n+'<br><b>Tipo:</b> '+geom.properties.natureza+'<br><b>Status:</b> '+geom.properties.status+'<br><b>Área:</b> '+geom.properties.area_ha.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    }
  });

  function projAs(el){
    if(map.hasLayer(projAssent)){
    map.removeLayer(projAssent);
    }
    else {
    map.addLayer(projAssent);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Glebas

  var glebas = L.geoJSON(glebas1, {
    color: "blue",
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Glebas</b></h6><p><b>Nome:</b> '+geom.properties.text+'<br><b>Situação:</b> '+geom.properties.situacao+'<br><b>Área:</b> '+geom.properties.hectares.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    }
  });

  function gleb(el){
    if(map.hasLayer(glebas)){
    map.removeLayer(glebas);
    }
    else {
    map.addLayer(glebas);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }



  // Limites do Estado

  var estadosLimites = L.geoJSON(estadosLimites2, {
    color: "black",
    fill: false,
    weight: 3,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Limites do Estado</b></h6><p><b>Geocódigo:</b> '+geom.properties.geocodigo+'<br><b>Nome:</b> '+geom.properties.nome+'<br><b>Sigla:</b> '+geom.properties.sigla+'</p>');
    }
  });

  function estadosLimites1(el){
    if(map.hasLayer(estadosLimites)){
    map.removeLayer(estadosLimites);
    }
    else {
    map.addLayer(estadosLimites);
    }
    var display = document.getElementById(el).style.display;
    if(display == "none"){
      document.getElementById(el).style.display = 'block';
    }else{
      document.getElementById(el).style.display = 'none';
    } 
    legMostra();
  }
  map.addLayer(estadosLimites);