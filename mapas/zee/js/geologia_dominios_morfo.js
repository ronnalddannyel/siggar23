
// geologia_dominios_morfo

var groupLay_geoDomMorfo = L.layerGroup([]);

function geoDomMorfo1(el){


    groupLay_geoDomMorfo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geologia_dominios_morfo.geojson", function(data) {  
        var geoDomMorfo = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>geologia_dominios_morfo</b></h6><p><b>domínios:</b> '+geom.properties.domínios+'</p>');
            }
        });

        groupLay_geoDomMorfo.addLayer(geoDomMorfo);
    })

    if(map.hasLayer(groupLay_geoDomMorfo)){
        map.removeLayer(groupLay_geoDomMorfo);
    }
    else {
        map.addLayer(groupLay_geoDomMorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}