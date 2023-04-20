


const  urlParams = new URLSearchParams(window.location.search);

const pParam = urlParams.get("cpf");
console.log(pParam);

var pParam1 = pParam.replace('.', '');
var pParam1 = pParam1.replace('.', '');
var pParam1 = pParam1.replace('-', '');
var pParam1 = pParam1.replace('/', '');

if(pParam != null){
  var areaImovel2 = L.geoJSON(areaImovel1, {
    color: "red",
    fill: false,
    weight: "3",
    filter: function (features) {
      if(features.properties.cpf_cnpj !== null){
          var cpf1 = features.properties.cpf_cnpj;
          var cpf3 = cpf1.replace('.', '');
          var cpf3 = cpf3.replace('.', '');
          var cpf3 = cpf3.replace('-', '');
          var cpf3 = cpf3.replace('/', '');
      }
      if (cpf3 === pParam1) return true
  },
    onEachFeature: function (geom, layer) {
      layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
    }
  });
  map.fitBounds(areaImovel2.getBounds());
  map.addLayer(areaImovel2);
  
  
}