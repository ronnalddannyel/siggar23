
// Sítios Arqueológicos (Polígonos)

var iphanSitArq = L.geoJSON(sitArPol, {
    color: "#8B0000",
    weight: 2,
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>IPHAN - Sítios Arqueológicos (Poligonos)</b></h6><p><b>Código Nacional:</b> '+geom.properties.co_iphan+'<br><b>Identificação:</b> '+geom.properties.identifica+'<br><b>Natureza:</b> '+geom.properties.ds_naturez+'<br><b>Código Natureza:</b> '+geom.properties.codigo_iph+'<br><b>Classificação:</b> '+geom.properties.ds_classif+'<br><b>Tipo:</b> '+geom.properties.ds_tipo_be+'<br><b>Sigla (Tipo):</b> '+geom.properties.sg_tipo_be+'<br><b>Sintese:</b> '+geom.properties.sintese_be+'<br><b>Logradouro:</b> '+geom.properties.no_logrado+'<br><b>Número (Logradouro):</b> '+geom.properties.nu_logrado+'<br><b>Data (Cadastro):</b> '+geom.properties.dt_cadastr+'</p>');
    }
  });

  function ipSitArq(el){
    if(map.hasLayer(iphanSitArq)){
    map.removeLayer(iphanSitArq);
    }
    else {
    map.addLayer(iphanSitArq);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }


  // Sítios Arqueológicos (Pontos)

  var markers = L.markerClusterGroup();

  var iphanSitArqPto = L.geoJSON(sitArPon, {
    pointToLayer: function (geom, latlng) {
        return L.marker(latlng, {icon: redIcon})
    },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>IPHAN - Sítios Arqueológicos (Pontos)</b></h6><p><b>Código Nacional:</b> '+geom.properties.co_iphan+'<br><b>Identificação:</b> '+geom.properties.identifica+'<br><b>Natureza:</b> '+geom.properties.ds_naturez+'<br><b>Código Natureza:</b> '+geom.properties.codigo_iph+'<br><b>Classificação:</b> '+geom.properties.ds_classif+'<br><b>Tipo:</b> '+geom.properties.ds_tipo_be+'<br><b>Sigla (Tipo):</b> '+geom.properties.sg_tipo_be+'<br><b>Sintese:</b> '+geom.properties.sintese_be+'<br><b>Logradouro:</b> '+geom.properties.no_logrado+'<br><b>Número (Logradouro):</b> '+geom.properties.nu_logrado+'<br><b>Data (Cadastro):</b> '+geom.properties.dt_cadastr+'</p>');
    },
  });

  markers.addLayer(iphanSitArqPto);

  function ipSitArqPto(el){
    if(map.hasLayer(markers) || map.hasLayer(iphanSitArqPto)){
    map.removeLayer(markers);
    map.removeLayer(iphanSitArqPto);
    document.getElementById('iphanPto').checked = false;
    }
    else {
    map.addLayer(markers);
    }
    var display = document.getElementById(el).style.display;
    if(display == "block"){
      document.getElementById(el).style.display = 'none';
    }else{
      document.getElementById(el).style.display = 'block';
    } 
    legMostra();
  }

  function ipSitArqPto1(){
    if(map.hasLayer(markers)){
      map.removeLayer(markers);
      map.addLayer(iphanSitArqPto);
    }
    else {
      map.addLayer(markers);
      map.removeLayer(iphanSitArqPto);
    }
  }