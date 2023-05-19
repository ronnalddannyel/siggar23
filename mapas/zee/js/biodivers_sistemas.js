// biodivers_sistemas

var bioDivSist = new L.geoJson(bioDivSist, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_sistemas</b></h6><p><b>sistema:</b> '+geom.properties.sistema+'<br><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_sistemas.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            bioDivSist.addData(data);
        });
    }
    }).error(function() {});

function bioDivSist1(el){
    if(map.hasLayer(bioDivSist)){
        map.removeLayer(bioDivSist);
    }
    else {
        map.addLayer(bioDivSist);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}