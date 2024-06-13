var groupLay_Dms = L.layerGroup([]);

function convertCoord(){

  var grausLat = document.getElementById('graus').value.replace(/,/g, '.');
  var minLat = document.getElementById('minutos').value.replace(/,/g, '.');
  var secLat = document.getElementById('secundos').value.replace(/,/g, '.');
  var coordLat = document.getElementById('coord123').value;

  var grausLong = document.getElementById('graus1').value.replace(/,/g, '.');
  var minLong = document.getElementById('minutos1').value.replace(/,/g, '.');
  var secLong = document.getElementById('secundos1').value.replace(/,/g, '.');
  var coordLong = document.getElementById('coord124').value;


  if(coordLat == 'Norte'){
    var lat = parseFloat(grausLat) + (parseFloat(minLat) / 60) + (parseFloat(secLat) / 3600);
  }else{
    var lat = (parseFloat(grausLat) + (parseFloat(minLat) / 60) + (parseFloat(secLat) / 3600)) * (-1);
  }
  

  if(coordLong == 'Leste'){
    var long = parseFloat(grausLong) + (parseFloat(minLong) / 60) + (parseFloat(secLong) / 3600);
  }else{
    var long = (parseFloat(grausLong) + (parseFloat(minLong) / 60) + (parseFloat(secLong) / 3600)) * (-1);
  }




  var vet = L.marker([lat, long]);
  map.setView([lat, long], 13);
  groupLay_Dms.addLayer(vet);
  map.addLayer(groupLay_Dms);

}

// Função - Remover Marcador DMS

function removerTemaDms(){
  groupLay_Dms.clearLayers();

  map.removeLayer(groupLay_Dms);
  document.getElementById('graus').value = '';
  document.getElementById('minutos').value = '';
  document.getElementById('secundos').value = '';

  document.getElementById('graus1').value = '';
  document.getElementById('minutos1').value = '';
  document.getElementById('secundos1').value = '';
}