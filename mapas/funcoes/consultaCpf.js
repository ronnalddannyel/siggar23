
// Função - Adicionar Polígono (Imóvel)


//var groupLay = L.layerGroup([]);
        
        function cpf2(areaImovel1, areaImovel_4mf){
        //groupLay.clearLayers();
        
        var cpf = document.getElementById('cpf').value;
        var cpf2 = cpf.replace('.', '');
        var cpf2 = cpf2.replace('.', '');
        var cpf2 = cpf2.replace('-', '');
        var cpf2 = cpf2.replace('/', '');

        var ffg = null;

        var areaImo = L.geoJSON(areaImovel1, {
          color: generateColor(),
          fillOpacity: "0",
          weight: 3,
          filter: function (features) {
              if(features.properties.cpf_cnpj !== null){
                  var cpf1 = features.properties.cpf_cnpj;
                  var cpf3 = cpf1.replace('.', '');
                  var cpf3 = cpf3.replace('.', '');
                  var cpf3 = cpf3.replace('-', '');
                  var cpf3 = cpf3.replace('/', '');
              }
              if (cpf3 === cpf2) {
                ffg = cpf3;
                return true
            }
          },
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.municip+'<br><b>Gleba:</b> '+geom.properties.gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
          }
        });

        var areaImov2_4mf = L.geoJSON(areaImovel_4mf, {
          color: generateColor(),
          fillOpacity: "0",
          weight: "3",
          filter: function (features) {
              if(features.properties.cpf_cnpj !== null){
                  var cpf1 = features.properties.cpf_cnpj;
                  var cpf3 = cpf1.replace('.', '');
                  var cpf3 = cpf3.replace('.', '');
                  var cpf3 = cpf3.replace('-', '');
                  var cpf3 = cpf3.replace('/', '');
              }
              if (cpf3 === cpf2) return true
          },
          onEachFeature: function (geom, layer) {
            layer.bindPopup('<h6><b>Área do Imóvel</b></h6><p><b>Imóvel:</b> '+geom.properties.nome_imov+'<br><b>Município:</b> '+geom.properties.fk_municip+'<br><b>Gleba:</b> '+geom.properties.fk_gleba+'<br><b>CAR:</b> '+geom.properties.car+'<br><b>SIGEF:</b> '+geom.properties.sigef+'<br><b>Área:</b> '+geom.properties.area+' ha.</p>');
          }
        });
      
        if(ffg != null){
          map.fitBounds(areaImo.getBounds());
          //groupLay.addLayer(areaImo);
          map.addLayer(areaImo);
          layerControl.addOverlay(areaImo, cpf);
        }else{
          map.fitBounds(areaImov2_4mf.getBounds());
          //groupLay.addLayer(areaImov2_4mf);
          map.addLayer(areaImov2_4mf);
          layerControl.addOverlay(areaImov2_4mf, cpf);
        }


      }


      // Função - Remover Polígono (Imóvel)

      function removeCpf(){
        //map.removeLayer(groupLay);
        document.getElementById('cpf').value = '';
        //map.setView([latit, long], zm);
      } 