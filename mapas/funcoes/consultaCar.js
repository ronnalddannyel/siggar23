
// Função - Adicionar Polígono (CAR)


var groupLayCar = L.layerGroup([]);
var groupLayCar2 = L.layerGroup([]);

        
        function car2(){

        groupLayCar.clearLayers();

        var car2 = document.getElementById('car').value;
        $.getJSON(UrlFemarh+"/siggarr/mapas/CAR/car.geojson", function(data) { 

            var test;

            var car = new L.geoJson(data, {
                color: "red",
                fillOpacity: "0",
                weight: 3,
                filter: function (features) {
                    if(features.properties.cod_imovel !== null){
                        var car1 = features.properties.cod_imovel;
                    }
                    if (car1 === car2) {
                      test = features;
                      return true
                  }
                },
                onEachFeature: function (geom, layer) {
                  layer.bindPopup('<h6><b>CAR-RR</b></h6><p><b>Código Imovel:</b> '+geom.properties.cod_imovel+'<br><b>Status:</b> '+geom.properties.status_imovel+'<br><b>Data de Criação:</b> '+geom.properties.dat_criacao+'<br><b>Área:</b> '+geom.properties.area.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.<br><b>Condição:</b> '+geom.properties.condicao+'<br><b>UF:</b> '+geom.properties.uf+'<br><b>Município:</b> '+geom.properties.municipio+'<br><b>Código Município:</b> '+geom.properties.cod_municipio_ibge+'<br><b>Módulo Fiscal:</b> '+geom.properties.m_fiscal+'<br><b>Tipo Imóvel:</b> '+geom.properties.tipo_imovel+'</p>'+'<br><button type="button" id="aProj" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Ver Relatório de Sobreposição</button>');
                }
            });


            map.fitBounds(car.getBounds());
            groupLayCar.addLayer(car);
            map.addLayer(groupLayCar);


            var pol1 = test;
            var arCar = (turf.area(pol1))/10000;


            // UCE

            var pol2 = ucsEst.features;
            var ucsArray = new Array();
           
            for(i=0; i < pol2.length; i++){
            
             var pol3 = pol2[i];

             var intersection = turf.intersect(pol3, pol1);
             if(intersection !== null){



               var fjf = L.geoJSON(intersection, {
                color: "#32CD32"
               });
               groupLayCar2.addLayer(fjf);

               var nomeUcs = pol2[i].properties.nomeabrev;
               console.log(nomeUcs);

               ucsArray.push(nomeUcs);

               var ar = (turf.area(intersection))/10000;
               var area = ar.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area);

               ucsArray.push(area);
             }      
           
            }

            if(ucsArray.length != 0){
              console.log(ucsArray);
            }else{
              ucsArray.push(0+' ha.');
              console.log(ucsArray);
            }


            // Outorgas Superficial

            var pol4 = outSuper3.features;
            var contOutSuper = 0;
           
            for(i=0; i < pol4.length; i++){
            
             var pol5 = pol4[i];
             var intersection1 = turf.booleanWithin(pol5, pol1);
             //turf.booleanWithin(theMarker.toGeoJSON(), layer.toGeoJSON())
             
             if(intersection1 == true){

              var marker = L.geoJSON(pol5, {
                pointToLayer: function (geom, latlng) {
                  return L.marker(latlng, {icon: blueIcon2});
                }
              });
              groupLayCar2.addLayer(marker);


              var int1 = intersection1;

              contOutSuper++;
             }      
            }

            if(int1){
              console.log(int1);
            }else{
              var int1 = false;
              console.log(int1);
            }
            

            // Outorgas Subterrânea


            var pol6 = outSub3.features;
            var contOutSub = 0;
           
            for(i=0; i < pol6.length; i++){
            
             var pol7 = pol6[i];
             var intersection2 = turf.booleanWithin(pol7, pol1);
             //turf.booleanWithin(theMarker.toGeoJSON(), layer.toGeoJSON())
             
             if(intersection2 == true){

              var marker1 = L.geoJSON(pol7, {
                pointToLayer: function (geom, latlng) {
                  return L.marker(latlng, {icon: MarromIcon});
                }
              });
              groupLayCar2.addLayer(marker1);


              var int1 = intersection1;


              var int2 = intersection2;
              contOutSub++;
             }
            }

            if(int2){
              console.log(int2);
            }else{
              var int2 = false;
              console.log(int2);
            }


            // UCE



            var pol8 = ucsFed.features;
            var uceArray = new Array();
           
            for(i=0; i < pol8.length; i++){
            
             var pol9 = pol8[i];
             var intersection3 = turf.intersect(pol9, pol1);
             if(intersection3 !== null){
               var fjf1 = L.geoJSON(intersection3, {
                color: "#006400"
               });
               groupLayCar2.addLayer(fjf1);



               var nomeUce = pol8[i].properties.nome_area;
               console.log(nomeUce);

               uceArray.push(nomeUce);

               var ar1 = (turf.area(intersection3))/10000;
               var area1 = ar1.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area1);

               uceArray.push(area1);


             }      
           
            }

            if(uceArray.length != 0){
              console.log(uceArray);
            }else{
              uceArray.push(0+' ha.');
              console.log(uceArray);
            }




            // Áreas Militares



            var pol10 = arMilit.features;
            var militArray = new Array();
           
            for(i=0; i < pol10.length; i++){
            
             var pol11 = pol10[i];
             var intersection4 = turf.intersect(pol11, pol1);
             if(intersection4 !== null){
               var fjf2 = L.geoJSON(intersection4, {
                color: "#FF8C00"
               });
               groupLayCar2.addLayer(fjf2);


               var ar2 = (turf.area(intersection4))/10000;
               var area2 = ar2.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area2);

               militArray.push(area2);



             }      
           
            }

            if(militArray.length != 0){
              console.log(militArray);
            }else{
              militArray.push(0+' ha.');
              console.log(militArray);
            }



            // Terras Indígenas


            var pol12 = limiteTerraIndigena1.features;
            var indigArray = new Array();
           
            for(i=0; i < pol12.length; i++){
            
             var pol13 = pol12[i];
             var intersection5 = turf.intersect(pol13, pol1);
             if(intersection5 !== null){
               var fjf3 = L.geoJSON(intersection5, {
                color: "#cdaa66"
               });

               groupLayCar2.addLayer(fjf3);


               var nomeInd = pol12[i].properties.nomeabrev;
               console.log(nomeInd);

               indigArray.push(nomeInd);

               var ar3 = (turf.area(intersection5))/10000;
               var area3 = ar3.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area3);

               indigArray.push(area3);


             }      
           
            }

            if(indigArray.length != 0){
              console.log(indigArray);
            }else{
              indigArray.push(0+' ha.');
              console.log(indigArray);
            }


            // Áreas Inalienáveis



            var pol14 = areaInalienaveis1.features;
            var inalienArray = new Array();
           
            for(i=0; i < pol14.length; i++){
            
             var pol15 = pol14[i];
             var intersection6 = turf.intersect(pol15, pol1);
             if(intersection6 !== null){
               var fjf4 = L.geoJSON(intersection6, {
                color: "#808080"
               });
               groupLayCar2.addLayer(fjf4);


               var ar4 = (turf.area(intersection6))/10000;
               var area4 = ar4.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area4);

               inalienArray.push(area4);
             }      
           
            }

            if(inalienArray.length != 0){
              console.log(inalienArray);
            }else{
              inalienArray.push(0+' ha.');
              console.log(inalienArray);
            }




            // Área do Projeto

            var projArray = new Array();
            var pol16 = areaProjeto1.features;
           
            for(i=0; i < pol16.length; i++){
            
             var pol17 = pol16[i];
             var intersection7 = turf.intersect(pol17, pol1);
             if(intersection7 !== null){
               var fjf5 = L.geoJSON(intersection7, {
                color: "black"
               });
               groupLayCar2.addLayer(fjf5);


               if(pol16[i].properties.fk_tipo_projeto == 1){
                var nomeProj = 'CRRAF - Certificado Roraimense de Regularidade Ambiental (Floresta)';
              }else if(pol16[i].properties.fk_tipo_projeto == 2){
                var nomeProj = 'DRAF - Declaração de Regularização Ambiental (Floresta)';
              }else if(pol16[i].properties.fk_tipo_projeto == 3){
                var nomeProj = 'AUAS - Autorização de Uso Alternativo do Solo';
              }else if(pol16[i].properties.fk_tipo_projeto == 4){
                var nomeProj = 'ASV - Autorização de Supressão Vegetal';
              }else if(pol16[i].properties.fk_tipo_projeto == 5){
                var nomeProj = 'PMFS - Plano de Manejo Florestal Sustentável';
              }else if(pol16[i].properties.fk_tipo_projeto == 6){
                var nomeProj = 'POA - Plano Operacional Anual';
              }else if(pol16[i].properties.fk_tipo_projeto == 7){
                var nomeProj = 'PRAD - Plano de Recuperação de Área Degradada';
              }else if(pol16[i].properties.fk_tipo_projeto == 8){
                var nomeProj = 'LAU - Licença Ambiental Única';
              }else if(pol16[i].properties.fk_tipo_projeto == 9){
                var nomeProj = 'LAS - Licença Ambiental Simplificada';
              }else if(pol16[i].properties.fk_tipo_projeto == 10){
                var nomeProj = 'CRRAC - Certificado Roraimense de Regularidade Ambiental (Cerrado)';
              }else if(pol16[i].properties.fk_tipo_projeto == 11){
                var nomeProj = 'DRAC - Declaração de Regularização Ambiental (Cerrado)';
              }else{
                  var nomeProj = pol16[i].properties.fk_tipo_projeto;
              }

               console.log(nomeProj);

               projArray.push(nomeProj);


               var ar5 = (turf.area(intersection7))/10000;
               var area5 = ar5.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area5);


               projArray.push(area5);
               
             }      
           

            }

            if(projArray.length != 0){
              console.log(projArray);
            }else{
              projArray.push(0+' ha.');
              console.log(projArray);
            }


            // Área do Projeto 4mf



            var pol18 = areaProjeto1_4mf.features;

            var projArray_4mf = new Array();
           
            for(i=0; i < pol18.length; i++){
            
             var pol19 = pol18[i];
             var intersection8 = turf.intersect(pol19, pol1);
             if(intersection8 !== null){
               var fjf6 = L.geoJSON(intersection8, {
                color: "blue"
               });
               groupLayCar2.addLayer(fjf6);


               if(pol18[i].properties.fk_tipo_projeto == 1){
                var nomeProj_4mf = 'CRRAF - Certificado Roraimense de Regularidade Ambiental (Floresta)';
              }else if(pol18[i].properties.fk_tipo_projeto == 2){
                var nomeProj_4mf = 'DRAF - Declaração de Regularização Ambiental (Floresta)';
              }else if(pol18[i].properties.fk_tipo_projeto == 3){
                var nomeProj_4mf = 'AUAS - Autorização de Uso Alternativo do Solo';
              }else if(pol18[i].properties.fk_tipo_projeto == 4){
                var nomeProj_4mf = 'ASV - Autorização de Supressão Vegetal';
              }else if(pol18[i].properties.fk_tipo_projeto == 5){
                var nomeProj_4mf = 'PMFS - Plano de Manejo Florestal Sustentável';
              }else if(pol18[i].properties.fk_tipo_projeto == 6){
                var nomeProj_4mf = 'POA - Plano Operacional Anual';
              }else if(pol18[i].properties.fk_tipo_projeto == 7){
                var nomeProj_4mf = 'PRAD - Plano de Recuperação de Área Degradada';
              }else if(pol18[i].properties.fk_tipo_projeto == 8){
                var nomeProj_4mf = 'LAU - Licença Ambiental Única';
              }else if(pol18[i].properties.fk_tipo_projeto == 9){
                var nomeProj_4mf = 'LAS - Licença Ambiental Simplificada';
              }else if(pol18[i].properties.fk_tipo_projeto == 10){
                var nomeProj_4mf = 'CRRAC - Certificado Roraimense de Regularidade Ambiental (Cerrado)';
              }else if(pol18[i].properties.fk_tipo_projeto == 11){
                var nomeProj_4mf = 'DRAC - Declaração de Regularização Ambiental (Cerrado)';
              }else{
                  var nomeProj_4mf = pol18[i].properties.fk_tipo_projeto;
              }

               console.log(nomeProj_4mf);

               projArray_4mf.push(nomeProj_4mf);


               var ar6 = (turf.area(intersection8))/10000;
               var area6 = ar6.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area6);


               projArray_4mf.push(area6);



             }      
           
            }

            if(projArray_4mf.length != 0){
              console.log(projArray_4mf);
            }else{
              projArray_4mf.push(0+' ha.');
              console.log(projArray_4mf);
            }



            // Projeto de Assentamento


            var pol20 = projAssent1.features;
            var assentArray = new Array();
           
            for(i=0; i < pol20.length; i++){
            
             var pol21 = pol20[i];
             var intersection9 = turf.intersect(pol21, pol1);
             if(intersection9 !== null){
               var fjf7 = L.geoJSON(intersection9, {
                color: "#FFD700"
               });
               groupLayCar2.addLayer(fjf7);


               var nomeAssent = pol20[i].properties.nome_area;
               console.log(nomeAssent);

               assentArray.push(nomeAssent);


               var ar7 = (turf.area(intersection9))/10000;
               var area7 = ar7.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area7);


               assentArray.push(area7);



             }      
           
            }

            if(assentArray.length != 0){
              console.log(assentArray);
            }else{
              assentArray.push(0+' ha.');
              console.log(assentArray);
            }


            // Embargos


            var pol22 = embarg1.features;
            var embarArray = new Array();
            var contEmb = 0;
           
            for(i=0; i < pol22.length; i++){
            
             var pol23 = pol22[i];
             var intersection10 = turf.intersect(pol23, pol1);
             if(intersection10 !== null){
               var fjf8 = L.geoJSON(intersection10, {
                color: "#835acb"
               });
               groupLayCar2.addLayer(fjf8);


               var nomeEmbar = pol22[i].properties.qtd_area_desmatada;
               console.log(nomeEmbar);

               embarArray.push(nomeEmbar);


               var ar8 = (turf.area(intersection10))/10000;
               var area8 = ar8.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area8);


               embarArray.push(area8);
               contEmb++;

             }      
           
            }

            embarArray.push(contEmb);

            if(embarArray.length != 0){
              console.log(embarArray);
            }else{
              embarArray.push(0+' ha.');
              console.log(embarArray);
            }


            // Sitios Arquiologicos Poligonos


            var pol24 = sitArPol.features;
            var sitArray = new Array();
            var contSitPol = 0;
           
            for(i=0; i < pol24.length; i++){
            
             var pol25 = pol24[i];
             var intersection11 = turf.intersect(pol25, pol1);
             if(intersection11 !== null){
               var fjf9 = L.geoJSON(intersection11, {
                color: "#8B0000"
               });
               groupLayCar2.addLayer(fjf9);



               var nomeSit = pol24[i].properties.identificacao_bem;
               console.log(nomeSit);

               sitArray.push(nomeSit);


               var ar9 = (turf.area(intersection11))/10000;
               var area9 = ar9.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
               console.log(area9);


               sitArray.push(area9);
               contSitPol++;


             }      
           
            }

            sitArray.push(contSitPol);

            if(sitArray.length != 0){
              console.log(sitArray);
            }else{
              sitArray.push(0+' ha.');
              console.log(sitArray);
            }



            // Sitios Arquiologicos Pontos


            var pol26 = sitArPon.features;
            var contSitPon = 0;
           
            for(i=0; i < pol26.length; i++){
            
             var pol27 = pol26[i];
             var intersection12 = turf.booleanWithin(pol27, pol1);
             //turf.booleanWithin(theMarker.toGeoJSON(), layer.toGeoJSON())
             
             if(intersection12 == true){

              var marker2 = L.geoJSON(pol27, {
                pointToLayer: function (geom, latlng) {
                  return L.marker(latlng, {icon: redIcon})
                }
              });
              groupLayCar2.addLayer(marker2);

              var int3 = intersection12;

              contSitPon++;
             }
            }

            if(int3){
              console.log(int3);
            }else{
              var int3 = false;
              console.log(int3);
            }



            // CAR


            var pol28 = rty.features;
            var carArray = new Array();
            var contCar = 0;
           
            for(i=0; i < pol28.length; i++){
            
             var pol29 = pol28[i];
             var intersection13 = turf.intersect(pol29, pol1);
             if(intersection13 !== null){
              
              if(car2 ===  pol28[i].properties.cod_imovel){
                continue;
              }else{

                var fjf10 = L.geoJSON(intersection13, {
                  color: "#e600a9"
                 });
                 groupLayCar2.addLayer(fjf10);
  
  
  
                 var nomeCar = pol28[i].properties.cod_imovel;
                 var statusCar = pol28[i].properties.status_imovel;
  
                 carArray.push(nomeCar);
                 carArray.push(statusCar);
  
  
                 var ar10 = (turf.area(intersection13))/10000;
                 var area10 = ar10.toLocaleString('pt-BR', {minimumFractionDigits: 4,maximumFractionDigits: 4})+' ha.';
                 console.log(area10);


                 var porc = (ar10/arCar)*100;
                 var por = porc.toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})+'%';
                 carArray.push(por);
  
  
                 carArray.push(area10);
                 contCar++;


              }


             }      
           
            }

            carArray.push(contCar);

            if(carArray.length != 0){
              console.log(carArray);
            }else{
              carArray.push(0+' ha.');
              console.log(carArray);
            }


            // CAR - Legenda

            document.getElementById('sobrepCar').style.display = 'block';


            carRelatorio(ucsArray, uceArray, militArray, indigArray, inalienArray, projArray, projArray_4mf, assentArray, embarArray, sitArray, contOutSuper, contOutSub, contSitPon, carArray);

    
        })


      }


      // Função - Remover Polígono (Imóvel)

      function removeCar(){
        map.removeLayer(groupLayCar);
        document.getElementById('car').value = '';
        map.setView([latit, long], zm);


        groupLayCar2.clearLayers();
        if(map.hasLayer(groupLayCar2)){
          map.removeLayer(groupLayCar2);
        }
        document.getElementById('sobrepCar').style.display = 'none';
        
        // desmarcar os checkboxs da pesquisa do CAR

        if(document.getElementById('sCar').checked === true){
          document.getElementById('sCar').checked = false;
        }


      } 