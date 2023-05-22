// biodivers_sistemas

var groupLay_bioDivSist = L.layerGroup([]);

function bioDivSist1(el){
    groupLay_bioDivSist.clearLayers();

    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/biodivers_sistemas.geojson", function(data) {  
        var bioDivSist = new L.geoJson(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>biodivers_sistemas</b></h6><p><b>sistema:</b> '+geom.properties.sistema+'<br><b>padrão:</b> '+geom.properties.padrão+'<br><b>associação:</b> '+geom.properties.associação+'</p>');
            }
        });

        groupLay_bioDivSist.addLayer(bioDivSist);
    })

    if(map.hasLayer(groupLay_bioDivSist)){
        map.removeLayer(groupLay_bioDivSist);
    }
    else {
        map.addLayer(groupLay_bioDivSist);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}