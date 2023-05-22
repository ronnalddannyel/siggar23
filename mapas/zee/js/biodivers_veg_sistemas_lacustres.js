
// biodivers_veg_sistemas_lacustres

var groupLay_bioDivVegSistLacust = L.layerGroup([]);

function bioDivVegSistLacust1(el){

    groupLay_bioDivVegSistLacust.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_veg_sistemas_lacustres.geojson", function(data) {  
        var bioDivVegSistLacust = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>biodivers_veg_sistemas_lacustres</b></h6><p><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
            }
        });

        groupLay_bioDivVegSistLacust.addLayer(bioDivVegSistLacust);
    })


    if(map.hasLayer(groupLay_bioDivVegSistLacust)){
        map.removeLayer(groupLay_bioDivVegSistLacust);
    }
    else {
        map.addLayer(groupLay_bioDivVegSistLacust);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}