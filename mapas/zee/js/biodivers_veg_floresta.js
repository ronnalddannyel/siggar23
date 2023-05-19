
// biodivers_veg_floresta

var bioDivVegFlor = new L.geoJson(bioDivVegFlor, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_floresta</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_floresta.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            bioDivVegFlor.addData(data);
        });
    }
    }).error(function() {});

function bioDivVegFlor1(el){
    if(map.hasLayer(bioDivVegFlor)){
        map.removeLayer(bioDivVegFlor);
    }
    else {
        map.addLayer(bioDivVegFlor);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}