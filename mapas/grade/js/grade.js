
// IBGE Cartas 100 mil

  var ibgeCarta = L.geoJSON(ibgeCarta1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>IBGE CARTA 1:100.000</b></h6><p><b>MI:</b> '+geom.properties.mi+'<br><b>Índice:</b> '+geom.properties.indicenome+'<br><b>Equidistância:</b> '+geom.properties.equidistan+'<br><b>Escala:</b> '+geom.properties.escala+'<br><b>Nome da Carta:</b> '+geom.properties.nome_carta+'<br><b>Aquisição:</b> '+geom.properties.aquisicao+'</p>');
    }
  });

  function ibgeCart(el){
    if(map.hasLayer(ibgeCarta)){
    map.removeLayer(ibgeCarta);
    }
    else {
    map.addLayer(ibgeCarta);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // CBERS 4A - MUX

  var cbers4aMux = L.geoJSON(cbers4aMux1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>CBERS 4A - MUX</b></h6><p><b>Órbita:</b> '+geom.properties.path+'<br><b>Ponto:</b> '+geom.properties.row+'</p>');
    }
  });

  function cbers4aMu(el){
    if(map.hasLayer(cbers4aMux)){
    map.removeLayer(cbers4aMux);
    }
    else {
    map.addLayer(cbers4aMux);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // CBERS 4A - WFI

  var cbers4aWifi = L.geoJSON(cbers4aWfi, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>CBERS 4A - WFI</b></h6><p><b>Órbita:</b> '+geom.properties.path+'<br><b>Ponto:</b> '+geom.properties.row+'</p>');
    }
  });

  function cbers4aWif(el){
    if(map.hasLayer(cbers4aWifi)){
    map.removeLayer(cbers4aWifi);
    }
    else {
    map.addLayer(cbers4aWifi);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // CBERS - Cenas

  var cbersCenas = L.geoJSON(cbersCenas1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>CBERS - Cenas</b></h6><p><b>Órbita/Ponto:</b> '+geom.properties.orbita_pon+'</p>');
    }
  });

  function cbersCena(el){
    if(map.hasLayer(cbersCenas)){
    map.removeLayer(cbersCenas);
    }
    else {
    map.addLayer(cbersCenas);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // CBERS

  var cbersGrade = L.geoJSON(cbersGrade1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>CBERS</b></h6><p><b>Órbita:</b> '+geom.properties.orbita+'<br><b>Ponto:</b> '+geom.properties.ponto+'<br><b>Latitude Decimal:</b> '+geom.properties.lat+'<br><b>Longitude Decimal:</b> '+geom.properties.lon+'<br><b>Latitude (GMS):</b> '+geom.properties.latgms+'<br><b>Longiutde (GMS):</b> '+geom.properties.longms+'</p>');
    }
  });

  function cbersGr(el){
    if(map.hasLayer(cbersGrade)){
    map.removeLayer(cbersGrade);
    }
    else {
    map.addLayer(cbersGrade);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // Landsat

  var landsat = L.geoJSON(landsat1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Landsat</b></h6><p><b>Órbita / ponto:</b> '+geom.properties.orbpto+'</p>');
    }
  });

  function landsa(el){
    if(map.hasLayer(landsat)){
    map.removeLayer(landsat);
    }
    else {
    map.addLayer(landsat);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // Liss 3

  var liss_3 = L.geoJSON(liss_31, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Liss 3</b></h6><p><b>Órbita:</b> '+geom.properties.path+'<br><b>Ponto:</b> '+geom.properties.row+'</p>');
    }
  });

  function liss(el){
    if(map.hasLayer(liss_3)){
    map.removeLayer(liss_3);
    }
    else {
    map.addLayer(liss_3);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // Rapideye

  var rapideye = L.geoJSON(rapideye1, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Rapideye</b></h6><p><b>Cena/Órbita:</b> '+geom.properties.cena_orbit+'<br><b>Zona:</b> '+geom.properties.zona+'</p>');
    }
  });

  function rapidey(el){
    if(map.hasLayer(rapideye)){
    map.removeLayer(rapideye);
    }
    else {
    map.addLayer(rapideye);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }

  // Sentinel 2

  var sentinel_2 = L.geoJSON(sentinel_21, {
    color: "#808080",
    weight: "2",
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>Sentinel 2</b></h6><p><b>NOME:</b> '+geom.properties.name+'</p>');
    }
  });

  function sentinel(el){
    if(map.hasLayer(sentinel_2)){
    map.removeLayer(sentinel_2);
    }
    else {
    map.addLayer(sentinel_2);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
  }