
// vegetacao

var groupLay_vegetacao = L.layerGroup([]);

function vegetacao1(el){

    groupLay_vegetacao.clearLayers();
    $.getJSON(UrlFemarh+"siggarr1/siggar23/mapas/zee/vegetacao.geojson", function(data) {  
        var vegetacao = L.geoJSON(data, {
            onEachFeature: function (geom, layer) {
                layer.bindPopup('<h6><b>vegetacao</b></h6><p><b>cod_class:</b> '+geom.properties.cod_class+'<br><b>auxiliary_:</b> '+geom.properties.auxiliary_+'</p>');
            }
        });

        groupLay_vegetacao.addLayer(vegetacao);
    })

    if(map.hasLayer(groupLay_vegetacao)){
        map.removeLayer(groupLay_vegetacao);
    }
    else {
        map.addLayer(groupLay_vegetacao);
    }

    var display = document.getElementById(el).style.display;

    if(display == "block"){
        document.getElementById(el).style.display = 'none';
    }else{
        document.getElementById(el).style.display = 'block';
    }
}