    
    // Função - Adicionar Marcador
    
    var groupLay1 = L.layerGroup([]);
      

      function addMarcador(){

        var latitude = document.getElementById('latitude').value.replace(/,/g, '.');
        var longitude = document.getElementById('longitude').value.replace(/,/g, '.');
        var vet = L.marker([latitude, longitude]);
        map.setView([latitude, longitude], 13);
        groupLay1.addLayer(vet);
        map.addLayer(groupLay1);
      }


    // Função - Remover Marcador

      function removerTema(){
        groupLay1.clearLayers();

        map.removeLayer(groupLay1);
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
      }