
// CAR RR
var groupLay_car = L.layerGroup([]);
var car145;

function car1(el){
    
    groupLay_car.clearLayers();
    $.getJSON(UrlFemarh+"/siggarr/mapas/CAR/car.geojson", function(data) {  
        var car = new L.geoJson(data, {
            color: '#e600a9',
            weight: 1,
            /*onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>CAR-RR</b></h6><p><b>Código Imovel:</b> '+geom.properties.cod_imovel+'<br><b>Status:</b> '+geom.properties.status_imovel+'<br><b>Data de Criação:</b> '+geom.properties.dat_criacao+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Condição:</b> '+geom.properties.condicao+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Código Município:</b> '+geom.properties.cod_municipio_ibge+'<br><b>Módulo Fiscal:</b> '+geom.properties.m_fiscal+'<br><b>Tipo Imóvel:</b> '+geom.properties.tipo_imovel+'</p>');
            }*/
        });
        car145 = car;

        groupLay_car.addLayer(car);






        var check1 = document.getElementById('54').checked;


        if(check1 === true){
    
          car.on('click', onClick1);
    
          legMostra();
    
          
      
        }else{
      
          car.off('click', onClick1);
    
          legMostra();
    
        }









        // CAR-RR

        var car112 = document.getElementById("teste60");
        if(car112.style.display === "block"){
            carHtml = '<img src="imagens/zee/retangulo-arredondado-e600a9.png" style="max-width:20px;max-height:20px;"> CAR-RR ('+data.totalFeatures+')';
            car112.innerHTML += carHtml;
        }else{
            car112.innerHTML = "";
        }
    })



    if(map.hasLayer(groupLay_car)){
        map.removeLayer(groupLay_car);
    }
    else {
        map.addLayer(groupLay_car);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
    //clickMap1();
}



function onClick1(e) { 
    lat = e.latlng.lat;
    lon = e.latlng.lng;
    ProcessClick1(lat,lon)
  }





/*
  function clickMap1 (){

    var check1 = document.getElementById('54').checked;


    if(check1 === true){

      map.on('click', onClick1);

      legMostra();

      
  
    }else{
  
      map.off('click', onClick1);

      legMostra();

    }
  
   }

*/

   var theMarker;
   var selPoly = [];
 
   function ProcessClick1(lat,lon){
   selPoly = [];
   
   if (theMarker != undefined) {
         map.removeLayer(theMarker);
     };
 
     a = 'No Data'; 
     aProj = new Array();
     
   theMarker = L.marker([lat,lon]);
   
   car145.eachLayer(function (layer) {
     
     isInside =turf.booleanPointInPolygon(theMarker.toGeoJSON(), layer.toGeoJSON());
 
     //isInside =turf.inside(theMarker.toGeoJSON(), layer.toGeoJSON());
   
     if (isInside){
         //selPoly.push(layer.feature);
         a = '<p><b>Código Imovel:</b> '+layer.feature.properties.cod_imovel+'<br><b>Status:</b> '+layer.feature.properties.status_imo+'<br><b>Data de Criação:</b> '+layer.feature.properties.dat_criaca+'<br><b>Área:</b> '+layer.feature.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Condição:</b> '+layer.feature.properties.condicao+'<br><b>UF:</b> '+layer.feature.properties.uf+'<br><b>Município:</b> '+layer.feature.properties.municipio+'<br><b>Código Município:</b> '+layer.feature.properties.cod_munici+'<br><b>Módulo Fiscal:</b> '+layer.feature.properties.m_fiscal+'<br><b>Tipo Imóvel:</b> '+layer.feature.properties.tipo_imove+'</p>';
     
         aProj.push(a);
      }
   });
   
 
     popupModal1(aProj); 
   
   
 }

 
 
 
 
 
 
 
 function popupModal1(a){

  let alvo1 = document.getElementById("aaa");
  alvo1.innerText = "";

  let alvo2 = document.getElementById("text1");
    alvo2.innerText = "";

    var element1 = document.querySelector(".text");
    var newHtml1 = '<h1 class="modal-title fs-5" id="staticBackdropLabel">CAR-RR</h1>';
    element1.innerHTML += newHtml1;

  let alvoA = document.querySelector(".modal-body");

  for (var i = 0; i < a.length; i++) {


  if(document.getElementById('54').checked === true){
    alvoA.innerHTML += a[i] + '<hr>';
  }else{
    alvoA.innerHTML += '';
    break;
  }

}
 
  $('#staticBackdrop').modal('show');
  
 };