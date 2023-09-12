
const input1 = document.querySelector('#arquivo1');
var groupLay3 = L.layerGroup([]);


input1.addEventListener('change', function(){
    const arquivo1 = this.files[0];
    const leitor1 = new FileReader();
    
    leitor1.addEventListener('load', function (){
        proj4.defs('EPSG:31974', '+proj=utm +zone=20 +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
        proj4.defs('EPSG:31975', '+proj=utm +zone=21 +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
        proj4.defs('EPSG:31980', '+proj=utm +zone=20+south +ellps=GRS80 +datum=SIRGAS2000 +units=m +no_defs');
        proj4.defs('EPSG:29170', '+proj=utm +zone=20 +ellps=GRS67 +datum=SAD69 +units=m +no_defs');
        proj4.defs('EPSG:29171', '+proj=utm +zone=21 +ellps=GRS67 +datum=SAD69 +units=m +no_defs');
        proj4.defs('EPSG:29180', '+proj=utm +zone=20+south +ellps=GRS67 +datum=SAD69 +units=m +no_defs');

        groupLay3.clearLayers();
        var testando1 = leitor1.result;
        var terf1 = JSON.parse(testando1);
        var district_boundary1 = L.Proj.geoJson(terf1, {
            color: "red",
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
          map.fitBounds(district_boundary1.getBounds());
          groupLay3.addLayer(district_boundary1);
          map.addLayer(groupLay3);
    });

    if(arquivo1){
        leitor1.readAsText(arquivo1);
    }
});

function removerLayJson1(){
    map.removeLayer(groupLay3);
    document.getElementById('arquivo1').value = '';
    map.setView([latit, long], zm);
  }




