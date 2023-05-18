
// geologia_geologico

var geoGeolog = L.geoJSON(geoGeolog, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_geologico</b></h6><p><b>rotulo:</b> '+geom.properties.rotulo+'<br><b>nomeext:</b> '+geom.properties.nomeext+'</p>');
    }
});

var UrlFemarh = "https://localhost/";


$.ajax({
    dataType: "json",
    url: "https://localhost/siggarr1/siggar23/mapas/zee/geologia_geologico.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            geoGeolog.addData(data);
        });
    }
    }).error(function() {});

function geoGeolog1(el){
    if(map.hasLayer(geoGeolog)){
        map.removeLayer(geoGeolog);
    }
    else {
        map.addLayer(geoGeolog);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}