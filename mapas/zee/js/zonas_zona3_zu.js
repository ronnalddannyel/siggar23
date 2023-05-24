
// zonas_zona3_zu

var groupLay_zonasZonaZu = L.layerGroup([]);

function zonasZonaZu1(el){

    groupLay_zonasZonaZu.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_zona3_zu.geojson", function(data) {  
        var zonasZonaZu = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_zona3_zu</b></h6><p><b>municipio:</b> '+geom.properties.municipio+'<br><b>parcela:</b> '+geom.properties.parcela+'<br><b>fonte:</b> '+geom.properties.fonte+'<br><b>obs:</b> '+geom.properties.obs+'<br><b>nome_unico:</b> '+geom.properties.nome_unico+'<br><b>area:</b> '+geom.properties.area+'<br><b>perimeter:</b> '+geom.properties.perimeter+'</p>');
            }
        });

        groupLay_zonasZonaZu.addLayer(zonasZonaZu);
    })



    if(map.hasLayer(groupLay_zonasZonaZu)){
        map.removeLayer(groupLay_zonasZonaZu);
    }
    else {
        map.addLayer(groupLay_zonasZonaZu);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}