var asd = new Array();
var ewq = rty.features;
for(i=0; i<ewq.length; i++){
  asd[i] = rty.features[i].properties.cod_imovel;
}


$(function() {
  $("#car" ).autocomplete({
    source: asd
  });
});