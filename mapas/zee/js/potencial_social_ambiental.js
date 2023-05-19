
// potencial_social_ambiental

var potSocAmbiental = L.geoJSON(potSocAmbiental, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>potencial_social_ambiental</b></h6><p><b>nome:</b> '+geom.properties.nome+'<br><b>natural:</b> '+geom.properties.natural+'<br><b>objectid_1:</b> '+geom.properties.objectid_1+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/potencial_social_ambiental.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            potSocAmbiental.addData(data);
        });
    }
    }).error(function() {});

function potSocAmbiental1(el){
    if(map.hasLayer(potSocAmbiental)){
        map.removeLayer(potSocAmbiental);
    }
    else {
        map.addLayer(potSocAmbiental);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}