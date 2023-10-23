const input = document.querySelector('#arquivo');
//var groupLay2 = L.layerGroup([]);


input.addEventListener('change', function(){
    var nome = this.files[0].name;
    const arquivo = this.files[0];
    const leitor = new FileReader();
    
    leitor.addEventListener('load', function (){
        //groupLay2.clearLayers();
        var testando = leitor.result;
        var terf = JSON.parse(testando);
        var district_boundary = new L.geoJSON(terf, {
            color: generateColor(),
            fillOpacity: "0",
            weight: 3,
            onEachFeature: function(feature, layer) {
                if (feature.properties) {
                  layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return k + ": " + feature.properties[k];
                  }).join("<br />"), {
                    maxHeight: 200
                  });
                }
              }
          });
          map.fitBounds(district_boundary.getBounds());
          //groupLay2.addLayer(district_boundary);
          map.addLayer(district_boundary);
          layerControl.addOverlay(district_boundary, nome.slice(0, -8));
    });

    if(arquivo){
        leitor.readAsText(arquivo);
    }
});

function removerLayJson(){
    //map.removeLayer(groupLay2);
    document.getElementById('arquivo').value = '';
    //map.setView([latit, long], zm);
  }




