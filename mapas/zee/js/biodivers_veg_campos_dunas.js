
// biodivers_veg_campos_dunas

var bioDivVegCampDunas = new L.geoJson(bioDivVegCampDunas, {
    onEachFeature: function (geom, layer) {
        layer.bindPopup('<h6><b>biodivers_veg_campos_dunas</b></h6><p><b>area:</b> '+geom.properties.area+'</p>');
    }
});

$.ajax({
    dataType: "json",
    url: "http://localhost/siggarr1/siggar23/mapas/zee/biodivers_veg_campos_dunas.geojson",
    success: function(data) {
        $(data.features).each(function(key, data) {
            bioDivVegCampDunas.addData(data);
        });
    }
    }).error(function() {});

function bioDivVegCampDunas1(el){
    if(map.hasLayer(bioDivVegCampDunas)){
        map.removeLayer(bioDivVegCampDunas);
    }
    else {
        map.addLayer(bioDivVegCampDunas);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}