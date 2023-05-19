
// geologia_potencial_mineral

var geoPotMineral = L.geoJSON(geoPotMineral, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_potencial_mineral</b></h6><p><b>rm3:</b> '+geom.properties.rm3+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_potencial_mineral.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            geoPotMineral.addData(data);
        });
    }
    }).error(function() {});

function geoPotMineral1(el){
    if(map.hasLayer(geoPotMineral)){
        map.removeLayer(geoPotMineral);
    }
    else {
        map.addLayer(geoPotMineral);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}