
// potencial_social_ambiental

var groupLay_potSocAmbiental = L.layerGroup([]);

function potSocAmbiental1(el){

    groupLay_potSocAmbiental.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_ambiental.geojson", function(data) {  
        var potSocAmbiental = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>potencial_social_ambiental</b></h6><p><b>nome:</b> '+geom.properties.nome+'<br><b>natural:</b> '+geom.properties.natural+'<br><b>objectid_1:</b> '+geom.properties.objectid_1+'</p>');
            }
        });

        groupLay_potSocAmbiental.addLayer(potSocAmbiental);
    })

    if(map.hasLayer(groupLay_potSocAmbiental)){
        map.removeLayer(groupLay_potSocAmbiental);
    }
    else {
        map.addLayer(groupLay_potSocAmbiental);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}