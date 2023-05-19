
// geologia_dominios_morfo

var geoDomMorfo = L.geoJSON(geoDomMorfo, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>geologia_dominios_morfo</b></h6><p><b>domínios:</b> '+geom.properties.domínios+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_dominios_morfo.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            geoDomMorfo.addData(data);
        });
    }
    }).error(function() {});

function geoDomMorfo1(el){
    if(map.hasLayer(geoDomMorfo)){
        map.removeLayer(geoDomMorfo);
    }
    else {
        map.addLayer(geoDomMorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}