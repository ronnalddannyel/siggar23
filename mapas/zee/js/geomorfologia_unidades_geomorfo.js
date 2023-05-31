
// geomorfologia_unidades_geomorfo

var groupLay_geoUndGeomorfo = L.layerGroup([]);

function geoUndGeomorfo1(el){

    groupLay_geoUndGeomorfo.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/geomorfologia_unidades_geomorfo.geojson", function(data) {  
        var geoUndGeomorfo = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>Geomorfológia</b></h6><p><b>Unidade Geomorfológica:</b> '+geom.properties.uni_geomor+'<br><b>Sigla:</b> '+geom.properties.sigla+'</p>');
            }
        });

        groupLay_geoUndGeomorfo.addLayer(geoUndGeomorfo);
    })

    if(map.hasLayer(groupLay_geoUndGeomorfo)){
        map.removeLayer(groupLay_geoUndGeomorfo);
    }
    else {
        map.addLayer(groupLay_geoUndGeomorfo);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}