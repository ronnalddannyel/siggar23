
// biodivers_veg_sistemas_lacustres

var bioDivVegSistLacust = L.geoJSON(bioDivVegSistLacust, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_sistemas_lacustres</b></h6><p><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: "http://localhost/siggarr1/siggar23/mapas/zee/biodivers_veg_sistemas_lacustres.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            bioDivVegSistLacust.addData(data);
        });
    }
    }).error(function() {});

function bioDivVegSistLacust1(el){
    if(map.hasLayer(bioDivVegSistLacust)){
        map.removeLayer(bioDivVegSistLacust);
    }
    else {
        map.addLayer(bioDivVegSistLacust);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}