
// geomorfologia_unidades_geomorfo

var geoUndGeomorfo = L.geoJSON(geoUndGeomorfo, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geomorfologia_unidades_geomorfo</b></h6><p><b>uni_geomor:</b> '+geom.properties.uni_geomor+'<br><b>sigla:</b> '+geom.properties.sigla+'<br><b>legenda:</b> '+geom.properties.legenda+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/geomorfologia_unidades_geomorfo.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            geoUndGeomorfo.addData(data);
        });
    }
    }).error(function() {});

function geoUndGeomorfo1(el){
    if(map.hasLayer(geoUndGeomorfo)){
        map.removeLayer(geoUndGeomorfo);
    }
    else {
        map.addLayer(geoUndGeomorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}