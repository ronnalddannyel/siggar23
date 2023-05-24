
// zonas_zona1_zup

var groupLay_zonasZonaZup = L.layerGroup([]);

function zonasZonaZup1(el){

    groupLay_zonasZonaZup.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_zona1_zup.geojson", function(data) {  
        var zonasZonaZup = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_zona1_zup</b></h6><p><b>nome:</b> '+geom.properties.nome+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
            }
        });

        groupLay_zonasZonaZup.addLayer(zonasZonaZup);
    })



    if(map.hasLayer(groupLay_zonasZonaZup)){
        map.removeLayer(groupLay_zonasZonaZup);
    }
    else {
        map.addLayer(groupLay_zonasZonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}