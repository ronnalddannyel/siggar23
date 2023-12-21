/*document.getElementById('fileInput').addEventListener('change', function (e) {
    var nome = e.target.files[0].name;
    console.log(nome);
    var file = e.target.files[0];
  
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var kmltext = e.target.result;
  
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        map.addLayer(track);
        layerControl.addOverlay(track, nome.slice(0, -4));
        // Ajuste o mapa para mostrar o KML
        const bounds = track.getBounds();
        map.fitBounds(bounds);
      };
      reader.readAsText(file);
    }
  });


  function removerLayKml(){
    //map.removeLayer(groupLay2);
    document.getElementById('fileInput').value = '';
    //map.setView([latit, long], zm);
  }*/



  document.getElementById('fileInput').addEventListener('change', function (e) {
    var nome = e.target.files[0].name;
    var file = e.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function (event) {
        var content = event.target.result;
        loadKML(content, nome);
    };

    reader.readAsText(file);
  });

  function loadKML(content, nome) {

    // Use Leaflet Omnivore para carregar o KML
    var layer = omnivore.kml.parse(content).addTo(map);
    layerControl.addOverlay(layer, nome.slice(0, -4));



    layer.on('click', function(event) {
      var coordenadas = event.latlng; // Coordenadas onde o usuário clicou
      var propriedades = event.layer.feature.properties; // Propriedades da camada KML
  
      // Verifica se a propriedade 'description' está presente
      if (propriedades && propriedades.description) {
          // Quebra a descrição por linhas para exibir no popup
          var linhasDescricao = propriedades.description.split('<br />').join('\n'); // Supondo que a descrição está formatada com <br /> para quebras de linha
  
          // Crie e exiba o popup com a descrição formatada por linha
          L.popup()
              .setLatLng(coordenadas)
              .setContent("<b>Descrição:</b><br>" + linhasDescricao)
              .openOn(map);
      } else {
          // Se não houver descrição, exiba uma mensagem padrão
          L.popup()
              .setLatLng(coordenadas)
              .setContent("Nenhuma descrição disponível.")
              .openOn(map);
      }
    });



    // Ajuste o mapa para se ajustar à camada
    map.fitBounds(layer.getBounds());
  }


function removerLayKml(){
  //map.removeLayer(groupLay2);
  document.getElementById('fileInput').value = '';
  //map.setView([latit, long], zm);
}