
// biodivers_veg_lavrado

var bioDivVegLavr = L.geoJSON(bioDivVegLavr, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_lavrado</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: "http://localhost/siggarr1/siggar23/mapas/zee/biodivers_veg_lavrado.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            bioDivVegLavr.addData(data);
        });
    }
    }).error(function() {});

function bioDivVegLavr1(el){
    if(map.hasLayer(bioDivVegLavr)){
        map.removeLayer(bioDivVegLavr);
    }
    else {
        map.addLayer(bioDivVegLavr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}