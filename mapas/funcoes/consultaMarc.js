    
    // Função - Adicionar Marcador
    
    var groupLay1 = L.layerGroup([]);
      

      function addMarcador(){
        groupLay1.clearLayers();

        var latitude = document.getElementById('latitude').value;
        var longitude = document.getElementById('longitude').value;
        var vet = L.marker([latitude, longitude]);
        groupLay1.addLayer(vet);
        map.addLayer(groupLay1);
      }


    // Função - Remover Marcador

      function removerTema(){
        map.removeLayer(groupLay1);
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
      }