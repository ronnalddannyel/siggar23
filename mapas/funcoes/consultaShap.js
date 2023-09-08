const input2 = document.querySelector('#shap');
var groupLay6 = L.layerGroup([]);

input2.addEventListener('change', function(){
    var file = input2.files[0];

    var fr = new FileReader();
    fr.onload = receiveBinary;
    fr.readAsArrayBuffer(file);
    
    function receiveBinary() {
        var result = fr.result;
        groupLay6.clearLayers();
        var shpfile = new L.Shapefile(result, {
            color: "red",
            fillOpacity: "0",
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
          groupLay6.addLayer(shpfile);
          map.addLayer(groupLay6);
    }
});



function removerLayShap(){
    map.removeLayer(groupLay6);
    document.getElementById('shap').value = '';
    map.setView([latit, long], zm);
  }