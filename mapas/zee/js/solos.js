
// solos

var solos = L.geoJSON(solos, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>solos</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>ha:</b> '+geom.properties.ha+'<br><b>siglan1:</b> '+geom.properties.siglan1+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/solos.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            solos.addData(data);
        });
    }
    }).error(function() {});

function solos1(el){
    if(map.hasLayer(solos)){
        map.removeLayer(solos);
    }
    else {
        map.addLayer(solos);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}