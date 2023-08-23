var asd = new Array();
console.log(asd);
var ewq = rty.features;
console.log(ewq); 
for(i=0; i<ewq.length; i++){
  asd[i] = rty.features[i].properties.cod_imovel;
}
console.log(asd);


$(function() {
  $("#car" ).autocomplete({
    source: asd
  });
});