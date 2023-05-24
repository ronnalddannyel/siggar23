
// zonas_subzona1_zup

var groupLay_zonasSubzonaZup = L.layerGroup([]);

function zonasSubzonaZup1(el){

    groupLay_zonasSubzonaZup.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/zonas_subzona1_zup.geojson", function(data) {  
        var zonasSubzonaZup = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>zonas_subzona1_zup</b></h6><p><b>objectid:</b> '+geom.properties.objectid+'<br><b>subzona:</b> '+geom.properties.subzona+'<br><b>recom:</b> '+geom.properties.recom+'<br><b>macrozona:</b> '+geom.properties.macrozona+'<br><b>obs:</b> '+geom.properties.obs+'<br><b>obs2:</b> '+geom.properties.obs2+'</p>');
            }
        });

        groupLay_zonasSubzonaZup.addLayer(zonasSubzonaZup);
    })



    if(map.hasLayer(groupLay_zonasSubzonaZup)){
        map.removeLayer(groupLay_zonasSubzonaZup);
    }
    else {
        map.addLayer(groupLay_zonasSubzonaZup);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}