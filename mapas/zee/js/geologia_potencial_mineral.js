
// geologia_potencial_mineral

var groupLay_geoPotMineral = L.layerGroup([]);

function geoPotMineral1(el){


    groupLay_geoPotMineral.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_potencial_mineral.geojson", function(data) {  
        var geoPotMineral = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>geologia_potencial_mineral</b></h6><p><b>rm3:</b> '+geom.properties.rm3+'</p>');
            }
        });

        groupLay_geoPotMineral.addLayer(geoPotMineral);
    })


    if(map.hasLayer(groupLay_geoPotMineral)){
        map.removeLayer(groupLay_geoPotMineral);
    }
    else {
        map.addLayer(groupLay_geoPotMineral);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}