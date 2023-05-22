
// biodivers_veg_floresta

var groupLay_bioDivVegFlor = L.layerGroup([]);

function bioDivVegFlor1(el){

    groupLay_bioDivVegFlor.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_floresta.geojson", function(data) {  
        var bioDivVegFlor = new L.geoJson(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>biodivers_veg_floresta</b></h6><p><b>nomeabrev:</b> '+geom.properties.nomeabrev+'</p>');
            }
        });

        groupLay_bioDivVegFlor.addLayer(bioDivVegFlor);
    })


    

    if(map.hasLayer(groupLay_bioDivVegFlor)){
        map.removeLayer(groupLay_bioDivVegFlor);
    }
    else {
        map.addLayer(groupLay_bioDivVegFlor);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}