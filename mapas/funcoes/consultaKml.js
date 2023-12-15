document.getElementById('fileInput').addEventListener('change', function (e) {
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
  }