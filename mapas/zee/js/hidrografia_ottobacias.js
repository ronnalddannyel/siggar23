
// hidrografia_ottobacias

var groupLay_hidOttobacias = L.layerGroup([]);

function hidOttobacias1(el){

    groupLay_hidOttobacias.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/hidrografia_ottobacias.geojson", function(data) {  
        var hidOttobacias = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>hidrografia_ottobacias</b></h6><p><b>regiao48:</b> '+geom.properties.regiao48+'</p>');
            }
        });

        groupLay_hidOttobacias.addLayer(hidOttobacias);
    })

    if(map.hasLayer(groupLay_hidOttobacias)){
        map.removeLayer(groupLay_hidOttobacias);
    }
    else {
        map.addLayer(groupLay_hidOttobacias);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}