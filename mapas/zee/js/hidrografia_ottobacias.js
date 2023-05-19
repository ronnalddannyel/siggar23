
// hidrografia_ottobacias

var hidOttobacias = L.geoJSON(hidOttobacias, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>hidrografia_ottobacias</b></h6><p><b>regiao48:</b> '+geom.properties.regiao48+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/hidrografia_ottobacias.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            hidOttobacias.addData(data);
        });
    }
    }).error(function() {});

function hidOttobacias1(el){
    if(map.hasLayer(hidOttobacias)){
        map.removeLayer(hidOttobacias);
    }
    else {
        map.addLayer(hidOttobacias);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}