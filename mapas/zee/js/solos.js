
// solos

var groupLay_solos = L.layerGroup([]);

function solos1(el){

    groupLay_solos.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/solos.geojson", function(data) {  
        var solos = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>solos</b></h6><p><b>sigla:</b> '+geom.properties.sigla+'<br><b>nome:</b> '+geom.properties.nome+'<br><b>classifica:</b> '+geom.properties.classifica+'<br><b>ha:</b> '+geom.properties.ha+'<br><b>siglan1:</b> '+geom.properties.siglan1+'</p>');
            }
        });

        groupLay_solos.addLayer(solos);
    })

    if(map.hasLayer(groupLay_solos)){
        map.removeLayer(groupLay_solos);
    }
    else {
        map.addLayer(groupLay_solos);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}