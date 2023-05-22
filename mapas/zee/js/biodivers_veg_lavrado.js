
// biodivers_veg_lavrado

var groupLay_bioDivVegLavr = L.layerGroup([]);

function bioDivVegLavr1(el){

    groupLay_bioDivVegLavr.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_lavrado.geojson", function(data) {  
        var bioDivVegLavr = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>biodivers_veg_lavrado</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
            }
        });

        groupLay_bioDivVegLavr.addLayer(bioDivVegLavr);
    })


    if(map.hasLayer(groupLay_bioDivVegLavr)){
        map.removeLayer(groupLay_bioDivVegLavr);
    }
    else {
        map.addLayer(groupLay_bioDivVegLavr);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}