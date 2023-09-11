
// Agência Nacional de Mineração

var minerAtivos = L.geoJSON(mineAtivos, {
    color: "blue",
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Minerários Ativos</b></h6><p><b>Processo: </b>'+geom.properties.PROCESSO+'<br><b>Fase:</b> '+geom.properties.FASE+'<br><b>Substância:</b> '+geom.properties.SUBS+'<br><b>Uso:</b> '+geom.properties.USO+'<br><b>Evento:</b> '+geom.properties.ULT_EVENTO+'<br><b>Área:</b> '+geom.properties.AREA_HA.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.</p>');
    }
  });

  function minAtivos(el){
    if(map.hasLayer(minerAtivos)){
    map.removeLayer(minerAtivos);
    }
    else {
    map.addLayer(minerAtivos);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }